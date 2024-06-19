import React from 'react';

import Navbar2 from '../../Components/Navbar2';

import Footer from '../../Components/Footer'

const doctors = [
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    experience: 15,
    availability: 'Mon-Fri 9am-5pm',
    fee: 100,
    email: 'johndoe@example.com',
    phone: '+1-234-567-8901',
    meetingLink: 'https://example.com/meeting-link-1',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Jane Smith',
    specialty: 'Cardiothoracic Surgeon',
    experience: 12,
    availability: 'Tue-Thu 10am-4pm',
    fee: 150,
    email: 'janesmith@example.com',
    phone: '+1-234-567-8902',
    meetingLink: 'https://example.com/meeting-link-2',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Emily Johnson',
    specialty: 'Pediatric Cardiologist',
    experience: 8,
    availability: 'Mon-Wed 8am-3pm',
    fee: 120,
    email: 'emilyjohnson@example.com',
    phone: '+1-234-567-8903',
    meetingLink: 'https://example.com/meeting-link-3',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Michael Brown',
    specialty: 'Interventional Cardiologist',
    experience: 10,
    availability: 'Wed-Fri 1pm-6pm',
    fee: 130,
    email: 'michaelbrown@example.com',
    phone: '+1-234-567-8904',
    meetingLink: 'https://example.com/meeting-link-4',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Sarah Davis',
    specialty: 'Electrophysiologist',
    experience: 9,
    availability: 'Mon-Fri 11am-7pm',
    fee: 140,
    email: 'sarahdavis@example.com',
    phone: '+1-234-567-8905',
    meetingLink: 'https://example.com/meeting-link-5',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. David Wilson',
    specialty: 'Heart Failure Specialist',
    experience: 11,
    availability: 'Tue-Thu 2pm-8pm',
    fee: 110,
    email: 'davidwilson@example.com',
    phone: '+1-234-567-8906',
    meetingLink: 'https://example.com/meeting-link-6',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Lisa Martinez',
    specialty: 'Cardiac Surgeon',
    experience: 14,
    availability: 'Mon-Thu 9am-4pm',
    fee: 160,
    email: 'lisamartinez@example.com',
    phone: '+1-234-567-8907',
    meetingLink: 'https://example.com/meeting-link-7',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. James Anderson',
    specialty: 'Vascular Surgeon',
    experience: 13,
    availability: 'Mon-Wed 7am-1pm',
    fee: 145,
    email: 'jamesanderson@example.com',
    phone: '+1-234-567-8908',
    meetingLink: 'https://example.com/meeting-link-8',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Karen Thomas',
    specialty: 'Adult Cardiologist',
    experience: 10,
    availability: 'Mon-Fri 10am-6pm',
    fee: 130,
    email: 'karenthomas@example.com',
    phone: '+1-234-567-8909',
    meetingLink: 'https://example.com/meeting-link-9',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Charles Lee',
    specialty: 'Congenital Heart Surgeon',
    experience: 17,
    availability: 'Wed-Fri 12pm-8pm',
    fee: 170,
    email: 'charleslee@example.com',
    phone: '+1-234-567-8910',
    meetingLink: 'https://example.com/meeting-link-10',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Patricia Hernandez',
    specialty: 'Heart Transplant Specialist',
    experience: 18,
    availability: 'Mon-Fri 8am-2pm',
    fee: 180,
    email: 'patriciahernandez@example.com',
    phone: '+1-234-567-8911',
    meetingLink: 'https://example.com/meeting-link-11',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Christopher Lopez',
    specialty: 'Preventive Cardiologist',
    experience: 7,
    availability: 'Tue-Thu 9am-3pm',
    fee: 115,
    email: 'christopherlopez@example.com',
    phone: '+1-234-567-8912',
    meetingLink: 'https://example.com/meeting-link-12',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Barbara Harris',
    specialty: 'Cardio-Oncologist',
    experience: 11,
    availability: 'Mon-Wed 11am-5pm',
    fee: 150,
    email: 'barbaraharris@example.com',
    phone: '+1-234-567-8913',
    meetingLink: 'https://example.com/meeting-link-13',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Steven Clark',
    specialty: 'Sports Cardiologist',
    experience: 6,
    availability: 'Thu-Fri 10am-4pm',
    fee: 125,
    email: 'stevenclark@example.com',
    phone: '+1-234-567-8914',
    meetingLink: 'https://example.com/meeting-link-14',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Jessica Robinson',
    specialty: 'Cardiac Electrophysiologist',
    experience: 16,
    availability: 'Mon-Tue 8am-12pm',
    fee: 160,
    email: 'jessicarobinson@example.com',
    phone: '+1-234-567-8915',
    meetingLink: 'https://example.com/meeting-link-15',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Daniel Walker',
    specialty: 'Heart Rhythm Specialist',
    experience: 9,
    availability: 'Wed-Fri 1pm-7pm',
    fee: 135,
    email: 'danielwalker@example.com',
    phone: '+1-234-567-8916',
    meetingLink: 'https://example.com/meeting-link-16',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Nancy Lewis',
    specialty: 'Cardiac Rehabilitation Specialist',
    experience: 12,
    availability: 'Mon-Thu 10am-4pm',
    fee: 145,
    email: 'nancylewis@example.com',
    phone: '+1-234-567-8917',
    meetingLink: 'https://example.com/meeting-link-17',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Brian King',
    specialty: 'Pediatric Heart Surgeon',
    experience: 20,
    availability: 'Tue-Fri 9am-5pm',
    fee: 175,
    email: 'brianking@example.com',
    phone: '+1-234-567-8918',
    meetingLink: 'https://example.com/meeting-link-18',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Susan Wright',
    specialty: 'Cardio-Oncology Surgeon',
    experience: 14,
    availability: 'Mon-Wed 8am-1pm',
    fee: 155,
    email: 'susanwright@example.com',
    phone: '+1-234-567-8919',
    meetingLink: 'https://example.com/meeting-link-19',
  },
  {
    avatar: 'https://media.istockphoto.com/id/1437092256/photo/gold-caduceus.jpg?s=612x612&w=is&k=20&c=Bq7IRQqYpL1lytvuCA3crWB4eY4OaEkIlVLPNyiiyqw=',
    name: 'Dr. Edward Martinez',
    specialty: 'Interventional Heart Surgeon',
    experience: 18,
    availability: 'Thu-Fri 11am-6pm',
    fee: 180,
    email: 'edwardmartinez@example.com',
    phone: '+1-234-567-8920',
    meetingLink: 'https://example.com/meeting-link-20',
  },
];

