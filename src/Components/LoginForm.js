'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
  const router = useRouter();
  const { login, signUp, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (isNewUser) {
        // If it's a new user, sign up first
        await signUp(email, password);
      }
      // Then, log in
      await login(email, password);
      router.push('/');
    } catch (error) {
      console.error('Error logging in with email and password:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push('/');
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white">
      {/* Left Side with Background Image */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)',
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">Keep it Special And Healthy</h1>
          <p className="text-3xl my-4"> Capture and Feel the Beat: Keeping Your Heart Health on Track</p>
        </div>
      </div>

      {/* Right Side with Form */}
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: '#161616' }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)',
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 font-extrabold text-lg">Welcome Home</h1>

          {/* Social Media Links */}
          <div className="py-6 space-x-7">

          <span className="w-10 h-10 inline-flex items-center justify-center rounded-full font-bold text-lg border-2 border-white">f</span>

            <button
              className="w-10 h-10 p-2 font-extrabold inline-flex items-center justify-center rounded-full font-bold text-lg border-2 border-white"
              onClick={handleGoogleLogin}
            >
              G+
            </button>
            <span className="w-10 h-10 inline-flex items-center justify-center rounded-full font-bold text-lg border-2 border-white">in</span>
          </div>



          {/* Form Section */}
          <p className="text-gray-100">Or</p>
          <form onSubmit={handleLogin} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-sm bg-black text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full p-4 text-lg rounded-sm bg-black text-white"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isNewUser && (
              <div className="text-gray-400">
                New user? You are signing up.
              </div>
            )}
            <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
              <a href="#" onClick={() => setIsNewUser(!isNewUser)}>
                {isNewUser ? 'Sign in instead' : 'Sign up instead'}
              </a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                {isNewUser ? 'Sign Up' : 'Sign In'}
              </button>
            </div>

            {/* Icons for Mobile */}
            <div className="p-4 text-center flex justify-center space-x-4 mt-16 lg:hidden">
              <a href="#">
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883..." />
                </svg>
              </a>
              <a href="#">
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12..." />
                </svg>
              </a>
              <a href="#">
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204..." />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
