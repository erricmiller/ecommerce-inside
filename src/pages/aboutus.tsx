import React from "react";
import Agencies from "~/components/Agencies";
import CopyRightBar from "~/components/CopyRightBar";
import Expertise from "~/components/Expertise";
import Footer from "~/components/Footer";
import GetStarted from "~/components/GetStarted";
import Header from "~/components/Header/Header";
import AboutStrategySlider from "~/components/Slider/AboutStrategySlider";
import Testimonials from "~/components/Testimonials";
import Button from "~/components/ui/Button";
import aboutchooseData from "~/data/aboutchooseData";

const aboutus = () => {
  return (
    <>
      <Header />

      <section className="bg-[url('/about-banner.webp')] bg-cover bg-center bg-no-repeat pt-[200px]">
        <div className="banner-container mx-auto px-[15px]">
          <div className="flex justify-between">
            <div className="ml-[-15px] w-[60%] rounded-br-[200px]  bg-transparent bg-[url('/banner-slide-img.webp')] bg-cover py-[122px] pl-[20px] pr-[90px] lg:w-[40%] ">
              <span className=" pb-[5px] text-[20px] font-bold text-white lg:pb-[15px] lg:text-[30px] ">
                About US
              </span>
              <h1 className="text-[20px] font-bold leading-[30px]  text-white lg:text-[38px]  lg:leading-[1.2] xl:text-[45px]">
                Big Ideas
                <br /> Creative Team
                <br /> New Technology
              </h1>
            </div>

            <div className="hidden items-end md:flex">
              <img
                src="/about-banner-right.webp"
                alt="about us banner pic"
                className="w-[76%]"
              />
            </div>
          </div>
        </div>
      </section>



      <section className="flex justify-center overflow-hidden pt-[40px]">
        <div className="review-container flex max-w-[540px] flex-col items-center justify-between gap-[10px] px-[15px] md:max-w-[720px] lg:max-w-[960px] lg:flex-row xl:max-w-[1140px]">
          <img src="/about-review-1.webp" alt="" />
          <img src="/about-review-2.webp" alt="" />
          <img src="/about-review-3.webp" alt="" />
          <img src="/about-review-4.webp" alt="" />
        </div>
      </section>


      <section className="creativity pt-[80px] ">
        <div className="container mx-auto">
          <div className="row -mx-[15px] flex flex-col  items-center lg:flex-row">
            <div className="about-content lg:max-w-[50%]">
              <h2 className="xl:[50px] text-[30px] font-bold leading-[1.2] text-[#333] md:text-[40px] lg:text-[46] ">
                Creativity meets performance.{" "}
              </h2>
              <p className="py-[6px] text-[22px] leading-[33px] text-[#333] md:py-[20px] md:text-[24px] lg:py-[31px] lg:text-[27px] lg:leading-[33px] ">
                It’s a simple idea, a hard truth and ther day at work for us.
              </p>
              <p className="para text-[16px] leading-[28px] text-[#333] md:text-[20px] md:leading-[35px] lg:text-[23px] lg:leading-[38px] ">
                We have a passionate and diverse team of developers, designers,
                branding experts, ghostwriters, copywriters, marketers &
                animators. It is hard to put us in a box, but one thing we all
                have in common is a drive to produce exceptional work that helps
                our clients reach the top.
              </p>
              <div className="about-btn mt-[30px] flex justify-center gap-8">
                <Button variant="Dark" className="">
                  Let's Get Started
                </Button>
                <Button variant="Green">Consult An Expert</Button>
              </div>
            </div>

            <div className="about-img mt-[50px]  lg:max-w-[50%]">
              <img
                src="/about-creativity-img.webp"
                alt="About creativity image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="inner-smarter-sec py-[50px] md:py-[70px] lg:py-[100px] xl:py-[125px]">
        <div className="container mx-auto px-[15px]">
          <div className="-mx-[15px] flex flex-col items-center lg:flex-row">
            <div className="inner-smater-heading ">
              <h3 className="text-[24px] font-bold leading-[1.2] text-caribbeangreen">
                Brand Strategy
              </h3>
              <h2 className="text-[30px] font-bold leading-[1.2] md:text-[35px] lg:text-[40px] ">
                We Work Smarter, To Find Insights Faster.
              </h2>
            </div>

            <div className="inner-smater-content">
              <p className="text-[17px] text-[#666] md:text-[20px]">
                We have a team of professionals who makes brand strategies and
                helps you grow your brand and make business, with the help of
                our designers, developers, copywriters and animators. All our
                professionals are hardworking and dedicated to grow with you.
              </p>
            </div>
          </div>

          {/* <div className=" grid grid-cols-12  justify-between pt-[80px] overflow-hidden">
            <div className="smarter-img hidden lg:block col-span-4">
              <img src="/about-smarter-img.webp" alt="smarter-img" />
            </div>

            <div className="card-slider-wrapper col-span-8">
              <AboutStrategySlider />
            </div>
          </div> */}
        </div>
        
        <AboutStrategySlider />

      </section>

      <section className=" about-choose-section bg-[url('/about-choose-bg.webp')] bg-cover bg-no-repeat py-[60px] md:py-[90px]">
        <div className="container mx-auto px-[15px]">
          <div className="about-choose-heading text-center">
            <h2 className="text-[24px] font-medium leading-[1.2] text-[#241f2e] ">
              We Deliver Our Best
            </h2>
            <h3 className="choose-heading text-[28px] font-extrabold leading-[1.2] text-[#241f2e] md:text-[46px] lg:text-[60px] ">
              Reason to Choose Us
            </h3>
            <p className="choose-para text-[16px] leading-[24px] text-[#666] md:text-[20px] md:leading-[35px]">
              We are obliged to provide an incredible experience by giving
              high-quality eCommerce website design and development services.
              What makes us trustworthy partners? Here are the reasons!
            </p>
          </div>

          <div className="choose-cards grid grid-cols-1 gap-[15px] py-[40px] md:grid-cols-2 md:pb-[40px] md:pt-[90px] lg:grid-cols-3">
            {aboutchooseData.map((item) => (
              <div className="choose-card mb-[30px] h-[300px] rounded-br-[50px] rounded-tl-[50px] bg-[#1b1037] px-[33px] py-[50px] duration-300 hover:bg-caribbeangreen hover:shadow-xl">
                <div className="card-title flex items-center">
                  <img src={`/${item.img}`} alt="icon" />
                  <h3 className="title ml-[10px] text-[18px] font-medium text-white lg:ml-[25px] lg:text-[24px]">
                    {item.title}
                  </h3>
                </div>
                <p className="choose-card-desc pt-[40px] text-white ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="about-btn  flex justify-center gap-8">
            <Button variant="Dark" className="">
              Let's Get Started
            </Button>
            <Button variant="Green">Consult An Expert</Button>
          </div>
        </div>
      </section>

      <Agencies />

      <Expertise />

      <GetStarted />

      <Testimonials />

      <Footer />

      <CopyRightBar />
      
    </>
  );
};

export default aboutus;
