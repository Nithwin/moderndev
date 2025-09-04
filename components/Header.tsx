"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * Header component for the ModernDev website.
 * Provides navigation links, a logo, and a mobile-responsive menu.
 */
const Header = () => {
  /**
   * State to control the visibility of the mobile menu.
   * @type {boolean}
   */
  const [open, setOpen] = useState(false);
  /**
   * Next.js router instance for programmatic navigation.
   */
  const router = useRouter();

  /**
   * Closes the mobile menu.
   */
  const closeMenu = () => {
    setOpen(false);
  };

  /**
   * Handles navigation, either to an anchor on the current page or a new route.
   * Closes the mobile menu after navigation.
   * @param {string} path - The path to navigate to (e.g., "/#vision", "/members").
   */
  const handleScroll = (path: string) => {
    // Check if the path is an anchor link (starts with "/#")
    if (path.startsWith("/#")) {
      router.push(path, { scroll: true }); // Navigate to the anchor with smooth scrolling
      closeMenu();
    } else {
      router.push(path); // Navigate to a new page
      closeMenu();
    }
  };

  return (
    <header className="bg-black/10 backdrop-blur-3xl w-full fixed z-50">
      <div className="flex justify-between py-2 items-center px-4 md:px-8 relative">
        {/* Logo and Site Title */}
        <Link
          className="flex items-center"
          href="/#hero"
          onClick={() => handleScroll("/#hero")}
        >
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
        </Link>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden items-center space-x-12">
          <ul className="flex gap-[3rem] font-medium text-lg text-gray-300 font-inter">
            <li>
              <Link
                href="/#vision"
                onClick={() => handleScroll("/#vision")}
                className="hover:text-white transition-colors duration-200"
              >
                <span>Vision</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={() => handleScroll("/#projects")}
                className="hover:text-white transition-colors duration-200"
              >
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/members"
                onClick={() => handleScroll("/members")}
                className="hover:text-white transition-colors duration-200"
              >
                <span>Members</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                onClick={() => handleScroll("/#skills")}
                className="hover:text-white transition-colors duration-200"
              >
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={() => handleScroll("/#contact")}
                className="hover:text-white transition-colors duration-200"
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <Link href="https://forms.gle/GzkTkuUUw83rwAP5A">
            <button className="delay-150 ease-linear transition-all hover:scale-110 cursor-pointer text-white font-inter text-xl bg-gradient-to-r from-[#EB0000] to-[#FF00B2] px-[1.5rem] py-2 rounded-full font-semibold">
              Join Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden z-20">
          {open ? (
            <X
              onClick={closeMenu}
              className="text-white size-10 cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setOpen(!open)}
              className="text-white size-10 cursor-pointer"
            />
          )}
        </div>

        {/* Mobile Navigation Menu (Overlay) */}
        <div
          className={`${
            open ? "translate-x-0" : "translate-x-full"
          } transform transition-transform duration-300 ease-in-out fixed top-[4rem] right-0 h-[90vh] w-full backdrop-blur-3xl bg-red-950/80 flex lg:hidden justify-center items-center z-10`}
        >
          <ul className="flex flex-col items-center justify-center gap-12 text-2xl text-red-100 font-inter">
            <li>
              <Link href="/#hero" onClick={() => handleScroll("/#hero")}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/#vision" onClick={() => handleScroll("/#vision")}>
                <span>Vision</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={() => handleScroll("/#projects")}
              >
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/members" onClick={() => handleScroll("/members")}>
                <span>Members</span>
              </Link>
            </li>
            <li>
              <Link href="/#skills" onClick={() => handleScroll("/#skills")}>
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => handleScroll("/#contact")}>
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link href="https://forms.gle/GzkTkuUUw83rwAP5A">
                <button className="delay-150 ease-linear transition-all hover:scale-110 cursor-pointer text-white font-inter text-xl bg-gradient-to-r from-[#EB0000] to-[#FF00B2] px-[1.5rem] py-2 rounded-full font-semibold">
                  Join Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
