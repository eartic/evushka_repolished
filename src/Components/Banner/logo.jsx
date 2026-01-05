  import React from 'react';
  import LogoImage from '../../assets/logo.png';
  
  
  const Logo = () => {
    return (
      <>
        <div className="relative flex justify-center items-center m-2 p-3">
          <p
            className="absolute top-[41%] sm:top-[40%] md:top-[39%] xl:top-[39%] -translate-y-1/2 right-10 sm:right-12 md:right-14 xl:right-20 md:left-[62%] md:-translate-x-1/2 md:right-auto text-black whitespace-nowrap text-xs sm:text-sm md:text-base font-semibold z-10"
          >
            Plesna igraonica & rođendaonica
          </p>
          
         
          <img src={LogoImage} alt="logo banner" className="max-w-xs sm:max-w-sm md:max-w-md h-auto xl:max-w-sm" />
        </div>
      </>
    );
  };
  
  export default Logo;
  

