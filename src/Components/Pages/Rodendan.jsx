import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import RodendaniText from './RodendaniText.json'; 
import ImageModal from './ImageModal';
import Rodendan1 from '../../assets/rodendan/djeca1.jpg';
import Rodendan2 from '../../assets/rodendan/djeca2.jpg';
import Rodendan3 from '../../assets/rodendan/djeca4.jpg';
import Rodendan4 from '../../assets/rodendan/djeca14.jpg';
import Rodendan5 from '../../assets/rodendan/djeca16.jpg';
import Rodendan6 from '../../assets/rodendan/djeca18.jpg';
import Rodendan7 from '../../assets/rodendan/djeca25.jpg';
import Rodendan8 from '../../assets/rodendan/djeca28.jpg';
import Rodendan9 from '../../assets/rodendan/djeca32.jpg';
import Djeca from '../../assets/logo_djeca.jpg';
import { Helmet } from "react-helmet";

const Rodendan = () => {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setData(RodendaniText);
  }, []);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!data) {
    return <div>Učitavanje...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Rođendani za djecu - Plesna igraonica Evushka Zagreb</title>
        <meta name="description" content="Proslavite dijete sa Evushkom! Dječji rođendani sa animacijom, mađioničarem, igrama - preko 120 m2 prostora blizu Arena centra." />
        <meta name="keywords" content="rođendani za djecu Zagreb, proslave članaka, animacija za djecu, Evushka, plesna igraonica, rođendaonica" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evushka.com/rodendan" />
        <meta property="og:title" content="Rođendani za djecu - Evushka" />
        <meta property="og:description" content="Nezaboravni dječji rođendani sa stručnom animacijom, igrama i zabavom za sve uzraste." />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/rodendan" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <h1 className="pt-16 pb-8 text-center">Rođendani za Djecu</h1>
      <div className='flex justify-center items-center w-full h-auto py-3'>
        <div className='w-5/6 sm:w-1/2 md:w-1/3 xs:h-5/6 aspect-auto bg-lavender-100'>
          <img src={Djeca} alt="Evushka logo sa slikom djece za rođendane" className='w-full h-auto' />
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
          <h2 className="podnaslov" role="heading" aria-level="2">Kako slavimo rođendane u Evushki?</h2>
        </div>
        <div className="mx-auto max-w-4xl p-3 flex justify-center text-center ostatakTexta">
          <p>
            Dječji rođendani u našoj igraonici i rođendaonici su nezaboravna avantura, jer Evushka nudi više od igre. Igraonica i rođendaonica Evushka Zagreb kod proslave rođendana ima osobni pristup, te sa svakim slavljenikom dogovara odgovarajući program igara, izbor pjesama i detaljan način proslave. Naša igraonica za djecu po svakom rođendanu prima maksimalno 20-tero djece, na više od 120 m2 zatvorenog prostora s vanjskom terasom. Ulazni dio je prostor predviđen za boravak i zabavu roditelja dok se njihova djeca igraju. Upravo taj dio naše igraonice za djecu se pokazao kao idealno rješenje kod proslava rođendana mlađe djece. Roditelji su konstantno prisutni, te imaju nadzor nad djecom, ali i mogu u ugodnom prostoru uživati u društvu prijatelja. Druga prostorija je prostor za igranje i mini disco vrhunski opremljena sa svim animacijskim rekvizitima i pomagalima za aktivan rođendan. Treći prostor je soba sa igračkama u kojoj mogu uživati djeca u raznovrsnim igrama.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0 mb-8 mt-14">
        {data.rodendani.slice(0, 7).map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className='podnaslov mt-8'>{item.title}</h2>
            <div className="mt-2 shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-[420px] h-[420px] md:w-[440px] md:h-[440px] rounded-full border-8 border-magenta-500 bg-white">
              <p className="mt-2 text-center ostatakTexta text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          </div>
        ))}
      </div>

      <section className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 max-w-6xl w-full">
          {[Rodendan1, Rodendan2, Rodendan3, Rodendan4, Rodendan5, Rodendan9, Rodendan6, Rodendan8, Rodendan7].map((src, index) => (
            <div key={index} onClick={() => handleImageClick(src)} className="flex justify-center aspect-square bg-lavender-100">
              <img className="shadow-xl shadow-lavender-500 w-full h-full object-cover rounded-lg cursor-pointer hover:shadow-2xl transition-shadow" src={src} alt={`Fotografija sa dječjeg rođendana u Evushki ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <ImageModal isOpen={!!selectedImage} imageSrc={selectedImage} onClose={closeModal} />
      <Footer />
    </>
  );
};

export default Rodendan;