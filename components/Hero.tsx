import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-[15vh]">
      <div className="flex flex-col">
        <div className="absolute -z-10 top-0 opacity-30 h-dvh lg:w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col gap-[5rem] h-full">
          <div>
            <p className="text-center font-inter flex items-center text-[0.6rem] lg:text-sm border-2 border-red-600 text-white bg-red-500/20 backdrop-blur-3xl mx-auto w-fit px-4 py-2 rounded-4xl">
              ⭐ We are the future stars.{" "}
              <span className="font-semibold flex items-center">
                {" "}
                &nbsp;Discover our story &nbsp;
                <ArrowRight className="size-4" />{" "}
              </span>
            </p>
            <p className="text-6xl lg:text-7xl py-3 font-poppins text-center font-bold bg-gradient-to-r from-[#F90000] to-[#960087] bg-clip-text text-transparent">
              Innovate. Develop. Transform.
            </p>
            <p className="max-w-[40rem] mx-auto font-inter font-medium text-sm lg:text-lg text-center px-[0.5rem] text-gray-200">
              Join Morderndev, a college lab where students build cutting-edge
              projects and shape the future of technology.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-[3rem]">
            <button  className="delay-150 ease-linear transition-all  hover:scale-110">
              <span className="cursor-pointer bg-white text-xl font-poppins font-semibold px-[1rem] py-[0.5rem] rounded-full">
                Why choose us ?
              </span>
            </button>
            <button className="delay-150 ease-linear transition-all  hover:scale-110">
              <span className="cursor-pointer text-white border-2 border-red-950 font-inter text-xl bg-gradient-to-r from-[#EB0000] to-[#FF00B2] px-[1.5rem] py-[0.5rem] rounded-full font-semibold ">
                Let's Connect
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
