import React from "react";
import Button from "./ui/Button";
import TechLeaf from "./TechLeaf";
import rightTechLeafData from "~/data/rightTechLeafData";
import leftTechLeafData from "~/data/leftTechLeafData";
import useRQGlobalState from "~/utils/useRQGlobalState";

const Expertise = () => {
  const [modalActive,setModalActive] = useRQGlobalState('modal',false);
  return (
    <section className="pb-[100px]">
      <div className="container mx-auto">
        <div className="development-box">
          <ul className="mx-auto flex list-none items-center justify-center py-[35px] text-center">
            <li className="flex flex-col items-center justify-center border-r border-gray-400 px-[15px] sm:px-[40px]">
              <img src="/development-icon.webp" alt="development-icon" />
              <h3 className="pt-[16px] text-[20px] font-bold text-[#333]">
                Web Development
                <br /> Technologies
              </h3>
            </li>
            <li className="flex flex-col items-center justify-center px-[15px] sm:px-[40px]">
              <img src="/development-icon-2.webp" alt="development-icon" />
              <h3 className="pt-[16px] text-[20px] font-bold text-[#333]">
                Mobile Application <br />
                Technologies
              </h3>
            </li>
          </ul>
        </div>
        <div className="heading">
          <h3 className="py-[10px] text-center text-[26px] font-bold text-black md:text-[42px] lg:text-[45px]">
            You Name It, We've Got It!
          </h3>
          <p className="text-center text-[14px] text-[#666] md:text-[16px] lg:text-[20px]">
            We build state of the art, hi-tech mobile apps, web apps and offer
            marketing solutions that lie in the intersection of technology, and
            innovation. Ecommerce Inside is fully equipped in terms of the
            latest tools, languages, and frameworks. We deliver the best and
            nothing less.
          </p>
        </div>
      </div>
      <div className="container-fluid mx-auto px-[20px] lg:px-[60px] ">
        <div className="row -mx-[15px] flex flex-col flex-wrap items-center justify-center py-[37px] lg:flex-row lg:pb-[80px]">
          <div className="technology-icon-wrap lg:max-w-[41.66%]">
            <ul className="technology-leaf-list flex list-none flex-wrap items-center justify-center">
              {leftTechLeafData.map((leaf, index) => (
                <li className="leaf-list m-[12px]" key={index}>
                  <TechLeaf leaf={leaf} />
                </li>
              ))}
            </ul>
          </div>
          <div className="technology-icon-wrap mx-3 flex hidden max-w-[8.33%] flex-col lg:block">
            <ul className="list-none text-center">
              <li className="relative pb-[90px]  text-[12px] font-extrabold text-black before:absolute before:bottom-[15%] before:left-[50%] before:h-[50px] before:w-[1px] before:bg-black md:text-[14px]">
                Languages
              </li>
              <li className="relative pb-[90px]  text-[12px] font-extrabold text-black before:absolute before:bottom-[15%] before:left-[50%] before:h-[50px] before:w-[1px] before:bg-black md:text-[14px]">
                Frameworks
              </li>
              <li className="pb-[90px] text-[12px]  font-extrabold text-black md:text-[14px]  ">
                Databse
              </li>
            </ul>
          </div>
          <div className="technology-icon-wrap lg:max-w-[41.66%] ">
            <ul className="technology-leaf-list flex list-none flex-wrap items-center justify-center">
              {rightTechLeafData.map((leaf, index) => (
                <li className="leaf-list m-[12px]" key={index}>
                  <TechLeaf leaf={leaf} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="about-btn flex flex-col sm:flex-row items-center justify-center gap-8">
        <Button variant="Dark" className="" onClick={()=>setModalActive(true)}>
          Let's Get Started
        </Button>
        <Button variant="Green">Consult An Expert</Button>
      </div>
    </section>
  );
};

export default Expertise;
