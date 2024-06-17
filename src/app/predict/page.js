'use client';  // Ensure this page is a client component

import { useRouter } from 'next/navigation';

import Cards from "../../Components/Cards";
import Footer from "../../Components/Footer";
import Form from "../../Components/Form";
import Navbar2 from '../../Components/Navbar2';



export default function Predict() {

    const router = useRouter();  // Initialize useRouter

    // Handle navigation to the result page
    const handleNavigation = () => {
        router.push('/result');  // Redirect to result page
    };


    return (
        <>



           <Navbar2/>


            <div className="p-6 bg-zinc-700 m-4 rounded-lg shadow-lg text-gray-400">
                <h2 className="text-xl font-bold mb-4">Predict Heart Disease</h2>
                <p>
                    This page predicts the risk of heart disease based on several key parameters. Further development can include user input, results, or additional features.
                </p>
            </div>

            <div className="flex items-center justify-center h-full m-2 p-4 bg-zinc-800">

                <div className="p-4 flex flex-col bg-gray-600 rounded max-w-lg">  {/* Change to flex-column */}
                    {/* Main Form Component */}
                    <Form />

                    {/* Button at the Bottom */}
                    <div className="flex justify-end mt-auto">  {/* mt-auto to push to bottom */}
                        <button
                            className="px-6 py-2 leading-5 text-gray-400 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                            // Uncomment if using router
                            // onClick={() => router.push('/predict')}
                            onClick={handleNavigation}
                        >
                            Predict
                        </button>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-center h-full m-5 p-4 bg-zinc-800">

                <div className="p-5 flex-grow-0 bg-gray-600 rounded">
                    <Cards />
                    <div className="flex justify-end mt-6">
                        <button
                            className="px-6 py-2 leading-5 text-gray-400 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-gray-600"
                            onClick={handleNavigation}
                        >
                            Predict
                        </button>
                    </div>
                </div>

            </div>

            <Footer />

        </>

    );
}
