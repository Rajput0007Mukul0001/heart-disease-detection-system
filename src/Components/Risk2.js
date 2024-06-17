import React from 'react';

function Risk2() {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg p-6 m-10">
      <h2 className="text-2xl font-bold text-red-500">Moderate Risk Detected</h2>
      <p className="text-gray-300 mt-4">
        You have a moderate risk of heart disease. This means several factors are affecting your heart health, requiring more significant changes to reduce your risk.
      </p>

      <h3 className="text-lg font-semibold text-gray-400 mt-6">What Contributes to Moderate Risk?</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Elevated cholesterol levels.</li>
        <li className="text-gray-400">Consistent high blood pressure.</li>
        <li className="text-gray-400">Low physical activity and sedentary lifestyle.</li>
        <li className="text-gray-400">Poor dietary habits, including high saturated fats and sugars.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 text-gray-400">Steps to Reduce Your Risk</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Increase your physical activity. Aim for at least 45 minutes of moderate exercise daily.</li>
        <li className="text-gray-400">Adopt a strict heart-healthy diet focusing on whole grains, fruits, and vegetables.</li>
        <li className="text-gray-400">Reduce stress through mindfulness, yoga, or meditation.</li>
        <li className="text-gray-400">Maintain a healthy weight, possibly with medical guidance.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 text-gray-400">Regular Health Monitoring</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Schedule frequent check-ups with your healthcare provider to track your risk factors.</li>
        <li className="text-gray-400">Consider additional tests like stress tests or echocardiograms if advised by your doctor.</li>
        <li className="text-gray-400">Take prescribed medications as directed to manage cholesterol and blood pressure.</li>
      </ul>
    </div>
  );
}

export default Risk2;
