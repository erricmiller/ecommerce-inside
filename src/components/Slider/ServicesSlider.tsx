import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Button from "../ui/Button";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

SwiperCore.use([Navigation, Pagination]);

const ServicesSlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <Swiper
        id="mainColSlider"
        navigation={{ prevEl, nextEl }}
        className=" bg-white"
        style={{
          "--swiper-navigation-color": "black",
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-7 px-[50px] md:flex-row">
            <div className="slider-data md:w-[50%] ">
              <h3 className="pb-[10px] text-[15px] font-bold text-[#302839] md:pb-[13px] md:text-[20px] lg:pb-[20px] lg:text-[24px]">
                PROJECT
              </h3>
              <h4 className="pb-[8px]  text-[14px] text-[#13101a] md:pb-[10px] md:text-[17px] lg:pb-[40px] lg:text-[20px]">
                Slide 1
              </h4>
              <h2 className="pb-[13px] text-[27px] font-bold text-[#13101a] md:pb-[16px] md:text-[33px] lg:pb-[40px] lg:text-[50px]">
                Project 1
              </h2>
              <p className="pb-[18px]  text-[13px] leading-[22px] text-[#13101a] md:pb-[20px] md:text-[14px] md:leading-[26px] lg:pb-[20px] lg:text-[16px] lg:leading-[30px]">
                Project Desc
              </p>
              <Button variant="Green" className="cursor-pointer">
                Case Study
              </Button>
            </div>
            <div className="slider-img">
              <img src={"case-img-1.webp"} alt="Slider Project Image" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-7 px-[50px] md:flex-row">
            <div className="slider-data md:w-[50%] ">
              <h3 className="pb-[10px] text-[15px] font-bold text-[#302839] md:pb-[13px] md:text-[20px] lg:pb-[20px] lg:text-[24px]">
                PROJECT
              </h3>
              <h4 className="pb-[8px]  text-[14px] text-[#13101a] md:pb-[10px] md:text-[17px] lg:pb-[40px] lg:text-[20px]">
                Slide 2
              </h4>
              <h2 className="pb-[13px] text-[27px] font-bold text-[#13101a] md:pb-[16px] md:text-[33px] lg:pb-[40px] lg:text-[50px]">
                Project 2
              </h2>
              <p className="pb-[18px]  text-[13px] leading-[22px] text-[#13101a] md:pb-[20px] md:text-[14px] md:leading-[26px] lg:pb-[20px] lg:text-[16px] lg:leading-[30px]">
                Project Desc
              </p>
              <Button variant="Green" className="cursor-pointer">
                Case Study
              </Button>
            </div>
            <div className="slider-img">
              <img src={"case-img-2.webp"} alt="Slider Project Image" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-center gap-5 p-6">
        <div className="cursor-pointer" ref={(node) => setPrevEl(node)}>
          <HiArrowSmLeft size={38} color="black" />
        </div>
        <div className="cursor-pointer" ref={(node) => setNextEl(node)}>
          <HiArrowSmRight size={38} color="black" />
        </div>
      </div>
    </>
  );
};

export default ServicesSlider;
