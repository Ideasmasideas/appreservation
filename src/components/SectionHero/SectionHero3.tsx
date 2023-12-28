import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/travelhero2.png";
import "./sectionhero.scss";
import banner from "images/banner1.png";
import "./sectionhero.scss";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
      id="container-hero3"
    >
      <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
        <h2 className="font-bold text-neutral-700 dark:text-white text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-9xl !leading-[115%]">
          KARAOKE BARCELONA
        </h2>
        <span className="sm:text-lg md:text-xl font-semibold dark:text-white text-neutral-700">
          Sala de Karaoke PRIVADA equipada con los mejores equipos profesionales. Disfruta de nuestras salas y déjate llevar por el mood.
        </span>
        <div className="icono-flecha">
          <i className="las la-angle-down"></i>
        </div>

      </div>
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8">
        <img
          id="banner"
          className="absolute inset-0 object-cover "
          src={banner}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default SectionHero3;
