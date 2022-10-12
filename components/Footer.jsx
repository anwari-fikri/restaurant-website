import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#D1411E] text-white w-full md:p-2 py-16">
      <div className="max-w-[80%] mx-auto flex flex-col justify-center h-full xl:max-w-[1240px] md:h-60">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="text-end md:hidden">
            <h2>NICE PIZZA GOOD PIZZA OW YEA.</h2>
          </div>
          <div>
            <h3>Find us</h3>
            <p>
              No 123, Complex Jalan Berjaya, Kampong Jalan Baduri, Brunei
              Darussalam
            </p>
          </div>
          <div>
            <h3>Working Hours</h3>
            <p>Saturday until Thursday</p>
            <p>10:00 - 21:00</p>
          </div>
          <div className="hidden md:flex text-end">
            <h2>NICE PIZZA GOOD PIZZA OW YEA.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
