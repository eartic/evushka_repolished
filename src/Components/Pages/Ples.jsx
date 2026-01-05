import React, { useEffect, useState } from "react";
import PlesText from './PlesText.json'; 
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import PlesSlideShow from '../Ples_slide_show/ples_s_s.jsx';
import { Helmet } from "react-helmet";

const Ples = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(PlesText);
  }, []);

  if (!data) {
    return <div>Ostanicev strpljivi. Uskoro smo s Vama!</div>;
  }

  return (
    <>
      <Helmet>
        <title>Tečajevi plesa za djecu i odrasle - Evushka Zagreb</title>
        <meta name="description" content="Tečajevi plesa za djecu i odrasle u Evushki. Plesna rekreacija, individualna poduka, ladies latin, team building - blizu Arena centra u Zagrebu." />
        <meta name="keywords" content="tečaj plesa Zagreb, ples za djecu, ladies latin, team building, društveni plesovi, plesna rekreacija, Evushka" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evushka.com/ples" />
        <meta property="og:title" content="Tečajevi plesa za djecu i odrasle - Evushka" />
        <meta property="og:description" content="Naučite plesati sa stručnjacima. Plesna rekreacija za djecu, tečajevi za odrasle, ladies latin, team building." />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/ples" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <h1 className="pt-16 pb-8 text-center">Tečajevi Plesa</h1>
      <PlesSlideShow />
      <div className="flex flex-col items-center p-8">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl">
          <div id="djecji" className="flex flex-col items-center space-y-8 mb-8 md:mb-0 md:mr-8">
            {data.djecji.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className='podnaslov' role="heading" aria-level="2">{item.title}</h2>
                <div className="flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white shadow-2xl shadow-lavender-500">
                <p alt='sadržaj ponude ples' className="ostatakTexta mt-6 p-8" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>

          <div id="odrasli" className="flex flex-col items-center space-y-8 md:ml-8">
            {data.odrasli.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className="podnaslov" role="heading" aria-level="2">{item.title}</h2>
                <div className="flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white shadow-2xl shadow-lavender-500">
                <p className="ostatakTexta p-8 mt-6" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ples;