import React, { FC, } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "components/HeroSearchForm2Mobile/HeroSearchForm2MobileFactory";
import { size } from "lodash";
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>

      <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
        <div className=" md:flex justify-center flex-1 items-center space-x-4  sm:space-x-10 ">

          <Navigation />
          <Logo />

        </div>
        {/*        <div className="lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div> */}

        <div>
          <MenuBar />
        </div>


        <div className="hidden md:flex flex-shrink-0 items-center  justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex items-center space-x-0.5 ">
            <SwitchDarkMode />
            {/*<SearchDropdown />*/}
            <div className="px-1" />
            <ButtonPrimary href="/login">Login</ButtonPrimary>
          </div>
          <div className="flex xl:hidden items-center">
            <div className="px-0.5" />

            <SwitchDarkMode />



          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
