import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";

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
      <nav className="bg-white">menu</nav>

      {/* Cart */}
      <div className="">cart</div>
    </div>
  );
};

export default Navbar;
