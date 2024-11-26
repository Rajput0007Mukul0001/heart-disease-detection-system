import React, { useState } from 'react';

function DoctorSupportCard({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setError('');

          // Fetch nearby hospitals using OpenStreetMap API
          fetchNearbyHospitals(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          if (error.code === error.PERMISSION_DENIED) {
            setError('User denied Geolocation. Please enter manually.');
          } else {
            setError('Error getting location. Please try again later.');
          }
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const fetchNearbyHospitals = (latitude, longitude) => {
    fetch(`https://nominatim.openstreetmap.org/search?q=hospitals&format=jsonv2&polygon=50&addressdetails=1&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        setNearbyHospitals(data);
      })
      .catch(error => {
        console.error('Error fetching nearby hospitals:', error);
        setError('Error fetching nearby hospitals. Please try again later.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !country || !location) {
      setError('Please fill out all fields.');
      return;
    }
    const formData = { name, email, phone, country, location };
    onSubmit(formData); // Pass form data to the parent component
    // Additional logic to handle form submission (e.g., send to server, save to state, etc.)
  };

  return (
    <div className="bg-gray-700 rounded-lg shadow-lg p-6 m-10">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency & Doctor Support</h2>
      <p className="text-gray-300">
        For patients with a high risk of heart disease, it is crucial to have quick access to emergency services and direct doctor support. Here are some essential services available to you.
      </p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-400">Emergency Services</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li className="text-gray-400"><span className='text-red-400'>24/7</span> emergency response for critical situations.</li>
          <li className="text-gray-400">Quick access to ambulances and emergency care.</li>
          <li className="text-gray-400">Direct communication with healthcare professionals.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-400">Doctor Support Services</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li className="text-gray-400">Video consultations with specialists. </li>
          <li className="text-gray-400">Remote monitoring and follow-up support. </li>
          <li className="text-gray-400">Prescription delivery to your location.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-400">How to Access These Services</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li className="text-gray-400">Use the emergency contact number <span className='text-red-400'>911-102-108</span> for immediate assistance.</li>
          <li className="text-gray-400">Schedule video calls with your healthcare provider.</li>
          <li className="text-gray-400">Use the healthcare app or website to arrange medicine delivery.</li>
        </ul>
      </div>

      {/* Emergency Contact Form */}
      <div className="mt-8 mx-auto bg-gray-800 p-6 rounded-lg max-w-lg">
        <h3 className="text-lg font-semibold text-gray-400">Request Emergency Services</h3>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-700 text-gray-300"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-700 text-gray-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-700 text-gray-300"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="country">Country</label>
            <select
              id="country"
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-700 text-gray-300"
              value={country}
              onChange={handleCountryChange}
              required
            >
              <option value="">Select Country</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="location">Location</label>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                id="location"
                className="flex-1 px-4 py-2 border border-gray-500 rounded-l bg-gray-700 text-gray-300"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <button
                type="button"
                className="px-6 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-500 focus:outline-none"
                onClick={handleLocationDetect}
              >
                Detect
              </button>
            </div>
            {error && <p className="text-red-500 mt-1">{error}</p>}
            {location && !error && (
              <p className="text-gray-300 mt-2">Detected Location: {location}</p>
            )}
          </div>

          {/* Display Nearby Hospitals */}
          {nearbyHospitals.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-400">Nearby Hospitals</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {nearbyHospitals.map((hospital, index) => (
                  <li key={index} className="text-gray-400">{hospital.display_name}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-pink-500 rounded hover:bg-pink-700 transition duration-200 focus:outline-none"
          >
            Request Emergency Service
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoctorSupportCard;
