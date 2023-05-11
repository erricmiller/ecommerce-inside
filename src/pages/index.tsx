import { type NextPage } from "next";
import {useState} from 'react';
import Head from "next/head";
import Header from "~/components/Header/Header";
import ServicePackages from "~/components/Packages/ServicePackages";
import Slider from "~/components/Slider/Slider";
import TwinColSlider from "~/components/Slider/TwinColSlider";
import ClientDtaCard from "~/components/cards/ClientDtaCard";
import ServicesCard from "~/components/cards/ServicesCard";
import TechLeaf from "~/components/TechLeaf";
import Button from "~/components/ui/Button";
import ServicesData from "~/data/ServicesData";
import clientsData from "~/data/clientsData";
import leftTechLeafData from "~/data/leftTechLeafData";
import rightTechLeafData from "~/data/rightTechLeafData";
import GetStarted from "~/components/GetStarted";
import Footer from "~/components/Footer";
import CopyRightBar from "~/components/CopyRightBar";
import ProjectSlider from "~/components/Slider/ProjectSlider";
import HeroSlider from "~/components/Slider/HeroSlider";
import MyModal from "~/components/MyModal";
import Testimonials from "~/components/Testimonials";
import Expertise from "~/components/Expertise";
import Agencies from "~/components/Agencies";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>Ecommerce Inside</title>
        <meta name="description" content="Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
      </Head>
      <main className="overflow-hidden">
        <Header />
        <HeroSlider />
        <section className="bg-white flex flex-col items-center justify-center py-16 px-[65px]">
          <img src="/tg-icon.jpg" alt="" className=" rounded-full border-[5px] border-caribbeangreen animate-grow-shrink" />
          <div className="flex flex-col items-center mt-6 mb-[25px]">
            <h2 className="text-black text-h2 animate-fade-in-up text-center lg:text-left">The Best Digital Marketing Company in UAE</h2>
            <h2 className="text-caribbeangreen text-h2 animate-fade-in-up text-center lg:text-left">An Incredible Intersection of Creativity and Tech</h2>
          </div>
          <p className="text-black text-p animate-fade-in-up text-center">A full service digital marketing platform that caters to every scope from marketing to the brand building along with a wide range of latest IT solutions. We are rated as USA’s best digital marketing agency for our swift deliveries and professionalism. We are a bunch of creative minds who think alike to make marketing goals and dreams come true. Our experts have over decades of industry experience as well as expertise. Ecommerce Inside devises strategies and methodologies that make your brand stand out among others. With complete hands-on experience in web development, design, brand building, content optimization. We’ll upscale your sales, digital presence, and leads. So what are you waiting for? Contact us today for a consultation on how we can help you with all your digital needs & make it count with the top digital marketing companies in the UAE.</p>
          <div className="flex md:flex-row flex-col items-center gap-10 mt-6">
            <Button variant='Dark' className="">Let's Get Your Project Started</Button>
            <Button variant='Green' className="">Talk To Our Expert For Free</Button>
          </div>
        </section>

        
        <section className="bg-white flex flex-col items-center justify-center py-16 px-[65px] w-[75%] mx-auto">
          <h2 className="text-black text-h2 font-bold  animate-fade-in-up text-center lg:text-left">Ecommerce Inside Plans & Pricing</h2>
          <h4 className="text-gray-500 text-h4 animate-fade-in-up text-center lg:text-left">Affordable Price Packages</h4>
          <ServicePackages />
        </section>
        {/* <Packages /> */}

        <section className=" bg-white  py-16 px-[65px] border-y border-[#ccc]">
          <ProjectSlider />
        </section>


        <section className=" bg-white flex flex-col items-center justify-center py-16 ">
          <h2 className="text-h2 text-center text-gray-500">Upscale and Leverage Brand Growth </h2>
          <h2 className="text-h2 text-center font-extrabold text-black">With the Digital Marketing Company in USA </h2>
          <p className="text-p text-center text-gray-700 text-center mb-[40px]">Allow us to take your brand to new heights with the ultra modern marketing strategies and improve your brand’s digital visibility. Our professionals with decades of experience and marketing expertise can change the game in a snap. </p>
          <div className=" xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:grid ">
            <div className={`bg-caribbeangreen bg-center  px-9 flex flex-col h-[385px]  justify-center border `}>
              <div className=' group-hover:hidden flex flex-col'>
                <h3 className='text-h3 text-white font-bold '>Our Services</h3>
                <p className=' text-white text-sm pt-1 leading-[20px]'>Ecommerce Inside is on a mission to bring a revolution in the IT and marketing domain with up-to-date technology, tools, strategy, and approach. Our dedicated teams understand the industry and audience requirements. We help you come forward and up your brand’s game.</p>
                <a href="#" className='text-white text-sm hover:text-black uppercase'>CHECK OUT OUR SERVICES HERE </a>
              </div>
            </div>
            {ServicesData.map((service,index) => (
              <ServicesCard service={service} key={index} />
            ))}
          </div>
        </section>


        <section className=" bg-white flex flex-col items-center justify-center py-[50px] px-[120px]  ">
          <div className="flex  justify-center">
            <h3 className="flex items-center text-[18px] md:text-[25px] lg:text-[37px] justify-center font-extrabold text-darkblue mx-auto">Hire  <img src="/service-cta-icon.png" alt="cta icon" className="p-[8px] w-[8%] animate-grow-shrink " />and Grow your Brand with your next Design/Development Project.</h3>
          </div>
        </section>


        <section className=" bg-[url('/combo_bg.jpg')] bg-cover bg-no-repeat bg-center py-[100px]">
          <div className="container max-w-[540px] md:max-w-[960px] lg:max-w-[1140px] mx-auto px-[15px]  relative">
            <div className="combo_offer_row lg:pr-[50%]">
              <div className="combo_image hidden md:block absolute top-[50%] right-[4%] max-w-[50%] -translate-y-2/4">
                <img src="/combo_offer.webp" alt="" className="max-w-[130%] h-auto" />
              </div>
              <div className="combo_offer_content">
                <h3 className="text-white font-bold text-[30px] mb-[30px]">Business Setup<br /> All-in-One Package</h3>
                <p className="text-base md:[22px] mb-[10px] text-caribbeangreen uppercase">WE UNDERSTAND WHAT’S BEST FOR YOUR BUSINESS</p>
                <p className="text-base lg:text-[18px] text-white">Ecommerce Inside offers branding solutions to expand your reach and establish an online presence. Our combo packages fit for companies that strive for success & cover everything you need to run your business successfully.</p>
                <div className="row links flex flex-wrap">
                  <div className="col-lg-6">
                    <ul className="columns-1 md:columns-2 md:text-[16px] text-white mb-5">
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Logo Design</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Stationery Design</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Website Design</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Cup Design</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Banner Design</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Social Media Design</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Brand Guide</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>T-shirt Design</li>
                      <li className="mb-[10px]"><span className="before:content-['\2714\0020'] listTickColor"></span>Newsletter Design</li>

                    </ul>
                    <Button variant="Dark">Let's Get started</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


       
        <Agencies />


        <Expertise />


        <GetStarted />

        
        <Testimonials />


        <Footer />


        <CopyRightBar />

        <MyModal visible={showModal} />
      </main>
    </>
  );
};

export default Home;


