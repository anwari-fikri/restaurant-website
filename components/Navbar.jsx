import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#D1411E] w-full h-28 px-10 fixed z-[100]">
      <div className="flex items-center justify-between w-full h-full ">
        {/* Order Now */}
        <div className="flex">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-[#D1411E] lg:w-14 lg:h-14">
            <BsTelephone className="w-10 h-10 p-2 lg:w-14 lg:h-14 lg:p-3" />
          </div>
          <div className="flex flex-col justify-center ml-5 text-white">
            <h4>Order Now</h4>
            <h3 className="font-bold">123 456 789</h3>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex">
          <nav className="text-white">
            <ul className="flex justify-evenly items-center">
              <li className="mx-2 lg:mx-4">
                <h4>Home</h4>
              </li>
              <li className="mx-2 lg:mx-4">
                <h4>Products</h4>
              </li>
              <li className="mx-2 lg:mx-4">
                <h4>Menu</h4>
              </li>
              <GiFullPizza className="w-16 h-16 mx-1 lg:w-20 lg:h-20 lg:mx-4" />
              <li className="mx-2 lg:mx-4">
                <h4>Events</h4>
              </li>
              <li className="mx-2 lg:mx-4">
                <h4>Blog</h4>
              </li>
              <li className="mx-2 lg:mx-4">
                <h4>Contact</h4>
              </li>
            </ul>
          </nav>
        </div>

        {/* Cart */}
        <div className="text-white hidden md:flex">
          <div className="relative">
            <AiOutlineShoppingCart className="w-8 h-8" />
            <div className="absolute top-[-10px] right-[-12px] flex justify-center items-center">
              <h4 className="bg-white rounded-full text-[#D1411E] w-5 h-5 text-center">
                2
              </h4>
            </div>
          </div>
        </div>
        {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className="relative cursor-pointer text-white md:hidden"
        >
          <AiOutlineMenu className="w-7 h-7" />
          <div className="absolute top-[-10px] right-[-12px] flex justify-center items-center">
            <h4 className="bg-white rounded-full pt-0.5 text-[#D1411E] w-5 h-5 text-center">
              2
            </h4>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 flex flex-col justify-between"
              : "fixed left-[-100%] top-0 p-10 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <GiFullPizza className="w-20 h-20" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 flex justify-between">
              <h4 className="w-[85%] md:w-[90%] py-4 text-[#D1411E]">
                Da pizza
              </h4>
              <div className="relative">
                <AiOutlineShoppingCart className="w-8 h-8" />
                <div className="absolute top-[-10px] right-[-12px] flex justify-center items-center">
                  <h4 className="bg-[#D1411E] text-white pt-0.5 rounded-full w-5 h-5 text-center">
                    2
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-[#D1411E]py-4 flex flex-col">
              <ul className="uppercase">
                <li className="py-4 text-sm cursor-pointer">
                  <Link href="/#home">
                    <a onClick={() => setNav(false)}>Home</a>
                  </Link>
                </li>
                <li className="py-4 text-sm cursor-pointer">
                  <Link href="/#products">
                    <a onClick={() => setNav(false)}>Products</a>
                  </Link>
                </li>
                <li className="py-4 text-sm cursor-pointer">
                  <Link href="/#menu">
                    <a onClick={() => setNav(false)}>Menu</a>
                  </Link>
                </li>
                <li className="py-4 text-sm cursor-pointer">
                  <Link href="/#events">
                    <a onClick={() => setNav(false)}>Events</a>
                  </Link>
                </li>
                <li className="py-4 text-sm cursor-pointer">
                  <Link href="/#blog">
                    <a onClick={() => setNav(false)}>Blog</a>
                  </Link>
                </li>
                <li className="py-4 text-sm cursor-pointer">
                  <Link href="/#contact">
                    <a onClick={() => setNav(false)}>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
