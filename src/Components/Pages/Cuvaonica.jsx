import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Djeca from '../../assets/logo_djeca.jpg';
import {Helmet} from 'react-helmet';
 
const Cuvaonica = () => {
  return (
    <>
    <Helmet>
      <title>Čuvaonica za djecu Zagreb - Jutarnja čuvaonica Evushka</title>
      <meta name='description' content='Jutarnja čuvaonica za djecu (2,5-7 godina) u Evushki. Sigurno i zabavno okruženje sa stručnim odgajateljicama, blizu Arena centra.'/>
      <meta name="keywords" content="čuvaonica za djecu Zagreb, jutarnja čuvaonica, čuvanje djece, dječji vrtić Evushka, blizu Arena centra" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://evushka.com/cuvaonica" />
      <meta property="og:title" content="Jutarnja čuvaonica - Evushka" />
      <meta property="og:description" content="Sigurna jutarnja čuvaonica za djecu od 2,5 do 7 godina sa stručnim odgajateljicama i bogatim aktivnostima." />
      <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
      <meta property="og:url" content="https://evushka.com/cuvaonica" />
      <meta property="og:type" content="website" />
    </Helmet>

   
      <Navbar />
      <h1 className="pt-16 pb-8 text-center">Jutarnja čuvaonica za djecu</h1>
      <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 xs:h-5/6'>
          <img src={Djeca} alt="logo sa slikom djece Evushka" className='w-full h-auto' />
        </div>
       
      </div>
      <div className="flex flex-auto justify-center">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-1 xl:grid-cols-2 p-3  mt-4">
          <div className="flex flex-col items-center">
            <h2 className='podnaslov' role="heading" aria-level="2">Kada?</h2>
            <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Pon-Sri-Pet <br /> ili <br /> svaki dan <br />9:00-12:30</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className='podnaslov' role="heading" aria-level="2">Koji uzrast?</h2>
            <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Za djecu od 2,5 do 7 godina</p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4" >
            <h2 className='podnaslov' role="heading" aria-level="2">Aktivnosti</h2>
            <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Jutarnje razgibavanje ili poligon <br /> Ples i pjevanje <br /> Čitanje priče <br />
                Likovno stvaralaštvo <br /> Kreativna igra <br /> Voćna užina <br /> Mogućnost izlaska u zajednički park naše zgrade
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h2 className='podnaslov' role="heading" aria-level="2">Tko je s nama?</h2>
            <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-80 h-80 rounded-full border-8 border-magenta-500 bg-white">
              <p className="p-10 ostatakTexta text-sm md:text-base">Stručno vodstvo - <br /> tete odgajateljice</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center">
          <h2 className="podnaslov">Cjenik</h2>
        </div>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
          <p> 
            Pon - Pet = 180€ <br />
            Pon • Sri • Pet = 110€
          </p>
        </div>
      </section>
    
      <Footer />
    </>
  );
};

export default Cuvaonica;
