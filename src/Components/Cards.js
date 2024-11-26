// cards.js
'use client'

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';


let ans_card = 0 
let formdetail_card=[];

function Cards() {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [parsedData, setParsedData] = useState(null);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fileLoaded, setFileLoaded] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);
                setParsedData(json);
                const initialFormData = {};
                for (const key in json) {
                    initialFormData[key] = json[key];
                }
                setFormData(initialFormData);
                setFileLoaded(true);
            } catch (error) {
                setError("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: Object.values(formData).map(Number) }), // Map values to numbers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const detection = data.Detection;
            console.log("Detection value:", detection);
            console.log(formData)
            setLoading(false);
            ans_card=detection
            formdetail_card=formData
            // Redirect using Next.js Link component
            router.push('/result');

        } catch (error) {
            console.error('Error submitting form:', error);
            setLoading(false);
            setError('Error submitting form. Please try again.');
        }
    };

    return (
        <>
            <div className="max-w-xl">
                <label className="flex justify-center w-full h-32 px-4 transition bg-zinc-900 border-2 border-gray-500 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    <span className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                        </svg>
                        <span className="font-medium text-blue-600">
                            Drop files to Attach, or
                            <span className="text-blue-600"> browse from the device</span>
                        </span>
                    </span>
                    <input type="file" name="file_upload" className="hidden" onChange={handleFileChange} />
                </label>
                {fileLoaded && (
                    <div className="mt-4 font-extrabold text-green-600">
                        File loaded successfully!
                    </div>
                )}
            </div>
            {parsedData && (
                <form className="mt-4" onSubmit={handleSubmit}>
                    {Object.keys(parsedData).map((key, index) => (
                        <div key={index} className="mb-4">
                            <span className="block font-extrabold bg-gray-500 text-white p-2 text-sm font-medium text-gray-700">
                                {key}: {formData[key]}
                            </span>
                        </div>
                    ))}
                    <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            )}
            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
                    <p>{error}</p>
                </div>
            )}
        </>
    );
}

export {formdetail_card,ans_card}

export default Cards;
