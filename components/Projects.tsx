import UnderLine from "./SVG/UnderLine";

const Projects = () => {
  return (
    <section className=" pt-[3rem] relative">
      <div className="relative">
        <div className="flex flex-col gap-2 justify-center relative mx-auto">
          <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
          <div className="w-fit mx-auto">
            <p className="text-center text-3xl lg:text-5xl text-white font-semibold font-poppins">
              Featured Projects
            </p>
            <UnderLine className={""} />
          </div>
          <p className="text-center text-gray-300 text-sm">
            See what we made
          </p>
        </div>
        <div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
