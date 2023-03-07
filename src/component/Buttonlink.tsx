import { title } from "process";
import React from "react";

type ButtonLinkType = {
  link?: string;
  title: string;
};
const Buttonlink = ({ title, link }: ButtonLinkType) => {
  return (
    <button>
      <a
        href={link}
        className="inline-flex justify-center items-center py-3 px-5 m-2 text-base font-medium text-center text-black hover:text-white rounded-lg border border-[#217BF4] bg-[#F1F6FD] hover:bg-[#217BF4] focus:ring-4 focus:ring-gray-100"
      >
        {title}
      </a>
    </button>
  );
};

export default Buttonlink;
