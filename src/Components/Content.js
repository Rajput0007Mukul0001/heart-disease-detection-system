
"use client";

import { useRouter } from 'next/navigation';  // Import useRouter
import Link from 'next/link';  // Optional for static navigation

function Content() {

  const router = useRouter();  // Initialize useRouter

  return (
    <>
      <div className="bg-zinc-800 rounded-lg shadow-lg border border-zinc-700 m-4 p-6 h-full">
        <h1 className="text-xl font-bold font-italic text-gray-400 text-center mb-4">Health & AI</h1>

        <p className="text-gray-400 text-justify">
        Good health is central to human happiness and well-being, contributing significantly to prosperity and wealth, and even economic progress, as healthy populations are more productive, save more, and live longer. When a person leads a healthy lifestyle, the body remains healthy and the mind stays active and fresh. The most important concept of leading a healthy life is to provide immunity strength against various diseases, for which timely detection and identification of diseases is a necessity. The traditional methods used to diagnose diseases are manual and error-prone. Usage of Artificial Intelligence (AI) predictive techniques enables auto diagnosis and reduces detection errors compared to exclusive human expertise. Disease diagnosis involves identifying a health issue, disease, disorder, or other condition a person may have. Disease detection driven by AI has proven effective in identifying undiagnosed patients with complex common and rare diseases. This approach addresses underdiagnosis, which poses a heavy burden on patients and healthcare professionals, and is also a challenge for pharmaceutical companies aiming to expand the patient pool for their medications, whether to power clinical trials or to efficiently target healthcare providers.
        </p>
      </div>

      <div className="bg-zinc-800 rounded-lg shadow-lg border text-gray-400 border-zinc-700 m-4 p-6 h-full">
      Heart disease prediction involves analyzing 13 key parameters, including age, cholesterol levels, blood pressure, and results from ECG tests. These factors contribute to understanding a persons risk of heart disease, enabling early intervention and preventive care. Our system uses advanced algorithms to assess these parameters, providing insights that help doctors make informed decisions about diagnosis and treatment.
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600 text-sm">
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8898839/" className="underline">
              Need more information?
            </a>
          </div>

          <button
            className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md px-4 py-2 hover:bg-gray-400 hover:text-gray-800 transition duration-200"
            onClick={() => router.push('/predict')}  // Navigate to /predict
          >
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Content;
