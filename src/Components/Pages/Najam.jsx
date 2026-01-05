import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LogoImage from '../Banner/logo.jsx';
import Prostor4 from '../../assets/prostor/prostor4.jpg'; 
import Prostor6 from '../../assets/prostor/prostor6.jpg'; 
import Prostor10 from '../../assets/prostor/prostor10.jpg'; 
import { Helmet } from 'react-helmet';
const Najam = () => {
  return (
    <>

<Helmet>
      <title>Najam prostora za proslave - Evushka Zagreb</title>
      <meta name='description' content='Iznajmite prostor u Evushki za rođendane, zabave i događaje blizu Arena centra. Preko 120 m2 multifunkcionalnog prostora sa terasom.'/>
      <meta name="keywords" content="najam prostora Zagreb, najam prostora za rođendan, iznajmljivanje prostora Lanište, prostor za proslave Zagreb, Evushka" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://evushka.com/najam" />
      <meta property="og:title" content="Najam prostora - Evushka" />
      <meta property="og:description" content="Iznajmite prostor u Evushki za sve vrste proslava. Moderan prostor sa animacijom, terasom i parkiranjem." />
      <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
      <meta property="og:url" content="https://evushka.com/najam" />
      <meta property="og:type" content="website" />
    </Helmet>
      <Navbar />
      <LogoImage />

      <section>
        <div className='flex justify-center mx-2 p-5 md:mx-8 md:p-11 xl:mx-16 xl:p-10'>
          <div className='text-center'>
            <h1 className='pt-16 pb-8 text-center'>Najam Prostora u Laništu</h1>
            <p className='ostatakTexta'>
              Igraonica i rođendaonica Evushka nalazi se u novom dijelu naselja Remetinec, južno od Arena centra na adresi Jaruščica 9b. 
              Prostor je otvoren krajem 2024. godine, suvremeno je opremljen i multifunkcionalno organiziran. Iznajmljujemo prostor Lanište,
              na više od 120 m2 zatvorenog prostora s vanjskom terasom, prostor se sastoji od tri dijela koji čine odlično organiziranu cjelinu.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 p-3">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4">
              <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white">
                <p className="p-10 ostatakTexta text-sm md:text-base">
                  Ulazni dio je predviđen za boravak i zabavu roditelja dok se njihova djeca igraju. Upravo taj dio naše igraonice za djecu pokazao se kao idealno rješenje kod proslava rođendana male djece. Roditelji su konstantno prisutni, te imaju nadzor nad djecom, ali i mogu u ugodnom prostoru popit kavu ili čaj, popričati sa prijateljima ili pročitati knjigu.
                </p>
              </div>
              <div>
                <img src={Prostor4} alt="ulazna prostorija plesne igraonice" className='w-96 h-auto shadow-2xl shadow-lavender-500' />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4 mt-6">
              <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white">
                <p className="p-10 ostatakTexta text-sm md:text-base">
                  Druga prostorija je prostor za igranje i mini disco vrhunski opremljena sa svim animacijskim rekvizitima i pomagalima za aktivan rođendan. Sve programe igraonice i rođendaonice vode mladi, kreativni i iskusni animatori.
                </p>
              </div>
              <div>
                <img src={Prostor6} alt="druga prostorija sa mini discom i vrhunskom opremom i rekvizitima" className='w-96 h-auto shadow-2xl shadow-lavender-500' />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4 mt-6">
              <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white">
                <p className="p-10 ostatakTexta text-sm md:text-base">
                  Treća cjelina je projektirana kao dječja soba sa raznovrsnim igračkama.
                </p>
              </div>
              <div>
                <img src={Prostor10} alt="dječja soba" className='w-96 h-auto shadow-2xl shadow-lavender-500' />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <hr className="border-t-4 border-solid shadow-md shadow-lavender-500 border-magenta-500 my-6" />

      <div className='text-center'>
  <h2 className='podnaslov'>Prostor bi po svojoj opremljenosti, veličini i smještaju idealno služio za:</h2>
  <div className="flex flex-col p-7">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">      
      <div className="flex flex-col items-center">
        <div className="shadow-xl shadow-lavender-500 flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white">
          <p className="p-10 ostatakTexta text-sm md:text-base">
            Škole stranih jezika<br /> Glazbenu školu <br /> Edukacije <br /> Prezentacije <br /> Projekcije <br /> Razne tečajeve <br />
            Cijena najma prostora za partnere se definira s obzirom na realne potrebe, te na broj i kontinuitet korištenja, a osnovna cijena se računa po 18€/h za kratkoročne najmove.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white">
          <p className="p-10 ostatakTexta text-sm md:text-base">
            Dnevni najam prostora <br />
            Mjesečni najam prostora <br />
            Godišnji najam prostora <br />
            Najam prostora po dogovoru
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="shadow-2xl shadow-lavender-500 flex items-center justify-center text-center w-96 h-96 rounded-full border-8 border-magenta-500 bg-white">
          <p className="p-10 ostatakTexta text-sm md:text-base">
            Osnovna cijena najma prostora <br />
            • 18€/h
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
};

export default Najam;
