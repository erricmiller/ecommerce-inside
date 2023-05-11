import React, { FC } from "react";
import TwinColSliderData from "~/data/TwinColSliderData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../ui/Button";

const ProjectSlider: FC = () => {
  SwiperCore.use([Autoplay]);
  const swiper = useSwiper();
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{
        delay: 2000,
      }}
      className=""
    >
      {TwinColSliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-7 px-[50px] md:flex-row">
            <div className="slider-data md:w-[50%] ">
              <h3 className="pb-[10px] text-[15px] font-bold text-[#302839] md:pb-[13px] md:text-[20px] lg:pb-[20px] lg:text-[24px]">
                PROJECT
              </h3>
              <h4 className="pb-[8px]  text-[14px] text-[#13101a] md:pb-[10px] md:text-[17px] lg:pb-[40px] lg:text-[20px]">
                {data.projectType}
              </h4>
              <h2 className="pb-[13px] text-[27px] font-bold text-[#13101a] md:pb-[16px] md:text-[33px] lg:pb-[40px] lg:text-[50px]">
                {data.projectName}
              </h2>
              <p className="pb-[18px]  text-[13px] leading-[22px] text-[#13101a] md:pb-[20px] md:text-[14px] md:leading-[26px] lg:pb-[20px] lg:text-[16px] lg:leading-[30px]">
                {data.projectDesc}
              </p>
              <Button variant="Green" className="cursor-pointer">
                Case Study
              </Button>
            </div>
            <div className="slider-img">
              <img src={data.image} alt="Slider Project Image" />
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  );
};

export default ProjectSlider;
