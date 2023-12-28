import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import { TaxonomyType } from "data/types";
import { Link } from "react-router-dom";
import convertNumbThousand from "utils/convertNumbThousand";

export interface CardCategory3Props {
  className?: string;
  taxonomy: TaxonomyType;
  precio?: string;
  desc?: string;
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  taxonomy,

}) => {
  const { count, name, href = "/", thumbnail, precio, desc, } = taxonomy;
  return (
    <div className="bg-black p-0.5 dark:bg-white rounded-2xl">
      <Link
        to={href}
        className={`nc-CardCategory3 flex flex-col ${className}`}
        data-nc-id="CardCategory3"
      >
        <div
          className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-7 h-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden group`}
        >
          <NcImage
            src={thumbnail}
            className="object-cover w-full h-full "
          />
          <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
        </div>
        <div className="mt-4 truncate">
          <h2
            className={`text-base sm:text-lg text-neutral-700 dark:text-neutral-700 font-bold ml-3 truncate`}
          >
            {name}
          </h2>
          <span
            className={`block mt-2 text-sm ml-1 text-neutral-600 dark:text-neutral-600`}
          >
            <i className="las la-user"></i>{desc}
          </span>
          <span
            className={`block mt-2 text-sm flex justify-center text-neutral-600 dark:text-neutral-600`}
          >
            {/*{convertNumbThousand(count || 0)} properties*/}
            {precio} / precio
          </span>
        </div>
      </Link>
    </div>

  );
};

export default CardCategory3;
