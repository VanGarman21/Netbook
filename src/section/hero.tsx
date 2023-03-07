import Buttonlink from "@/component/Buttonlink";
import React from "react";
import Image from "next/image";

const hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#FFFFFF] to-[#D4E7FE]">
      <div className="flex flex-wrap ml-3 md:ml-28 py-10">
        <div className="w-1/2 md:w-1/2">
          <div className="mt-20 mb-7">
            <Buttonlink link="#" title="Netbook community" />
          </div>
          <h2
            className="text-6xl font-bold text-center md:text-left text-[#0A093D] mb-8"
            data-aos="fade-right"
          >
            Your Solutions For Community!
          </h2>
          <h4
            className="text-2xl text-[#656464] mb-11 text-center md:text-left"
            data-aos="fade-right"
          >
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </h4>

          <Buttonlink link="#" title="About More" />
          <Buttonlink link="#" title="Invite Friend" />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/Iamge.png"
            alt="hero"
            width={1288}
            height={1101}
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default hero;
