import Heading from "components/Heading/Heading";
import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import HIW1img from "images/microphone1.png";
import HIW2img from "images/invitation1.png";
import HIW3img from "images/speaker1.png";
import VectorImg from "images/VectorHIW.svg";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    img: string;
    imgDark?: string;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    img: HIW1img,
    title: "Microfonos Inalambricos",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 2,
    img: HIW2img,
    title: "Pantalla Tactil",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 3,
    img: HIW3img,
    title: "30.000 Canciones",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <div className="font-bold flex justify-center dark:text-white text-black text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl !leading-[115%]">
        <h2>
          KARAOKE HD
        </h2>
      </div>

      <div className="mt-20 relative grid md:grid-cols-3 gap-20">

        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {item.imgDark ? (
              <>
                <NcImage
                  containerClassName="dark:hidden block mb-8 max-w-[200px] mx-auto"
                  src={item.img}
                />
                <NcImage
                  containerClassName="hidden dark:block mb-8 max-w-[200px] mx-auto"
                  src={item.imgDark}
                />
              </>
            ) : (
              <NcImage
                containerClassName="mb-8 max-w-[200px] mx-auto"
                src={item.img}
              />
            )}
            <div className="text-center mt-auto">
              <h3 className="text-4xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
