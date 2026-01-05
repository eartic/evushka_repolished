import React from 'react';
import LogoImage from '../assets/logo.png';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <img
        src={LogoImage}
        alt="Učitavanje..."
        className="w-48 h-auto animate-pulse"
      />
      <p className="mt-4 text-magenta-500 font-semibold">Učitavanje...</p>
    </div>
  );
};

export default Loading;
