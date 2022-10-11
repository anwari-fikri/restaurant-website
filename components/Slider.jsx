import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

const featuredProducts = [
  "/assets/ww.png",
  "/assets/ww2.png",
  "/assets/ww3.png",
];

let count = 0;
let slideInterval;
const Slider = ({ nav }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  useEffect(() => {
    console.log(nav);
    nav
      ? slideRef.current.classList.add("-z-10")
      : slideRef.current.classList.remove("-z-10");
  }, [nav]);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPreviousClick = () => {
    count =
      (currentIndex + featuredProducts.length - 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="">
        <Image
          src={featuredProducts[currentIndex]}
          alt=""
          width={1920}
          height={900}
        />
      </div>

      <div className="absolute w-full top-1/2 px-3 flex justify-between items-center">
        <button
          onClick={handleOnPreviousClick}
          className="bg-black text-white p-1 z-50 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          onClick={handleOnNextClick}
          className="bg-black text-white p-1 z-50 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
