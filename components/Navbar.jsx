import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-[#D1411E] w-full h-28 px-12 sticky flex items-center justify-between">
      {/* Order Now */}
      <div className="flex">
        <div className="bg-white rounded-full flex justify-center items-center text-[#D1411E]">
          <BsTelephone className="w-14 h-14 p-3 fill-red" />
        </div>
        <div className="flex flex-col justify-center ml-5 text-white">
          <h4>Order Now</h4>
          <h3 className="font-bold">123 456 789</h3>
        </div>
      </div>

      {/* Navigation */}
      <nav className="text-white">
        <ul className="flex justify-evenly items-center">
          <li className="mx-5">Home</li>
          <li className="mx-5">Products</li>
          <li className="mx-5">Menu</li>
          <GiFullPizza className="w-20 h-20 mx-5" />
          <li className="mx-5">Events</li>
          <li className="mx-5">Blog</li>
          <li className="mx-5">Contact</li>
        </ul>
      </nav>

      {/* Cart */}
      <div className="">cart</div>
    </div>
  );
};

export default Navbar;
