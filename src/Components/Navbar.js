'use client'

import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './LoginForm'
import { useRouter } from 'next/router'; 
import Link from 'next/link'

function Navbar() {

  const { username, logout,isAuthenticated } = useAuth();
  // const router = useRouter();
  
  console.log(username)

  const goToProfile = () => {
    // router.push('/userProfile');
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <>
      {/* <!-- component --> */}
      <div className="h-screen w-full bg-zinc-800 relative flex overflow-hidden">

        {/* <!-- Sidebar --> */}
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-zinc-800 text-white">
          {/* <!-- Profile --> */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white" onClick={goToProfile}>
          <Link href="/userProfile">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* <!-- Courses --> */}
          <div className="h-10 w-10 flex items-center p-4 m-4 justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <Link href={"/food"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </Link>
          </div>

          {/* <!-- Theme --> */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <Link href={"/consultant"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            </Link>
          </div>

          {/* <!-- Configuration --> */}
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </aside>



        <div className="w-full h-full flex flex-col justify-between">
          {/* <!-- Header --> */}
          <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-zinc-800">
            {/* <!-- Informação --> */}
            <div className="flex flex-shrink-0 items-center space-x-4 text-white">

              {/* <!-- Texto --> */}
              <div className="flex flex-col items-end ">
                {/* <!-- Nome --> */}
                <div className="text-md font-medium ">{username}</div>
                {/* <!-- Título --> */}
                <div className="text-sm font-regular cursor-pointer"  onClick={handleSignOut}>Sign Out</div>
              </div>

              {/* <!-- Foto --> */}
              <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-400 border-2 border-blue-400"></div>
            </div>
          </header>

          {/* <div className="m-4 w-auto h-full rounded-lg p-2 bg-gray-900">slider ok</div>     */}

          {/* <!-- Main --> */}
          <main className="max-w-full h-full flex relative overflow-y-hidden">
            {/* <!-- Container --> */}
            <div className="h-full w-full flex flex-wrap p-1 items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 pb-7 overflow-y-hidden">
              {/* <!-- Container --> */}

              <img className="w-full h-auto md:h-full rounded-lg shadow-md bg-zinc-800 flex-shrink-0 flex-grow border-zinc-900 object-cover" src='..\..\heartworking.jpg' alt='heart'/>



              {/* <div class="w-full h-full rounded-lg flex flex-col md:flex-row bg-green-300">

                
                <div class="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
                  <img src="../../main_image.jpg" alt="Heart" class="w-3/4 md:w-full object-cover" />
                </div>

                
                <div class="flex-grow flex items-center justify-center text-center p-4">
                  <p>Welcome to the Heart disease detection and prevention care</p>
                </div>

              </div> 
              */}




              {/* <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-green-300"></div>
         
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
         */}
     

            </div>
          </main>



        </div>
      </div>
    </>
  )
}

export default Navbar;