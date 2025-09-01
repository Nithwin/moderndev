"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-black/10 backdrop-blur-3xl w-full fixed z-10">
      <div className="flex justify-between py-2 items-center">
        <div className="w-full flex items-center justify-between ps-2 pe-[2rem]">
          <div className="flex items-center">
            <Image
              className="w-14"
              height={100}
              width={100}
              src={"/logo.png"}
              alt="Logo"
            />
            <p className="text-white font-bold font-poppins text-3xl">
              Modern<span className="text-red-500">Dev</span>
            </p>
          </div>
          <div className={`lg:flex hidden`}>
            <ul className="flex gap-[3rem] font-medium text-lg  text-gray-300 font-inter">
              <li className="">
                <span>Objective</span>
              </li>
              <li className="">
                <span>Projects</span>
              </li>
              <li className="">
                <a href="/members">
                  <span>Members</span>
                </a>
              </li>
              <li>
                <span>Skills</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul>
              <li className="delay-150 ease-linear transition-all  hover:scale-110">
                <span className="cursor-pointer text-white font-inter text-xl bg-gradient-to-r from-[#EB0000] to-[#FF00B2] px-[1.5rem] py-2 rounded-full font-semibold">
                  Join Us
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${
            open ? "translate-y-10" : "translate-y-180 hidden"
          } transition-all delay-150 ease-linear left-0 right-0 absolute z-50 top-[2rem] backdrop-blur-3xl bg-red-950/80 flex lg:hidden justify-center h-[90dvh]`}
        >
          <ul className="flex flex-col items-center justify-evenly text-2xl text-red-100 font-inter">
            <li className="">
              <span>Objective</span>
            </li>
            <li className="">
              <span>Projects</span>
            </li>
            <li className="">
              <a href="/members">
                <span>Members</span>
              </a>
            </li>
            <li>
              <span>Skills</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="lg:hidden">
          {open ? (
            <X onClick={() => setOpen(!open)} className="text-white size-10" />
          ) : (
            <Menu
              onClick={() => setOpen(!open)}
              className="text-white size-10"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
