import React from 'react'

function Risk1() {
  return (
    <>
<div className="bg-gray-700 justify-center rounded-lg shadow-lg p-6 m-10 ">
  <h2 className="text-2xl font-bold text-orange-600">Mild Risk Detected</h2>
  <p className="text-gray-300 mt-4">
    You have a mild risk of heart disease. This means some factors may increase your risk. It is time to take steps to improve your heart health.
  </p>

  <h3 className="text-lg font-semibold text-gray-400 mt-6">What Can  Contributes to Mild Risk?</h3>
  <ul className="list-disc list-inside text-gray-600 mt-4">
    <li className='text-gray-400'>Slightly elevated cholesterol levels.</li>
    <li className='text-gray-400'>Occasional high blood pressure.</li>
    <li className='text-gray-400'>Low levels of physical activity.</li>
    <li className='text-gray-400'>Unhealthy eating habits.</li>
  </ul>

  <h3 className="text-lg font-semibold mt-6 text-gray-400">Steps to Reduce Your Risk</h3>
  <ul className="list-disc list-inside text-gray-600 mt-4">
    <li className='text-gray-400'>Increase your physical activity. Aim for at least 30 minutes of moderate exercise daily.</li>
    <li className='text-gray-400'>Adopt a heart-healthy diet with more fruits, vegetables, and whole grains.</li>
    <li className='text-gray-400'>Limit saturated fats and sugars in your diet.</li>
    <li className='text-gray-400'>Maintain a healthy weight and reduce stress through mindfulness or relaxation techniques.</li>
  </ul>

  <h3 className="text-lg font-semibold mt-6 text-gray-400">Regular Health Check-Ups</h3>
  <ul className="list-disc list-inside text-gray-600 mt-4">
    <li className='text-gray-400'>Schedule regular check-ups with your healthcare provider to monitor your risk factors.</li>
    <li className='text-gray-400'>Keep track of your cholesterol and blood pressure levels.</li>
    <li className='text-gray-400'>Discuss any changes in your health with your doctor to address them early.</li>
  </ul>
</div>

    </>
  )
}

export default Risk1