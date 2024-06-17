import React from 'react';

function Risk4() {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg p-6 m-4">
      <h2 className="text-2xl font-bold text-yellow-600">Unknown Risk Detected</h2>
      <p className="text-gray-300 mt-4">
        The risk level could not be determined accurately. This might be due to insufficient data or an error in the analysis. Please follow these steps to ensure your health is properly evaluated.
      </p>

      <h3 className="text-lg font-semibold text-gray-400 mt-6">Possible Causes for Unknown Risk</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Incomplete or incorrect input data.</li>
        <li className="text-gray-400">Technical issues with the analysis process.</li>
        <li className="text-gray-400">An unexpected error in the diagnostic tool.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 text-gray-400">Recommended Actions</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Re-enter your information and try again.</li>
        <li className="text-gray-400">Contact customer support or your healthcare provider for further guidance.</li>
        <li className="text-gray-400">Schedule a follow-up appointment with your doctor to discuss your results.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 text-gray-400">General Health Tips</h3>
      <ul className="list-disc list-inside text-gray-600 mt-4">
        <li className="text-gray-400">Maintain a healthy diet and exercise regularly.</li>
        <li className="text-gray-400">Get regular health check-ups to monitor your overall condition.</li>
        <li className="text-gray-400">Stay informed about the risks and symptoms of heart disease.</li>
      </ul>
    </div>
  );
}

export default Risk4;
