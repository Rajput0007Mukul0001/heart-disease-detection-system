'use client';

import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Footer';
import Risk0 from '../../Components/Risk0';
import Risk1 from '../../Components/Risk1';
import Risk2 from '../../Components/Risk2';
import Risk3 from '../../Components/Risk3';
import Risk4 from '../../Components/Risk4';
import AboutUs from '../../Components/AboutUs';
import DoctorSupportCard from '../../Components/DoctorSupportCard';
import Navbar2 from '../../Components/Navbar2';
import { useRouter, useSearchParams } from 'next/navigation';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { ans, formdetail } from '../../Components/Form';

export default function Result() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [risk, setRisk] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        if (ans !== undefined && ans !== null) {
          setRisk(parseInt(ans));
          // Save to database
          const user = JSON.parse(localStorage.getItem('user'));
          if (user && user.uid) {
            const userDetailRef = doc(db, 'userdetails', user.uid);
            const userDetailDoc = await getDoc(userDetailRef);
            if (userDetailDoc.exists()) {
              await setDoc(userDetailRef, {
                ...userDetailDoc.data(),
                predictionResult: formdetail || userDetailDoc.data().predictionResult || {},
                detection: ans || userDetailDoc.data().detection || 'No detection result',
              }, { merge: true });
            }
          }
        } else {
          console.error('Invalid prediction value:', ans);
          router.push('/'); // Redirect to homepage or error page
        }
      } catch (error) {
        console.error('Error updating user detail data:', error);
      }
    };

    fetchData();
  }, [ans, formdetail, router]);

  const handleSubmitForm = (formData) => {
    // Handle form submission logic here, e.g., API calls, state updates
    console.log('Form data:', formData);
  };


  let content;
  let componentPage;
  let DoctorSupport = <AboutUs />;

  switch (risk) {
    case 0:
      content = (
        <div className="p-6 bg-green-700 m-4 rounded-lg shadow-lg text-gray-200">
          <h1>No Risk Detected</h1>
          <p>Your health is in excellent condition. Keep it up!</p>
        </div>
      );
      componentPage = <Risk0 />;
      break;
    case 1:
      content = (
        <div className="p-6 bg-yellow-600 m-4 rounded-lg shadow-lg text-gray-900">
          <h1>Low Risk Detected</h1>
          <p>Your health is generally good, but there may be minor concerns.</p>
        </div>
      );
      componentPage = <Risk1 />;
      break;
    case 2:
      content = (
        <div className="p-6 bg-orange-600 m-4 rounded-lg shadow-lg text-gray-200">
          <h1>Moderate Risk Detected</h1>
          <p>You have some risk factors. Consider consulting a healthcare professional.</p>
        </div>
      );
      componentPage = <Risk2 />;
      break;
    case 3:
      content = (
        <div className="p-6 bg-red-700 m-4 rounded-lg shadow-lg text-gray-200">
          <h1>High Risk Detected</h1>
          <p>Your health may be at risk. Seek immediate medical advice.</p>
        </div>
      );
      componentPage = <Risk3 />;
      DoctorSupport = <DoctorSupportCard onSubmit={handleSubmitForm} />;
      break;
    default:
      content = (
        <div className="p-6 bg-zinc-700 m-4 rounded-lg shadow-lg text-gray-400">
          <h1>Unknown Risk Level</h1>
          <p>We could not determine your risk level. Please try again.</p>
        </div>
      );
      componentPage = <Risk4 />;
  }

  return (
    <>
      <Navbar2 />
      <div className="p-6 bg-zinc-700 m-4 rounded-lg shadow-lg text-gray-400">
        <h2 className="text-xl font-bold mb-4 text-center">Health and Risk Involved</h2>
        <p>
          The result and risk factors are determined here. Prescriptions, suggestions, and care will follow based on the level of risk involved.
        </p>
      </div>
      {content}
      {componentPage}
      {risk === 3 ? DoctorSupport : <div></div>}
      <Footer />
    </>
  );
}
