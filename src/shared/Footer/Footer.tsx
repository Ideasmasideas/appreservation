import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  /*{
    id: "5",
    title: "Getting started",
    menus: [
      { href: "#", label: "Installation" },
      { href: "#", label: "Release Notes" },
      { href: "#", label: "Upgrade Guide" },
      { href: "#", label: "Browser Support" },
      { href: "#", label: "Editor Support" },
    ],
  },*/
  {
    id: "1",
    title: "Categories",
    menus: [
      { href: "#", label: "Algeria" },
      { href: "#", label: "South Africa" },
      { href: "#", label: "Central African Republic" },
      { href: "#", label: "Afghanistan" },
      { href: "#", label: "Viet Nam" },
      { href: "#", label: "Iran (Islamic Republic of)" },
      { href: "#", label: "Pakistan" },
      { href: "#", label: "Serbia" },
    ],
  },
  {
    id: "2",
    title: "Documentations",
    menus: [
      { href: "#", label: "Dog Trainer" },
      { href: "#", label: "Nursing Assistant" },
      { href: "#", label: "Marketing Coordinator" },
      { href: "#", label: "President of Sales" },
      { href: "#", label: "Web Designer" },
      { href: "#", label: "Medical Assistant" },
      { href: "#", label: "Dog Trainer" },
      { href: "#", label: "President of Sales" },
    ],
  },
  {
    id: "4",
    title: "Our Condition",
    menus: [
      { href: "#", label: "Ethical Hacker" },
      { href: "#", label: "UI/UX Designer" },
      { href: "#", label: "Software Tester" },
      { href: "#", label: "Scrum Master" },
      { href: "#", label: "Project Manager" },
      { href: "#", label: "Team Leader" },
      { href: "#", label: "Software Development" },
      { href: "#", label: "Software Developer" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          </div>
          <div className="grid grid-cols-1 col-span-1 flex items-center">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};
/*
return (
  <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
    <div className="container grid grid-cols-5 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
      <div className="grid grid-cols-1 gap-5 col-span-1 md:col-span-1 lg:md:col-span-1 lg:flex lg:flex-col">
        <div>
          <Logo />
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-1 flex items-center">
        <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
      </div>
      {widgetMenus.map(renderWidgetMenuItem)}
    </div>
  </div>
);
};
*/



export default Footer;
