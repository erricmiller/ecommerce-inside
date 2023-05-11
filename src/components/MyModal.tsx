import React, { FC } from "react";
import {IoCloseSharp} from 'react-icons/io5';

const MyModal: FC = ({visible}) => {
    if(!visible) return null;
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm ">
      <div className="relative flex rounded-[0.3rem] border-2 border-[#1b1035] bg-white items-center justify-center">
        <div className="flex">
          <div className="flex min-h-full flex-col  gap-8 bg-caribbeangreen p-[45px]">
            <div className="cross absolute z-50 top-[-110px] right-[-210px] md:top-[-25px] md:right-[-25px] rounded-full bg-white h-[45px] w-[45px] flex justify-center items-center border-[2px] border-[#cbcbcb] cursor-pointer hover:bg-darkblue hover:text-white">
                <IoCloseSharp size={25} />
            </div>
            <div className="row hidden md:flex gap-8">
              <img
                src="/popup-image-1.webp"
                alt=""
                className="border border-[#1b1035] shadow-md shadow-black"
              />
              <img
                src="/popup-image-2.webp"
                alt=""
                className="border border-[#1b1035] shadow-md shadow-black"
              />
            </div>
            <div className="row hidden md:flex gap-8">
              <img
                src="/popup-image-3.webp"
                alt=""
                className="border border-[#1b1035] shadow-md shadow-black"
              />
              <img
                src="/popup-image-4.webp"
                alt=""
                className="bg-blue border border-[#1b1035] shadow-md shadow-black bg-[#082187]"
              />
            </div>
          </div>
          <div className="w-[300px] bg-darkblue hidden md:block"></div>
          <div className="absolute border-4 border-caribbeangreen bg-darkblue right-[-210%] top-[-100%] md:right-0 md:top-[25%] flex flex-col flex-wrap p-[26px]">
            <h3 className="uppercase text-white text-[30px] leading-[45px] font-[500]">GET UPTO</h3>
            <h3 className="uppercase text-caribbeangreen text-[60px] leading-[45px] font-[900]">75% OFF</h3>
            <h3 className="uppercase text-white text-[30px] leading-[45px] font-[500]">on all services</h3>
            <p className="uppercase text-white text-[14px] font-[600]">*OFFER IS AVAILABLE FOR A LIMITED TIME!</p>
          <div className="getStarted-form">
              <form id="Get Started">
                <div className="form-group">
                  <input type="email" className="form-control input-lg" placeholder="Enter Your Email Address" size={40} />
                </div>
                <input type="submit"  value={"Let's Get Started"}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
