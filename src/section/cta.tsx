import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="bg-[#E5F0FD]">
      <div className="container mx-auto ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col mt-20 mb-7 ml-28">
              <h1 className="text-base font-normal text-center text-[#217BF4] mb-1">
                Get Our Aplication
              </h1>
              <h2 className="text-4xl  font-bold text-center text-[#0A093D] mb-2">
                You Can Easily Find , <br />
                This App…!
              </h2>
              <h3 className="text-base font-normal text-center text-[#656464] mb-2">
                I say chap that’s suing lavatory chip shop gosh off his smashing
                boot are you taking the piss posh loo brilliant.
              </h3>
              <div className="grid grid-cols-2">
                <button className="text-lg py-5 leading-none border rounded-lg border-[#217BF4] text-[#217BF4]  hover:text-white hover:bg-[#217BF4] mt-4 ml-20 lg:mt-0 max-w-[162px]">
                  <FaApple className="inline-block align-middle mr-2" />
                  App Store
                </button>
                <button className="text-lg py-5 leading-none border rounded-lg border-[#217BF4] text-[#217BF4] hover:text-white hover:bg-[#217BF4] mt-4 lg:mt-0 max-w-[162px]">
                  <FaGooglePlay className="inline-block align-middle mr-2" />
                  Play Store
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/mobile muckup.png"
              alt="mobile muckup"
              width={1610}
              height={1120}
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
