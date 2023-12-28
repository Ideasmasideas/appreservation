import React, { FC, useEffect, useMemo } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { TaxonomyType } from "data/types";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import NextPrev from "shared/NextPrev/NextPrev";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import useNcId from "hooks/useNcId";
import "./sectionslidernewcategories.scss";
import suite from "images/suite.png";
import sala1 from "images/sala1.png";
import sala2 from "images/sala2.png";
import sala5 from "images/sala5.png";
import sala4 from "images/sala4.png";
import sala6 from "images/sala6.png";
import Tabs from "./Tabs";
import "./tabs.scss";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: 4 | 5;
  sliderStyle?: "style1" | "style2";
  uniqueClassName: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "SALA SUITE 👑",
    //taxonomy: "Suit karaoke 15/30 Personas",
    //count: 10,
    thumbnail: suite,
    precio: "10€ a 15€",
    desc: "Suite 15/30 Personas"
    //"https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay",
    name: "SALA 1",
    //taxonomy: "category",
    //count: 2118,
    thumbnail: sala1,
    precio: "10€ a 15€",
    desc: " Sala 1#  8/16 Personas"
    //"https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "SALA 2",
    //taxonomy: "category",
    //count: 36612,
    thumbnail: sala2,
    precio: "10€ a 15€",
    desc: "Sala 2# 6/12 Personas",
    //"https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "SALA 4",
    //taxonomy: "category",
    //count: 188288,
    thumbnail: sala4,
    precio: "10€ a 15€",
    desc: "Sala 4# 15/30 Personas",
    // "https://images.pexels.com/photos/248837/pexels-photo-248837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "SALA 5",
    //taxonomy: "category",
    //count: 188288,
    thumbnail: sala5,
    precio: "10€ a 15€",
    desc: "Sala 5# 6/12 Personas",
    //"https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "6",
    href: "/listing-stay",
    name: "SALA 6",
    //taxonomy: "category",
    //count: 188288,
    precio: "10€ a 15€",
    desc: "Sala 6# 4/8 Personas",
    thumbnail: sala6,
    // "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "NUESTRAS SALAS",
  subHeading = "Abrimos todos los dias",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1",
  uniqueClassName,
}) => {
  const UNIQUE_CLASS =
    "SectionSliderNewCategories__" + uniqueClassName + useNcId();

  let MY_GLIDEJS = useMemo(() => {
    return new Glide(`.${UNIQUE_CLASS}`, {
      perView: itemPerRow,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: itemPerRow - 1,
        },
        1024: {
          gap: 20,
          perView: itemPerRow - 1,
        },
        768: {
          gap: 20,
          perView: itemPerRow - 2,
        },
        640: {
          gap: 20,
          perView: itemPerRow - 3,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    });
  }, [UNIQUE_CLASS]);

  useEffect(() => {
    setTimeout(() => {
      if (MY_GLIDEJS) {
        MY_GLIDEJS.mount();
      }
    }, 100);
  }, [MY_GLIDEJS, UNIQUE_CLASS]);

  const renderCard = (item: TaxonomyType, index: number) => {
    switch (categoryCardType) {
      case "card3":
        return <CardCategory3 taxonomy={item} />;
      case "card4":
        return <CardCategory4 taxonomy={item} />;
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory3 taxonomy={item} />;
    }
  };

  return (
    <div className={`nc-SectionSliderNewCategories  ${className}`} >
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <div id="containersecrioslider">
          <Heading
            id="heading-container"
            desc={subHeading}
            className="text-center"
          >
            {heading}
          </Heading>

        </div>


        {sliderStyle === "style1" && (

          <div>
            <div>
              <Tabs />
            </div>
            <NextPrev className="flex justify-end mb-2" />
          </div>
        )}


        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>

        {sliderStyle === "style2" && (
          <NextPrev className="justify-center mt-16" />
        )}
      </div>
    </div>
  );
};

export default SectionSliderNewCategories;
