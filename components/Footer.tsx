import Image from "next/image";
import { SiGithub,SiLinkedin,SiInstagram,SiFacebook  } from "react-icons/si";
const Footer = () => {
  let contacts = [
    {
      icon: SiGithub,
      link: "",
    },
    {
      icon: SiLinkedin ,
      link: "",
    },
    {
      icon: SiInstagram  ,
      link: "",
    },
    {
      icon: SiFacebook   ,
      link: "",
    },
  ];
  return (
    <footer className="lg:px-[2rem]">
      <div className="flex flex-col gap-[2rem]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-auto lg:mx-0 gap-[2rem] relative">
             <div className="size-[10rem] rounded-full bg-[#EB0000]/35 blur-3xl lg:blur-6xl absolute top-0 left-[10%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
          <Image
            className="w-16"
            height={100}
            width={100}
            src={"/logo.png"}
            alt="Logo"
          />
          <ul className="text-gray-300 font-inter flex flex-col lg:flex-row justify-center items-center gap-[1.5rem] cursor-pointer">
            <li className="">
              <span>Objective</span>
            </li>
            <li className="">
              <span>Projects</span>
            </li>
            <li className="">
              <span>Members</span>
            </li>
            <li>
              <span>Skills</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
          <ul className="flex gap-[1.5rem] cursor-pointer">
            {contacts.map((item, index) => (
              <li>
                <item.icon className="text-gray-300 size-6 lg:size-8" />
              </li>
            ))}
          </ul>
        </div>
        <div>
            <p className="text-sm lg:text-lg text-gray-300 text-center font-poppins">© 2025 MordernDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
