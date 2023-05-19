import React, { FC } from "react";
import TwinColSliderData from "~/data/TwinColSliderData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../ui/Button";
import useRQGlobalState from "~/utils/useRQGlobalState";

const HeroSlider: FC = () => {
  const [modalActive,setModalActive] = useRQGlobalState('modal',false);
  const slides = [
    {
      title: "Top Tier Digital Marketing Agency in Pakistan",
      desc: "Ecommerce Inside is the best digital marketing agency for a reason. We have a team of the best digital marketing enthusiasts who can disrupt all clichéd marketing methodologies with advanced strategies and customized solutions. We offer all kinds of management and consultations services that include B2B and B2C solutions that can help your brand and business grow exponentially. Request a free quote today and get your project started.",
      url: "/banner-karachi.jpg",
    },
    {
      title: "Best Digital Marketing Agency in USA",
      desc: "Ecommerce Inside is a leading digital marketing company in the UAE that is trusted by brands of all sizes and shapes. We help our clients to reach out to their target audience and make them stay for longer periods of time. We offer a free consultation to help you understand your needs and goals. We have a team of experts who will work together to develop a custom strategy for your company. Contact us today!",
      url: "/home-banner.jpg",
    },
  ];

  SwiperCore.use([Autoplay]);
  const swiper = useSwiper();

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      className=""
    >
      {slides.map((data, index) => (
        <SwiperSlide
          key={index}
          style={{ backgroundImage: `url(${data.url})` }}
        >
          <div className="flex items-center py-[250px] ">
            <div className=" w-[85%] sm:w-[80%]  rounded-br-[200px] bg-transparent bg-[url('/banner-slide-img.webp')] bg-cover pb-[50px] pl-[8px]  sm:pl-[40px] pr-[40px] pt-[50px] md:w-[60%] md:px-[50px] md:py-[40px] lg:w-[40%] lg:px-[70px] xl:py-[90px]">
              <h1 className=" pb-[10px] text-[20px] font-bold leading-[30px] text-white md:pb-[5px] md:text-[18px] md:leading-[23px] lg:pb-[10px] lg:text-[34px] lg:leading-[40px] xl:pb-[15px] xl:text-[42px] xl:leading-[50px]">
                {data.title}
              </h1>
              <p className="text-[14px] text-white md:text-[12px] lg:text-[14px] lg:pb-[20px] xl:pb-[35px] xl:text-[17px]">
                {data.desc}
              </p>
              <Button variant="Green" onClick={()=>setModalActive(true)}>Request Quote For Free</Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
