import Image from "next/image";
import React from "react";
import { Loader } from "lucide-react";

const Achievement = () => {
  return (
    <section className="pt-[4rem] h-full px-[1.5rem] lg:p-[4rem] flex relative">
      <div className="flex border-2 border-red-600/50 px-[2rem] lg:px-[4rem] py-[1.5rem] lg:pt-[3rem] rounded-2xl h-full bg-red-950/10 backdrop-blur-3xl">
        <div className="flex flex-col gap-[2rem] relative">
          <div className="border-1 rounded-full border-red-700 px-3 py-2 w-fit mx-auto flex gap-2 items-center bg-red-600/15 backdrop-blur-3xl">
            <Image
              className="w-6 lg:w-8"
              height={50}
              width={50}
              src={"/logo.png"}
              alt="Logo"
            />
            <p className="text-xs lg:text-lg text-red-100 font-poppins">
              Our Achievements...
            </p>
            <Loader className="text-red-600 loader-spin delay-700" />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden relative">
            <Image
              className="w-full h-full object-cover opacity-75"
              height={10000}
              width={10000}
              src={"/group.jpeg"}
              alt="Logo"
            />
            <div className="absolute bottom-0 z-10 left-0 right-0 bg-black/10 backdrop-blur-lg lg:backdrop-blur-2xl px-2 py-1 lg:py-[1rem]">
              <p className="text-white text-[0.5rem] lg:text-2xl text-center font-inter font-semibold">
                Our team won first prize in the department's Innovation Day
                competition during the 2023-2024 academic year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
