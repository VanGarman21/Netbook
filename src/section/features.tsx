import React from "react";
import {
  FaApple,
  FaComments,
  FaGooglePlay,
  FaHeart,
  FaPlay,
  FaRegListAlt,
  FaUsers,
} from "react-icons/fa";
import { BiGroup } from "react-icons/bi";

const features = () => {
  return (
    <section id="community" className="relative bg-[#F1F6FD] w-full py-10">
      <h2 className="text-base font-normal text-center text-[#217BF4] mb-2">
        Our Community
      </h2>
      <h1 className="text-4xl font-bold text-center  mb-1" data-aos="fade-up">
        Community Main Feature
      </h1>
      <h2 className="text-base font-normal text-center text-[#656464] mb-2">
        The wise man therefore always holds in these matters <br /> to this
        principle of selection.
      </h2>
      <div className="layout mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:ml-40 ml-8">
          <div className="rounded-lg shadow-md bg-white max-w-[300px] md:max-w-[380px]">
            <div className="h-40 bg-gray-200 rounded-t-lg" data-aos="fade-up">
              <FaUsers size={48} className="m-auto mt-6 text-[#217BF4]" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-[#656464] mb-2">
                Members
              </h3>
              <p className="text-base text-[#656464] mb-4">
                Connect with other users and grow your network.
              </p>
              <a
                href="netbook_users"
                className="inline-block py-2 px-6 border rounded-full text-sm font-medium text-[#217BF4] border-[#217BF4] hover:text-white hover:bg-[#217BF4]"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-md bg-white max-w-[300px] md:max-w-[380px]">
            <div className="h-40 bg-gray-200 rounded-t-lg" data-aos="fade-up">
              <BiGroup size={48} className="m-auto mt-6 text-[#217BF4]" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-[#656464] mb-2">
                Groups
              </h3>
              <p className="text-base text-[#656464] mb-4">
                Join or create groups based on your interests.
              </p>
              <a
                href="#"
                className="inline-block py-2 px-6 border rounded-full text-sm font-medium text-[#217BF4] border-[#217BF4] hover:text-white hover:bg-[#217BF4]"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-md bg-white max-w-[300px] md:max-w-[380px]">
            <div className="h-40 bg-gray-200 rounded-t-lg" data-aos="fade-up">
              <FaComments size={48} className="m-auto mt-6 text-[#217BF4]" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-[#656464] mb-2">
                Forums
              </h3>
              <p className="text-base text-[#656464] mb-4">
                Engage in discussions and exchange ideas.
              </p>
              <a
                href="#"
                className="inline-block py-2 px-6 border rounded-full text-sm font-medium text-[#217BF4] border-[#217BF4] hover:text-white hover:bg-[#217BF4]"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-md bg-white max-w-[300px] md:max-w-[380px]">
            <div className="h-40 bg-gray-200 rounded-t-lg" data-aos="fade-up">
              <FaHeart size={48} className="m-auto mt-6 text-[#217BF4]" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-[#656464] mb-2">
                Activities
              </h3>
              <p className="text-base text-[#656464] mb-4">
                Stay up to date with the latest activities.
              </p>
              <a
                href="#"
                className="inline-block py-2 px-6 border rounded-full text-sm font-medium text-[#217BF4] border-[#217BF4] hover:text-white hover:bg-[#217BF4]"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-md bg-white max-w-[300px] md:max-w-[380px]">
            <div className="h-40 bg-gray-200 rounded-t-lg" data-aos="fade-up">
              <FaRegListAlt size={48} className="m-auto mt-6 text-[#217BF4]" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-[#656464] mb-2">
                List Builder
              </h3>
              <p className="text-base text-[#656464] mb-4">
                Create and manage lists of your favorite users.
              </p>
              <a
                href="#"
                className="inline-block py-2 px-6 border rounded-full text-sm font-medium text-[#217BF4] border-[#217BF4] hover:text-white hover:bg-[#217BF4]"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-md bg-white max-w-[300px] md:max-w-[380px]">
            <div className="h-40 bg-gray-200 rounded-t-lg" data-aos="fade-up">
              <FaPlay size={48} className="m-auto mt-6 text-[#217BF4]" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-[#656464] mb-2">
                Free Movies
              </h3>
              <p className="text-base text-[#656464] mb-4">
                Find and share movies with other users.
              </p>
              <a
                href="movies"
                className="inline-block py-2 px-6 border rounded-full text-sm font-medium text-[#217BF4] border-[#217BF4] hover:text-white hover:bg-[#217BF4]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;
