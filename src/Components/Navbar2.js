'use client';

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';  // Import Link component for client-side navigation
import LoginForm from '../Components/LoginForm'


function Navbar2() {
  // const router = useRouter();
  const { username, logout, isAuthenticated } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      console.log("Signed out successfully");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!isAuthenticated) {
    return <LoginForm/>;
  }

  return (
    <>
      <header className="h-16 w-full flex items-center relative border-gray-900 justify-end px-5 space-x-10 bg-zinc-800">
        <div className="flex flex-shrink-0 items-center space-x-4 text-white">
          <div className="flex flex-col items-end">
            <div className="text-md font-medium">{username}</div>
            <div className="text-sm font-regular cursor-pointer" onClick={handleSignOut}>
              Sign Out
            </div>
          </div>
          {/* Use Link component to navigate to home page */}
          <Link href="/">
            {/* <a> */}
              <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-400 border-2 border-blue-400"></div>
            {/* </a> */}
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar2;
