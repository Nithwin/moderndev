import React from "react";
import UnderLine from "./SVG/UnderLine";
import Image from "next/image";

const Members = () => {
  let studentMembers = [
    {
      img: "/contact.png",
      name: "Nithwin V M",
      role: "Full Stack & C++ Developer",
    },
    {
      img: "/contact.png",
      name: "Dharun Raj R",
      role: "UI/UX Designer",
    },
    {
      img: "/contact.png",
      name: "Mahendhiran S",
      role: "UI/UX Designer",
    },
    {
      img: "/contact.png",
      name: "Mahendhiran S",
      role: "UI/UX Designer",
    },
  ];
  return (
    <section className="pt-[15vh] pb-[10rem]">
      <div className="flex flex-col gap-[4rem]">
        <div className="flex flex-col justify-center w-full gap-[2rem]">
          <div className="flex flex-col gap-2 justify-center relative mx-auto">
            <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
            <div className="w-fit mx-auto">
              <p className="text-center text-3xl lg:text-4xl text-white font-semibold font-poppins">
                Overall Incharge
              </p>
              <UnderLine className={""} />
            </div>
          </div>
          <div className="flex flex-col mx-auto max-w-[18rem]">
            <div className="h-72 w-full rounded-t-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover opacity-75"
                height={500}
                width={500}
                src={"/hod.png"}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col gap-2 bg-gradient-to-l from-[#9C0000] to-[#9B006D] text-white px-[0.7rem] py-[1rem] rounded-b-2xl">
              <p className="text-2xl font-bold text-center">
                Dr.RajaSekaran P.hd
              </p>
              <p className="text-center font-medium text-md">
                Head of Computer Science Engineering{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-[2rem]">
          <div className="flex flex-col gap-2 justify-center relative mx-auto">
            <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
            <div className="w-fit mx-auto">
              <p className="text-center text-3xl lg:text-4xl text-white font-semibold font-poppins">
                Faculty Incharge
              </p>
              <UnderLine className={""} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[5rem] mx-auto">
            <div className="flex flex-col mx-auto lg:m-0 max-w-[18rem] ">
              <div className="h-72 w-full rounded-t-2xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover opacity-75"
                  height={500}
                  width={500}
                  src={"/f1.png"}
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col gap-2 bg-gradient-to-l from-[#9C0000] to-[#9B006D] text-white px-[0.7rem] py-[1rem] rounded-b-2xl">
                <p className="text-2xl font-bold text-center">
                  Ms.D.Vinoparkavi, M.E
                </p>
                <p className="text-center font-medium text-md">
                  Department of computer science Engineering
                </p>
              </div>
            </div>
            <div className="flex flex-col mx-auto lg:m-0 max-w-[18rem]">
              <div className="h-72 w-full rounded-t-2xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover opacity-75"
                  height={500}
                  width={500}
                  src={"/f2.png"}
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col gap-2 bg-gradient-to-l from-[#9C0000] to-[#9B006D] text-white px-[0.7rem] py-[1rem] rounded-b-2xl">
                <p className="text-2xl font-bold text-center">
                  Mr.R.Manikandan, M.Tech
                </p>
                <p className="text-center font-medium text-md">
                  Department of computer science Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center lg:px-[3rem]">
          <div className="flex flex-col gap-2 justify-center relative mx-auto">
            <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
            <div className="w-fit mx-auto">
              <p className="text-center text-3xl lg:text-4xl text-white font-semibold font-poppins">
                Student Members
              </p>
              <UnderLine className={""} />
            </div>
          </div>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-[5rem] w-full py-[4rem]">
            {studentMembers.map((item, index) => (
              <li key={index}>
                <div className="flex flex-col mx-auto max-w-[18rem] lg:max-w-[17rem] lg:m-0">
                  <div className="h-72 w-full rounded-t-2xl overflow-hidden">
                    <Image
                      className="w-full h-full object-cover opacity-75"
                      height={500}
                      width={500}
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2 bg-gradient-to-l from-[#9C0000] to-[#9B006D] text-white px-[0.7rem] py-[1rem] rounded-b-2xl">
                    <p className="text-2xl font-bold text-center">
                      {item.name}
                    </p>
                    <p className="text-center font-medium text-md">
                      {item.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Members;
