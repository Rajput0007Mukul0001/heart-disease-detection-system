import React from 'react'

function Risk0() {
    return (
        <>
            <div className="bg-gray-700  justify-center rounded-lg shadow-lg p-6 m-10">
                <h2 className="text-2xl font-bold text-green-600">No Risk Detected!</h2>
                <p className="text-gray-300  mt-4 ">
                    Congratulations! You have no significant risk factors for heart disease. This means you are leading a healthy lifestyle. Keep it up!
                </p>

                <h3 className=" text-gray-400 text-lg font-semibold mt-6">Health Benefits</h3>
                <ul className="list-disc list-inside text-gray-600 mt-4">
                    <li className='text-gray-400' >Regular physical activity helps maintain cardiovascular health.</li>
                    <li className='text-gray-400' >A balanced diet reduces the risk of chronic diseases.</li>
                    <li className='text-gray-400'>Good sleep improves energy levels and reduces stress.</li>
                </ul>

                <h3 className="text-gray-400 text-lg font-semibold mt-6">Tips for Staying Fit and Active</h3>
                <ul className="list-disc list-inside text-gray-600 mt-4">
                    <li className='text-gray-400'>Exercise at least 30 minutes a day, five times a week.</li>
                    <li className='text-gray-400'>Eat a variety of fruits and vegetables daily.</li>
                    <li className='text-gray-400'>Stay hydrated and avoid sugary drinks.</li>
                    <li className='text-gray-400'>Find a physical activity you enjoy, like walking, cycling, or dancing.</li>
                </ul>

                <h3 className=" text-gray-400 text-lg font-semibold mt-6">Additional Important Features</h3>
                <ul className="list-disc list-inside text-gray-600 mt-4">
                    <li className='text-gray-400'>Regular health check-ups to monitor your overall wellness.</li>
                    <li className='text-gray-400'>Social connections to reduce stress and improve mental health.</li>
                    <li className='text-gray-400'>Regular mental exercises to keep your mind sharp.</li>
                </ul>
            </div>

        </>
    )
}

export default Risk0;