import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Ako ima hash, čekaj da se element učita i scrolluj na njega
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Inače scrolluj na vrh
      window.scrollTo(0, 0); 
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
