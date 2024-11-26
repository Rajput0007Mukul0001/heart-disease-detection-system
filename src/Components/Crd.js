'use client'

import React, { useState } from "react";
import axios from "axios";



function Crd() {
    const [file, setFile] = useState(null);
    const [parsedData, setParsedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = "faiz018fe@gmail.com_Y1p12TG91vSaK15fhL2jw6wx6iEsRWRhe2Ir9N66aiT8x2M5NZaqLMO096W4UsVi"; // Replace with your PDF.co API key

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Step 1: Get presigned URL to upload the file
            const presignedUrlResponse = await axios.get(`https://api.pdf.co/v1/file/upload/get-presigned-url?contenttype=application/octet-stream&name=${file.name}`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });

            const uploadUrl = presignedUrlResponse.data.presignedUrl;
            const uploadedFileUrl = presignedUrlResponse.data.url;

            // Step 2: Upload the file to the presigned URL
            await axios.put(uploadUrl, file, {
                headers: {
                    'Content-Type': 'application/octet-stream'
                }
            });

            // Step 3: Convert the uploaded PDF file to JSON
            const convertResponse = await axios.post('https://api.pdf.co/v1/pdf/convert/to/json', {
                name: "result.json",
                url: uploadedFileUrl,
                async: true
            }, {
                headers: {
                    'x-api-key': API_KEY,
                    'Content-Type': 'application/json'
                }
            });

            const jobId = convertResponse.data.jobId;
            console.log(`Job #${jobId} has been created!`);

            // Step 4: Check job status and download the result
            checkIfJobIsCompleted(jobId);

        } catch (error) {
            setError(error);
            console.error("Error uploading file:", error);
        } finally {
            setLoading(false);
        }
    };

    const checkIfJobIsCompleted = async (jobId) => {
        try {
            const statusResponse = await axios.post('https://api.pdf.co/v1/job/check', {
                jobid: jobId
            }, {
                headers: {
                    'x-api-key': API_KEY,
                    'Content-Type': 'application/json'
                }
            });

            const status = statusResponse.data.status;
            console.log(`Checking Job #${jobId}, Status: ${status}, Time: ${new Date().toLocaleString()}`);

            if (status === "working") {
                // Check again after 3 seconds
                setTimeout(() => checkIfJobIsCompleted(jobId), 3000);
            } else if (status === "success") {
                // Step 5: Download the JSON file
                const resultUrl = statusResponse.data.url;
                const resultResponse = await axios.get(resultUrl);
                setParsedData(resultResponse.data);
                console.log(`Generated JSON file saved as "result.json" file.`);
            } else {
                console.log(`Operation ended with status: "${status}".`);
            }
        } catch (error) {
            setError(error);
            console.error("Error checking job status:", error);
        }
        console.log(parsedData)
    };

    return (
        <>
            <div className="max-w-xl">
                <label
                    className="flex justify-center w-full h-32 px-4 transition bg-zinc-900 border-2 border-gray-500 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                >
                    <span className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-blue-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                        </svg>
                        <span className="font-medium text-blue-600">
                            Drop files to Attach, or
                            <span className="text-blue-600"> browse from the device</span>
                        </span>
                    </span>
                    <input type="file" name="file_upload" className="hidden" onChange={handleFileChange} />
                </label>
                <button onClick={handleFileUpload} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                    {loading ? 'Uploading...' : 'Upload File'}
                </button>
            </div>
            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
                    <p>Error uploading file: {error.message}</p>
                </div>
            )}
            {parsedData && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <h3 className="text-lg font-bold">Parsed Data:</h3>
                    <pre className="text-sm">{JSON.stringify(parsedData, null, 2)}</pre>
                </div>
            )}
        </>
    );
}

export default Crd;
