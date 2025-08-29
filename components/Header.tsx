"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-black/20 backdrop-blur-3xl w-full fixed top-0 left-0 right-0">
      <nav className="flex justify-between py-2 items-center">
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
                <span>Members</span>
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
              <li>
                <span className="text-white font-inter text-2xl">Join Us</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${
            open ? "translate-y-0" : "translate-y-180"
          } transition-all delay-150 ease-linear fixed inset-0 z-50 top-[4.4rem] backdrop-blur-3xl bg-red-600/10 flex lg:hidden justify-center`}
        >
          <ul className="flex flex-col items-center justify-evenly text-2xl text-red-100 font-inter">
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
      </nav>
    </header>
  );
};

export default Header;
