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
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link'
import { ans, formdetail } from '../../Components/Form';
import {formdetail_card,ans_card} from '../../Components/Cards'




const ranges = {
  age: [10, 77],
  sex: [0, 1],
  cp: [0, 3],
  trestbps: [94, 200],
  chol: [126, 564],
  fbs: [0, 1],
  restecg: [0, 2],
  thalach: [71, 202],
  exang: [0, 1],
  oldpeak: [0.0, 6.2],
  slope: [0, 2],
  ca: [0, 3],
  thal: [0, 3]
};

const checkRanges = (formData) => {
  const outOfRangeItems = [];
  for (const key in formData) {
    const value = parseFloat(formData[key]);
    if (ranges[key] && (value < ranges[key][0] || value > ranges[key][1])) {
      outOfRangeItems.push(`${key} is out of range: ${value}`);
    }
  }
  return outOfRangeItems;
};

function AbnormalValuesCard({ outOfRangeItems }) {
  return (
    <div className="p-6 bg-red-700 m-4 rounded-lg shadow-lg text-gray-200">
      <h2 className="text-xl font-bold mb-4 text-center">Some Abnormal Values Detected</h2>
      <ul>
        {outOfRangeItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br/>
       <Link href={"/consultant"}>
      <p className='text-green-400  font-extrabold underline'>Please consult a healthcare professional.</p>
      </Link>
    </div>
  );
}

export default function Result() {
  const router = useRouter();
  const { ud } = useAuth();
  const [risk, setRisk] = useState(0);
  const [outOfRangeItems, setOutOfRangeItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (formdetail && ans !== undefined && ans !== null && ud) {
          setRisk(parseInt(ans));
          setOutOfRangeItems(checkRanges(formdetail));

          const userDetailRef = doc(db, 'userdetails', ud);
          await setDoc(userDetailRef, {
            predictionResult: formdetail,
            detection: ans
          }, { merge: true });
        } else {
          console.error('Invalid form data, prediction value, or user ID:', ans, ud);
          router.push('/'); // Redirect to homepage or error page
        }
      } catch (error) {
        console.error('Error updating user detail data:', error);
      }
    };

    fetchData();
  }, [ans, formdetail, router, ud]);

  const handleSubmitForm = (formData) => {
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
    case 2:
      content = (
        <div className="p-6 bg-yellow-600 m-4 rounded-lg shadow-lg text-gray-900">
          <h1>Low Risk Detected</h1>
          <p>Your health is generally good, but there may be minor concerns.</p>
        </div>
      );
      componentPage = <Risk1 />;
      break;
    case 3:
      content = (
        <div className="p-6 bg-orange-600 m-4 rounded-lg shadow-lg text-gray-200">
          <h1>Moderate Risk Detected</h1>
          <p>You have some risk factors. Consider consulting a healthcare professional.</p>
        </div>
      );
      componentPage = <Risk2 />;
      break;
    case 1:
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
      {outOfRangeItems.length > 0 && <AbnormalValuesCard outOfRangeItems={outOfRangeItems} />}
      {content}
      {componentPage}
      {risk === 1 ? DoctorSupport : <div></div>}
      <Footer />
    </>
  );
}
