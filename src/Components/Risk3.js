import React from 'react';

function Risk3() {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg p-6 m-10">
      <h2 className="text-2xl font-bold text-red-700">High Risk Detected</h2>
      <p className="text-gray-300 mt-4">
        You have a high risk of heart disease. This requires immediate attention and significant lifestyle changes to reduce your risk. Please consult your healthcare provider for a comprehensive treatment plan.
      </p>

      <h3 className="text-lg font-semibold text-gray-400 mt-6">What Contributes to High Risk?</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Consistently high cholesterol levels.</li>
        <li className="text-gray-400">Chronic high blood pressure.</li>
        <li className="text-gray-400">Very low physical activity or sedentary lifestyle.</li>
        <li className="text-gray-400">Diet high in saturated fats, sugars, and processed foods.</li>
        <li className="text-gray-400">Family history of heart disease or related conditions.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 text-gray-400">Critical Steps to Reduce Your Risk</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Follow a strict heart-healthy diet and reduce saturated fats and sugars.</li>
        <li className="text-gray-400">Engage in regular, intensive exercise, with medical guidance if needed.</li>
        <li className="text-gray-400">Seek professional help to manage stress and anxiety.</li>
        <li className="text-gray-400">Take prescribed medications for cholesterol, blood pressure, and other risk factors.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 text-gray-400">Emergency Support and Monitoring</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Have emergency contacts ready and know the location of your nearest hospital or clinic.</li>
        <li className="text-gray-400">Consider wearing a medical alert bracelet or device if advised by your healthcare provider.</li>
        <li className="text-gray-400">Establish regular communication with your healthcare team and follow their instructions closely.</li>
      </ul>
    </div>
  );
}

export default Risk3;
