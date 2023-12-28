import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/travelhero2.png";
import mapa from "images/MapaUbicacion.png";


export interface MapUbicationProps {
  className?: string;
}

const MapUbication: FC<MapUbicationProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-MapUbication relative ${className}`}
      data-nc-id="MapUbication"
      id="container-mapubication"
    >
      <div className="z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
        <h2 className="font-bold dark:text-white text-black text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl !leading-[115%]">
          DÓNDE ESTAMOS
        </h2>
        <h3 className="text-violet-900 font-bold">
        📍Av. Del carrilet, 237, 08907 <br />L’Hospitalet de Llobregat, Barcelona 
        </h3>


      </div>
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8">
        <img
          id="banner"
          className="inset-0 object-cover rounded-3xl "
          src={mapa}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default MapUbication;
