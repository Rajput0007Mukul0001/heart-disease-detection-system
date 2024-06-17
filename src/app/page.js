import Image from "next/image";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Content from "../Components/Content";
import AboutUs from "../Components/AboutUs";
import LoginForm from "../Components/LoginForm";
// import Navbar from "../Components/Navbar";

// here will be puttinge the components i guess so 

import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../Components/ProtectedRoute';






export default function Home() {
  return (

    <ProtectedRoute>
      <>
        <AuthProvider>
          <Navbar />
        </AuthProvider>

        <Content />
        <AboutUs />
        <Footer />
      </>
    </ProtectedRoute>

  );
}
