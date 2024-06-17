"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Navbar2 from '../../Components/Navbar2';
import { formdetail, ans } from '../../Components/Form';

function UserDetailProfile() {
  const { userdetail, loading: authLoading, logout } = useAuth();
  const [userdetailData, setUserDetailData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    avatarUrl: '',
    name: '',
    country: '',
    state: '',
    phoneNumber: '',
    predictionResult: formdetail || {},
    detection: ans || '',
  });

  useEffect(() => {
    const fetchUserDetailData = async () => {
      if (userdetail) {
        try {
          const userDetailRef = doc(db, 'userdetails', userdetail.uid);
          const userDetailDoc = await getDoc(userDetailRef);
          if (userDetailDoc.exists()) {
            const data = userDetailDoc.data();
            setUserDetailData(data);
            setFormData((prevData) => ({
              ...prevData,
              ...data,
              predictionResult: formdetail || data.predictionResult || {},
              detection: ans || data.detection || 'No detection result',
            }));
          } else {
            console.log('User detail data not found');
          }
        } catch (error) {
          console.error('Error fetching user detail data:', error);
        }
      }
    };

    fetchUserDetailData();
  }, [userdetail]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatarUrl' && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          avatarUrl: fileReader.result,
        }));
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userdetail) {
      try {
        const userDetailRef = doc(db, 'userdetails', userdetail.uid);
        await setDoc(userDetailRef, formData, { merge: true });
        setUserDetailData(formData);
        setEditMode(false);
      } catch (error) {
        console.error('Error updating user detail data:', error);
      }
    }
  };

  if (authLoading || !userdetail) {
    return <div>Loading...</div>; // Handle loading state until authentication data is fully loaded
  }

  return (
    <>
      <Navbar2 />
      <div className="bg-gray-700 justify-center rounded-lg shadow-lg p-6 m-10">
        <div className="flex flex-col items-center">
          <img src={userdetailData?.avatarUrl || 'default-avatar-url'} alt="Avatar" className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-2xl font-bold text-zinc-300">Name: {userdetailData?.name || userdetail.providerData[0].displayName || '.........'}</h2>
          <p className="text-gray-900 mt-2">Country: {userdetailData?.country || 'Country'}</p>
          <p className="text-gray-900 mt-2">State: {userdetailData?.state || 'State'}</p>
          <p className="text-gray-900 mt-2">Phone: {userdetailData?.phoneNumber || 'Phone Number'}</p>
          <p className="text-gray-900 mt-2">Email: {userdetailData?.email || userdetail.providerData[0].email || 'Email'}</p>
          {/* <p className="text-gray-900 mt-2">Prediction Result: {JSON.stringify(formData.predictionResult) || 'No prediction result'}</p> */}
          <p className="text-gray-900 mt-2">Last Detection: {formData.detection || 'No detection result'}</p>
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            onClick={logout}
          >
            Logout
          </button>
        </div>

        {editMode && (
          <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="avatarUrl" className="block text-gray-300">Avatar</label>
              <input
                type="file"
                name="avatarUrl"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-300">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full p-2 rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-300">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full p-2 rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-300">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-2 rounded text-black"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="mt-4 ml-4 px-4 py-2 bg-red-600 text-white rounded"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default UserDetailProfile;
