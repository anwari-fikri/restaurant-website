import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider2 = () => {
  return (
    <div className="pt-28 md:pt-0">
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
      >
        <SwiperSlide>
          <img src="assets/ww4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/ww5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/ww6.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
