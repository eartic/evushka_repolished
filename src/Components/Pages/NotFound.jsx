import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Stranica nije pronađena - Evushka</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-lavender-100 to-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-magenta-500 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
            Stranica nije pronađena
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Žao nam je, ali stranica koju tražite ne postoji. Možda je premještena ili obrisana.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-magenta-500 text-white font-semibold rounded-lg shadow-lg shadow-magenta-500 hover:shadow-xl hover:bg-magenta-600 transition-all"
          >
            <FaHome className="text-xl" />
            Nazad na Početnu
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
