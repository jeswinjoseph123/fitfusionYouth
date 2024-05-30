import React, { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../Button/PrimaryBtn";
import logo from "../../assets/images/logo-02.png";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Mental Health",
      link: "/mental-health",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Diet Plan",
      link: "/diet-plan",
    },
    {
      name: "Exercise",
      link: "/exercises",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
              {/* <Link className="text-3xl text-orange-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                G<span className="text-xl font-bold text-gray-300">Y</span>M
                <Dumbbell className="w-5 h-4 text-orange-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
              </Link> */}
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="h-auto w-[85px] flex items-end  relative"
                />
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-500 text-lg font-medium hover:text-orange-600 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <Link to="/membership">
                <PrimaryBtn>Become A Member</PrimaryBtn>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
