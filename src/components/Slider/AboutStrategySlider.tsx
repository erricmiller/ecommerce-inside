import React,{useState} from "react";
import aboutStrategyData from "~/data/aboutstrategyData";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutStrategySlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <div className="slider-container justify-center p-4">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="StrategySlider"
        navigation={{ prevEl, nextEl }}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
        {aboutStrategyData.map((data, index) => (
          <SwiperSlide key={index} className="m-[15px]">
            <div className="slider-card group flex h-[450px] flex-col flex-wrap rounded-br-[60px] rounded-tl-[60px] border bg-[#241f2e]  px-[33px] py-[55px] duration-300 hover:bg-white">
              <span className="text-[20px] text-white group-hover:text-black">
                {data.id}
              </span>
              <h3 className="py-[25px] text-[30px] font-semibold text-white group-hover:text-caribbeangreen">
                {data.title}
              </h3>
              <p className="text-[15px] leading-[30px] text-white group-hover:text-[#666]">
                {data.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="flex gap-4 p-7">
        <div className="left h-[80px] w-[80px]" ref={(node) => setPrevEl(node)}>
          <BsArrowLeftShort size={40} />
        </div>
        <div className="right h-[80px] w-[80px]" ref={(node) => setNextEl(node)} >
          <BsArrowRightShort size={40} />
        </div>
      </div> */}
    </div>
  );
};

export default AboutStrategySlider;
