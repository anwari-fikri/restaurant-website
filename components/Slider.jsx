import React, { useEffect, useRef } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider2 = ({ nav }) => {
  const slideRef = useRef();

  useEffect(() => {
    console.log(nav);
    nav
      ? (slideRef.current.style.zIndex = -1)
      : (slideRef.current.style.zIndex = 0);
  }, [nav]);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      style={{
        "--swiper-theme-color": "#D1411E",
        zIndex: 0,
      }}
      ref={slideRef}
    >
      <SwiperSlide>
        <img src="assets/ww.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/ww2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/ww3.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider2;
