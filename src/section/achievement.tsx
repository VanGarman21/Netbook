import React from "react";

const achievement = () => {
  return (
    <section id="about" className="relative w-full py-24 ">
      <div className="layout mt-4">
        <div className="grid md:grid-col-1 md:grid-cols-3 md:gap-2 gap-10 z-20">
          <div className="bg-[#F1F6FD] shadow-md md:max-w-[380px] rounded-lg border-blue-500">
            <div className="flex flex-col justify-start px-10 py-8 rounded-lg group hover:bg-[#D4E7FE] hover:bg-cover hover:bg-no-repeat">
              <h2
                className="text-2xl font-bold text-[#0A093D] mb-4"
                data-aos="fade-right"
              >
                4.8 Rating
              </h2>
              <h3
                className="text-lg font-normal text-[#217BF4] mb-4"
                data-aos="fade-right"
              >
                +836k Members
              </h3>
              <h4
                className="text-base font-normal text-[#656464] mb-4"
                data-aos="fade-right"
              >
                More than 2 billion we people over countries use socibooks we to
                stay in touch with friends.
              </h4>
              <button
                className="text-sm px-11 py-6 leading-none bg-[#F1F6FD] hover:bg-[#217BF4] hover:text-white mt-0 rounded-2xl"
                data-aos="fade-right"
              >
                Join Our Community
              </button>
            </div>
          </div>
          <div
            className="bg-[#F1F6FD] shadow-md md:max-w-[380px] rounded-lg border-blue-500"
            data-aos="fade-up"
          >
            <div className="flex flex-col justify-start px-10 py-8 rounded-lg group hover:bg-[#D4E7FE] hover:bg-cover hover:bg-no-repeat">
              <h2
                className="text-2xl font-bold text-[#0A093D] mb-4"
                data-aos="fade-right"
              >
                Awwwards
              </h2>
              <h3
                className="text-lg font-normal text-[#217BF4] mb-4"
                data-aos="fade-right"
              >
                Best of 2021 on Github
              </h3>
              <h4
                className="text-base font-normal text-[#656464] mb-4"
                data-aos="fade-right"
              >
                More than 2 billion we people over countries use socibooks we to
                stay in touch with friends.
              </h4>
              <button
                className="text-sm px-11 py-6 leading-none bg-[#F1F6FD]  hover:bg-[#217BF4] hover:text-white mt-0 rounded-2xl"
                data-aos="fade-right"
              >
                Go To Awards
              </button>
            </div>
          </div>
          <div className="md:max-w-[380px] " data-aos="fade-up">
            <div className="flex flex-col justify-start px-10 py-3 rounded-lg group">
              <h3
                className="text-md font-normal text-[#217BF4] mb-4"
                data-aos="fade-right"
              >
                Our Achievement
              </h3>
              <h2
                className="text-3xl font-bold text-[#0A093D] mb-4"
                data-aos="fade-right"
              >
                We are Connecting You The Digital Life.
              </h2>
              <h4
                className="text-base font-normal text-[#656464] mb-4"
                data-aos="fade-right"
              >
                The scope the Social Media becomes crucial Is helps the business
                to directly engage with their needs and wants.
              </h4>
              <button
                className="text-sm px-11 py-6 leading-none bg-[#F1F6FD] shadow-md hover:bg-[#217BF4] hover:text-white mt-0 rounded-2xl"
                data-aos="fade-right"
              >
                Discover Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default achievement;
