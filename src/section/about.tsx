import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <section className="bg-white pt-24">
      <div className="container mx-auto py-20">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col mt-20 mb-7 ml-28">
              <h3
                className="text-lg font-bold text-[#217BF4] mb-4"
                data-aos="fade-right"
              >
                Whats Netboks?
              </h3>
              <h2
                className="text-4xl font-bold text-[#0A093D] mb-4"
                data-aos="fade-right"
              >
                Why Join to Netbook <br /> Social Network?
              </h2>
              <h4
                className="text-base font-normal text-[#656464] mb-4"
                data-aos="fade-right"
              >
                Recent surveys have indicated that small businesses <br />
                recognise the need they have to connect with <br />
                consumer.
              </h4>
              <ul className="list-disc">
                <li className="mb-4" data-aos="fade-right">
                  <h3 className="text-lg font-bold text-[#171648]">Groups</h3>
                </li>
                <li className="mb-4" data-aos="fade-right">
                  <h3 className="text-lg font-bold text-[#171648]">Messages</h3>
                </li>
                <li className="mb-4" data-aos="fade-right">
                  <h3 className="text-lg font-bold text-[#171648]">Share</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/about.png"
              alt="about"
              width={2256}
              height={2032}
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
