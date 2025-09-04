import Image from "next/image";
import { SiGithub,SiLinkedin,SiInstagram,SiFacebook  } from "react-icons/si";
import { IconType } from "react-icons";

/**
 * Footer component for the website.
 * Displays navigation links, social media icons, and copyright information.
 */
const Footer = () => {
  /**
   * Array of social media contact objects.
   * Each object contains an icon component and a link.
   * @type {Array<{icon: IconType, link: string}>}
   */
  const contacts = [
    { // Represents a social media contact
      icon: SiGithub as IconType, // GitHub icon
      link: "",
    },
    {
      icon: SiLinkedin as IconType,
      link: "",
    },
    {
      icon: SiInstagram as IconType,
      link: "",
    },
    {
      icon: SiFacebook as IconType,
      link: "",
    },
  ];

  return (
    <footer className="lg:px-[2rem]">
      <div className="flex flex-col gap-[2rem]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-auto lg:mx-0 gap-[2rem] relative">
          {/* Decorative blurred circle for visual effect */}
          <div className="size-[10rem] rounded-full bg-[#EB0000]/35 blur-3xl lg:blur-6xl absolute top-0 left-[10%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>

          {/* Website Logo */}
          <Image
            className="w-16"
            height={100}
            width={100}
            src={"/logo.png"}
            alt="Logo"
          />

          {/* Navigation Links */}
          <ul className="text-gray-300 font-inter flex flex-col lg:flex-row justify-center items-center gap-[1.5rem] cursor-pointer">
            <li className="">
              {/* Link to the Objective section */}
              <span>Objective</span>
            </li>
            <li className="">
              {/* Link to the Projects section */}
              <span>Projects</span>
            </li>
            <li className="">
              {/* Link to the Members section */}
              <span>Members</span>
            </li>
            <li>
              {/* Link to the Skills section */}
              <span>Skills</span>
            </li>
            <li>
              {/* Link to the Contact section */}
              <span>Contact</span>
            </li>
          </ul>

          {/* Social Media Icons */}
          <ul className="flex gap-[1.5rem] cursor-pointer">
            {contacts.map((item, index) => (
              <li key={index}>
                {/* Render each social media icon */}
                <item.icon className="text-gray-300 size-6 lg:size-8" />
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Information */}
        <div>
            <p className="text-sm lg:text-lg text-gray-300 text-center font-poppins">© 2025 MordernDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
