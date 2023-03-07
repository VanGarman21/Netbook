import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Home",
      links: [
        { label: "Home", url: "#" },
        { label: "Community", url: "#" },
        { label: "Events", url: "#" },
        { label: "Contact", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", url: "#" },
        { label: "News", url: "#" },
        { label: "Guides", url: "#" },
        { label: "Help Center", url: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "NewsFeed", url: "#" },
        { label: "Profile", url: "#" },
        { label: "Friends", url: "#" },
        { label: "Forums", url: "#" },
      ],
    },
    {
      title: "Main links",
      links: [
        { label: "Members", url: "#" },
        { label: "Activity", url: "#" },
        { label: "Groups", url: "#" },
        { label: "Private Group", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#2B2B39] pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          {sections.map((section) => (
            <div
              key={section.title}
              className="w-full md:w-1/4 text-center md:text-left"
            >
              <h5 className="uppercase mb-6 font-bold text-white">
                {section.title}
              </h5>
              <ul className="mb-4">
                {section.links.map((link) => (
                  <li key={link.label} className="mt-2">
                    <a
                      href={link.url}
                      className="text-[#E7E7E7] hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
