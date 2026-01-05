import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Naslovna from './Components/Pages/Naslovna.jsx';
import ScrollToTop from './ScrollToTop'; 
import { Helmet } from 'react-helmet';
import Loading from './Components/Loading.jsx';
const NotFound = lazy(() => import('./Components/Pages/NotFound.jsx'));

// Code split heavy routes
const Ples = lazy(() => import('./Components/Pages/Ples.jsx'));
const Mladenci = lazy(() => import('./Components/Pages/Mladenci.jsx'));
const Rodendan = lazy(() => import('./Components/Pages/Rodendan.jsx'));
const Cuvaonica = lazy(() => import('./Components/Pages/Cuvaonica.jsx'));
const Najam = lazy(() => import('./Components/Pages/Najam.jsx'));
const Pravilnik = lazy(() => import('./Components/Pages/Pravilnik.jsx'));
const Kontakt = lazy(() => import('./Components/Pages/Kontakt.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/">
      <ScrollToTop /> 
      <Helmet>
        <meta name="description" content="Plesna igraonica i rođendaonica- Evushka - Ples za djecu, tečajevi za odrasle, team building, rođendani i najam prostora, tečaj plesa za parove, proslave rođendana." />
        <meta name="keywords" content="Evushka, ples, djeca, tečaj plesova, rođendani, Zagreb, najam prostora, kontakt, čuvaonica, mladenci, najam, pravilnik" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Evushka" />
        <meta property="og:description" content="Evushka" />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Naslovna />} />
          <Route path="/ples" element={<Ples />} />
          <Route path="/mladenci" element={<Mladenci />} />
          <Route path="/rodendan" element={<Rodendan />} />
          <Route path="/cuvaonica" element={<Cuvaonica />} />
          <Route path="/najam" element={<Najam />} />
          <Route path="/pravilnik" element={<Pravilnik />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>
);
