import React from 'react';
import pravilnikText from '../Pages/pravilnikText.json';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Helmet } from 'react-helmet';

const Pravilnik = () => {
  return (
    <>
    <Helmet>
      <title>Pravila ponašanja - Plesna igraonica Evushka</title>
      <meta name='description' content='Pravila ponašanja u plesnoj igraonici i rođendaonici Evushka za sve sudionike. Sigurno i zabavno okruženje za sve.'/>
      <meta name='keywords' content='pravila ponašanja, kodeks Evushka, pravila igraonice, sigurnost djece, Evushka' />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://evushka.com/pravilnik" />
      <meta property="og:title" content="Pravila ponašanja - Evushka" />
      <meta property="og:description" content="Poznajte pravila ponašanja u Evushki kako bismo zajedno osigurali sigurno i zabavno okruženje." />
      <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
      <meta property="og:url" content="https://evushka.com/pravilnik" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Navbar />
    <div className='flex justify-center items-center mx-7'>
    <div className='p-5 md:p-10'>
      <h1 className='pt-16 pb-8 text-center'>{pravilnikText.title}</h1>
      <div className='ostatakTexta'>
        {pravilnikText.content.map((paragraph, index) => (
          <p key={index}>
            {index + 1}. {paragraph}
          </p>
        ))}
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Pravilnik;