function Page() {
  return (
    <>
    <Navbar2/>
    <div className="container mx-auto p-6 cursor-pointer">
      {/* <h2 className="text-3xl rounded-md border-solid font-bold  text-red-300 mb-6 bg-zinc-600 p-6 ">Our Doctors For consultance</h2> */}
      <img className="text-3xl w-4/5  font-bold text-black-400 mb-6 rounded-lg mx-auto bg-zinc-600 p-6 " src='https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMGxvZ298ZW58MHx8MHx8fDA%3D' alt='doctor consultant'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-3 text-gray-300">
            <img src={doctor.avatar} alt={doctor.name} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-bold text-red-600 mt-4">{doctor.name}</h3>
            <p className="text-green-400 break-words">{doctor.specialty}</p>
            <p className="text-gray-400">Experience: {doctor.experience} years</p>
            <p className="text-red-400 break-words">Available: {doctor.availability}</p>
            <p className="text-gray-400">Fee: ${doctor.fee}</p>
            <p className="text-gray-400 break-words">Email:{doctor.email}</p>
            <br/>
            <p className="text-blue-500 break-words" >Call me : {doctor.phone}</p>
            <br/>
            <span className='flex  gap-4 text-blue-500 break-words'> <img className="text-blue-500 h-8 w-10 " src='https://media.istockphoto.com/id/1527295767/photo/whatsapp-inspired-logo-contain-telephone-and-white-bubble.webp?b=1&s=170667a&w=0&k=20&c=GV8w2lfOL86qi5qLHV4eB7MCqXnW3KI8SDxJUxSMP7I=' alt='whatsapp'/>: {doctor.phone}</span>
            <br/>
            <hr className='underline bg-blue-500 text-cyan-500'/>
            {/* <input className="text-gray-400"  type='phone' /> */}
            <a href={doctor.meetingLink} className="text-blue-600 hover:text-blue-600">Schedule a Meeting</a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Page;
