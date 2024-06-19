'use client';  // Ensure client-side features

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

let ans = 0 
let formdetail=[];

function Form() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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

            ans  = detection;
            formdetail=formData

            router.push('/result');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className="w-full m-1 p-3 bg-zinc-800 rounded-md shadow-md dark:bg-zinc-800 mt-10">
            <h1 className="text-xl font-bold text-gray-400 capitalize text-center dark:text-gray-400">Account settings</h1>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-400" htmlFor="age">Age</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="sex">Sex</label>
                        <input
                            id="sex"
                            name="sex"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.sex}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="cp">Chest Pain</label>
                        <input
                            id="cp"
                            name="cp"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.cp}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="trestbps">Restbps</label>
                        <input
                            id="trestbps"
                            name="trestbps"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.trestbps}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="chol">Chol</label>
                        <input
                            id="chol"
                            name="chol"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.chol}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="fbs">Fbs</label>
                        <input
                            id="fbs"
                            name="fbs"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.fbs}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="restecg">Restecg</label>
                        <input
                            id="restecg"
                            name="restecg"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.restecg}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="thalach">Thalach</label>
                        <input
                            id="thalach"
                            name="thalach"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.thalach}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="exang">Exang</label>
                        <input
                            id="exang"
                            name="exang"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.exang}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="oldpeak">Oldpeak</label>
                        <input
                            id="oldpeak"
                            name="oldpeak"
                            type="number"
                            step="0.1"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.oldpeak}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="slope">Slope</label>
                        <input
                            id="slope"
                            name="slope"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.slope}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="ca">Collored Fluoroscopy</label>
                        <input
                            id="ca"
                            name="ca"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.ca}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-400" htmlFor="thal">Thalassemia</label>
                        <input
                            id="thal"
                            name="thal"
                            type="number"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-gray-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            value={formData.thal}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4">Submit</button>
            </form>
        </section>
    );
}

console.log(ans);
// ans=3

export {ans}
export {formdetail}



export default Form;
