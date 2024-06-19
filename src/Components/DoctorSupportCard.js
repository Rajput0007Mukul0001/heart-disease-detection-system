import React, { useState } from 'react';

function DoctorSupportCard({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [nearestHospitals, setNearestHospitals] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLat(latitude);
          setLon(longitude);
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setError('');
          fetchNearestHospitals(latitude, longitude);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !country || !location) {
      setError('Please fill out all fields.');
      return;
    }

    const formData = { name, email, phone, country, location };
    onSubmit(formData);
  };

  const fetchNearestHospitals = async (latitude, longitude) => {
    try {
      const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&type=amenity&lang=en&limit=10&format=json&apiKey=6f469685bcb34639a988546bbbfa40b1`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      const hospitals = data.results
        .filter(hospital =>
          hospital.name &&
          /medical|Medical|healthcare|Healthcare|health|Health|clinic|Clinic|Hospital|hospital/.test(hospital.name)
        )
        .slice(0, 5)
        .map(hospital => ({
          ...hospital,
          distance: getDistanceFromLatLonInKm(latitude, longitude, hospital.lat, hospital.lon),
        }))
        .sort((a, b) => a.distance - b.distance);
      setNearestHospitals(hospitals);
    } catch (error) {
      console.error('Error fetching nearest hospitals:', error);
      setError('Error fetching nearest hospitals. Please try again later.');
    }
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
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
              <option value="Ind">India</option>
              <option value="Jap">Japan</option>
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

          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-pink-500 rounded hover:bg-pink-700 transition duration-200 focus:outline-none"
            onClick={handleLocationDetect}
          >
            Request Emergency Service
          </button>
        </form>
      </div>

      {nearestHospitals.length > 0 && (
        <div className="mt-8 bg-gray-800 p-6 mx-auto rounded-lg max-w-lg">
          <h3 className="text-2xl font-semibold text-gray-400 ">Nearest Hospitals Around You</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            {nearestHospitals.map((hospital, index) => (
              <li key={index} className="mb-2  ">
                <p>
                  <span className="font-semibold text-gray-300">Name:</span> {hospital.name}<br />
                  <span className="font-semibold text-gray-300">Latitude:</span> {hospital.lat}<br />
                  <span className="font-semibold text-gray-300">Longitude:</span> {hospital.lon}<br />
                  <span className="font-semibold text-gray-300">Distance:</span> {hospital.distance.toFixed(2)} km<br />
                  <span className="font-semibold text-gray-300">Postcode:</span> {hospital.postcode}<br />
                  <span className="font-semibold text-gray-300">Address:</span> {hospital.address_line1}<br />
                  <span>{hospital.address_line2}</span><br/>
                  <span className="font-semibold text-gray-300">State:</span> {hospital.state}<br />
                  <span className="font-semibold text-gray-300">Country:</span> {hospital.country}<br />
                  <span className="font-semibold text-gray-300">Ambulance Service: <span className='text-red-400'> available </span>  </span><br />
                  <span className="font-semibold text-gray-300">Contact Info : <span className='text-red-400'> 98694896468 </span>  </span><br />
                </p>
                <br/>
                <hr/>
              </li>
              
            ))}
          </ul>
          your locations is given below
          <iframe
            className='w-full h-96 mt-4 rounded-lg'
            frameBorder="0"
            src={`https://maps.google.com/maps?q=${lat},${lon}&z=13&output=embed`}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default DoctorSupportCard;
