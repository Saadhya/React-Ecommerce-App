import React from "react";
import logo from "../assets/logo.svg";
import SocialIcons from "../assets/SocialIcons";

const Footer = () => {
  return (
    <section className="relative bottom-0 overflow-hidden bg-blue-cos text-white py-8 bg-blend-hue capitalize mt-4">
      <div className="container relative z-10 mx-auto px-4 flex max-w-7xl">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
                <img src={logo} className="text-white" />
                <span className="ml-4 text-lg text-white font-bold tracking-wide ">
                  Blue Cosmetics
                </span>
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a
                  className="font-medium text-white hover:text-gray-300"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-white hover:text-gray-300"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-white hover:text-gray-300"
                  href="#"
                >
                  Return Policy
                </a>
              </li>
              <li className="p-5 grid grid-cols gap-4">
                <span className="font-medium text-white hover:text-gray-300">
                  Call us :
                </span>
                <a
                  className="font-medium text-white hover:text-gray-300"
                  href="tel:9013604338"
                >
                  +9013604338
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8 grid grid-cols gap-4">
            <span className="font-medium text-white hover:text-gray-300">
              Follow us :
            </span>
            <SocialIcons />
          </div>
        </div>
      </div>
      <hr className="mb-6 mt-6" />
      <div className="w-full flex justify-center gap-4 text-white">
        <span className="text-white">@2024 All Rights Reserved</span>
        <span className="text-xs text-white">
          Privacy Policy. Terms and Conditions applied!
        </span>
      </div>
    </section>
  );
};

export default Footer;
