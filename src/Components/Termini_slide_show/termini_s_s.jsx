import { Carousel } from "@material-tailwind/react";
import Termini1 from '../Termini_slide_show/Termini_Slike/termini4.jpg';
import Termini2 from '../Termini_slide_show/Termini_Slike/termini5.jpg';
import Termini3 from '../Termini_slide_show/Termini_Slike/Termini_latin.png';
import Termini4 from '../Termini_slide_show/Termini_Slike/Termini_odrasli.png';

const TerminiSlideshow = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <Carousel
        className="rounded-xl w-full max-w-4xl aspect-w-16 aspect-h-9" // Maintain 16:9 aspect ratio
        prevArrowProps={{ className: 'text-magenta-500 w-12 h-12' }}
        nextArrowProps={{ className: 'text-magenta-500 w-12 h-12' }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {new Array(length).fill("").map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Prikaži sliku termina ${i + 1}`}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-magenta-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-magenta-400 ${
                  activeIndex === i ? "bg-magenta-500" : "bg-white"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src={Termini1}
          alt="Aktualni termini plesna rekreacija za djecu (5-7 godina)"
          className="h-full w-full object-cover"
        />
        <img
          src={Termini2}
          alt="Aktualni termini  plesna rekreacija za djecu (7+ godina)"
          className="h-full w-full object-cover"
        />
        <img
          src={Termini3}
          alt="Aktualni termini Ladies latin"
          className="h-full w-full object-cover"
        />
         <img
          src={Termini4}
          alt="Aktualni termini za odrasle, tečaj društvenih plesova za odrasle"
          className="h-full w-full object-cover"
          />
      </Carousel>
    </div>
  );
};

export default TerminiSlideshow;
