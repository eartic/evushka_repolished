import React, { useState } from 'react';
import LogoImage from '../Banner/logo.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { motion } from 'framer-motion';
import './Naslovna.css';
import Djeca from '../../assets/logo_djeca.jpg';
import TerminiCorusel from '../Termini_slide_show/termini_s_s.jsx';
import Prostor1 from '../../assets/prostor/prostor1.jpg';
import Prostor2 from '../../assets/prostor/prostor2.jpg';
import Prostor3 from '../../assets/prostor/prostor3.jpg';
import Prostor4 from '../../assets/prostor/prostor4.jpg';
import Prostor5 from '../../assets/prostor/prostor5.jpg';
import Prostor6 from '../../assets/prostor/prostor6.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Footer from '../Footer/Footer.jsx';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal'; 
import { Helmet } from 'react-helmet';

const EmailLink = () => {
  const handleClick = () => {
    window.location.href = 'mailto:info@evushka.com';
  };

  return (
    <p className='ostatakTexta' onClick={handleClick} style={{ cursor: 'pointer', color: 'darkmagenta', textDecoration: 'none' }}>
      info@evushka.com
    </p>
  );
};

const PhoneLink = () => {
  const handleClick = () => {
    window.location.href = 'tel:+385995913887';
  };

  return (
    <p className='ostatakTexta' onClick={handleClick} style={{ cursor: 'pointer', color: 'darkmagenta', textDecoration: 'none'}}>
      099 591 3887
    </p>
  );
};

const Naslovna = () => {
  const [selectedImage, setSelectedImage] = useState(null); 
  return (
    <>
      <Helmet>
        <title>Evushka - Plesna igraonica i rođendaonica Zagreb</title>
        <meta name="description" content="Evushka u Zagrebu: plesna rekreacija za djecu, tečajevi za odrasle, team building, dječji rođendani, najam prostora - blizu Arena centra." />
        <meta name="keywords" content="plesna igraonica Zagreb, rođendaonica Zagreb, ples za djecu, Evushka, Arena centar, team building" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evushka.com/" />
        <meta property="og:title" content="Evushka - Plesna igraonica i rođendaonica" />
        <meta property="og:description" content="Plesna rekreacija, tečajevi, rođendani i dodatne usluge - sve što trebate za zabavu i edukaciju u Evushki." />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <LogoImage />
      <Navbar />
      <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 xs:h-5/6 bg-lavender-100'>
          <img src={Djeca} alt="Evushka logo - plesna igraonica za djecu u Zagrebu" className='w-full h-auto' />
          <div className='flex items-center justify-items-center box-border mt-6 sm:mt-8 px-3'>
            <p className='uvodniParagraph text-center leading-snug'>Plešite s nama i proslavite rođendan svog djeteta kod nas!</p>
          </div>
        </div>
      </div>

      {/* Navigacija krugovi */}
      <div className="mt-2 mb-6">
        <div className="flex justify-center items-center mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-9">
            {['Plesna rekreacija za djecu', 'Tečaj društvenih plesova za odrasle', 'Ladies latin', 'Individualna poduka', 'Team building', 'Kutak za mladence', 'Rođendani', 'Jutarnja čuvaonica za djecu', 'Najam prostora'].map((label, index) => {
              let linkPath = '/ples';
              if (index === 0) linkPath = '/ples#djecji';
              else if (index === 1) linkPath = '/ples#odrasli';
              else if (index === 4) linkPath = '/ples#odrasli';
              else if (label === 'Najam prostora') linkPath = '/najam';
              else if (label === 'Kutak za mladence') linkPath = '/mladenci';
              else if (label === 'Rođendani') linkPath = '/rodendan';
              else if (label === 'Jutarnja čuvaonica za djecu') linkPath = '/cuvaonica';
              
              return (
              <Link to={linkPath} key={index}>
                <motion.div
                  className="flex justify-center shadow-lg shadow-magenta-500 items-center xl:w-32 xl:h-32 w-32 h-32 md:w-44 md:h-44 rounded-full bg-magenta-500"
                  variants={{ initial: { scale: 1, opacity: 1 }, hover: { scale: 1.3, opacity: 0.9, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="flex justify-center items-center xl:w-28 xl:h-28 w-28 h-28 md:w-40 md:h-40 rounded-full bg-white text-center navigacija">
                    {label}
                  </div>
                </motion.div>
              </Link>
            );
            })}
          </div>
        </div>
      </div>

      <div className='ml-1 mt-10 p-3'>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-3 w-full h-auto'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='podnaslov' role="heading" aria-level="2">Radno vrijeme:<br /></h2>
            <p className='ostatakTexta'>Ponedjeljak - Petak: <br />09:00 - 22:00 <br />Subota - Nedjelja:<br /> 10:00 - 21:00</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <h2 className='podnaslov' role="heading" aria-level="2">Kontakt: <br /> <EmailLink /></h2>
          </div>
          <div className='flex flex-col items-center text-center'>
            <h2 className='podnaslov' role="heading" aria-level="2">Kontakt telefon:<br /><PhoneLink /></h2>
          </div>
        </div>
      </div>

      <section className='mt-16 py-8 px-4 md:mx-8 md:bg-magenta-50 md:rounded-2xl md:shadow-lg md:shadow-magenta-200/50'>
        <div className='flex justify-center justify-items-center'>
          <h2 className='text-center podnaslov' role="heading" aria-level="2">Aktualni termini</h2>
        </div>
        <TerminiCorusel />
      </section>

      <section className='mt-16 py-8 px-4 md:mx-8 md:bg-magenta-50 md:rounded-2xl md:shadow-lg md:shadow-magenta-200/50'>
        <h2 className='text-center podnaslov' role="heading" aria-level="2">Pratite nas</h2>
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-2 gap-4">
            <motion.a
     href="https://www.facebook.com/people/Plesna-igraonica-i-ro%C4%91endaonica-Evushka/61562570052064/?rdid=KnEJsKf2TdYp672i&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FmLJNRGucr7kucm8z%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg shadow-lavender-500 bg-magenta-500 flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebook className="w-12 h-12 md:w-14 md:h-14 text-white" />
            </motion.a>
            <motion.a
                 href="https://www.instagram.com/evushka_igraonica_rodendaonica/profilecard/?igsh=azhzNzRtYnR6NjR2" target="_blank" rel="noopener noreferrer" aria-label="Instagram"

              className="w-20 h-20 md:w-24 md:h-24 rounded-full  shadow-lg shadow-lavender-500 bg-magenta-500 flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram className="w-12 h-12 md:w-14 md:h-14 text-white" />
            </motion.a>
          </div>
        </div>
      </section>

      <section className='mt-16 py-8 px-4 md:mx-8 md:bg-magenta-50 md:rounded-2xl md:shadow-lg md:shadow-magenta-200/50'>
        <h2 className='text-center podnaslov' role="heading" aria-level="2">Galerija</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-3 max-w-6xl mx-auto">
          {[Prostor1, Prostor2, Prostor3, Prostor4, Prostor5, Prostor6].map((src, index) => (
            <div key={index} onClick={() => setSelectedImage(src)} className="flex justify-center aspect-square bg-lavender-100">
              <img className="shadow-2xl shadow-lavender-500 w-full h-full object-cover rounded-lg cursor-pointer hover:shadow-magenta-500/50 transition-shadow" src={src} alt={`Prostor Evushke za ple\u0161e i ro\u0111endane - fotografija ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <ImageModal isOpen={selectedImage !== null} imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />

      <Footer />
    </>
  );
};

export default Naslovna;