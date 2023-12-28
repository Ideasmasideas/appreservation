import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero-right.png";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";
import banner from "images/Home-karaoke.png";
export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row justify-center lg:items-center w-full overflow-hidden">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0 m-5">
          <div>
            <img
              className="absolute inset-0 "
              src={banner}
              alt="hero"
            />
          </div>
          <h2 className="font-bold text-4xl md:text-5xl xl:text-7xl">
            KARAOKE BARCELONA
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Sala de Karaoke PRIVADA equipada con los mejores equipos profesionales. Disfruta de nuestras salas y déjate llevar por el mood.
          </span>
          {/*<ButtonPrimary>Start your search</ButtonPrimary>*/}
        </div>
      </div>
      {/*      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div> */}

    </div>

  );
};

export default SectionHero;



