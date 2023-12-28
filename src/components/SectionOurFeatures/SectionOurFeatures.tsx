import React, { FC } from "react";
import rightImgPng from "images/LogoNeonKaraoke.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BARCELONA
        </span>
        <h2 className="font-bold text-7xl text-violet-800	 mt-5">HAPPY KARAOKE</h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            
            <span className="block text-3xl text-violet-800 font-semibold">
            FIND YOUR OWN STAR
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên
            </span>
          </li>
          <li className="space-y-4">
            
            <span className="block text-3xl text-violet-800  font-semibold">
            FIND YOUR OWN STAR
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên
            </span>
          </li>
          <li className="space-y-4">
            
            <span className="block text-3xl text-violet-800 font-semibold">
            FIND YOUR OWN STAR
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
