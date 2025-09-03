import Image from "next/image";
import UnderLine from "./SVG/UnderLine";
import { ChevronsDown } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "RizzBerry",
    description: "A Website where you can explore and generate witty lines to make convo fun",
    imageSrc: "/pro.png",
    liveDemoLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "RizzBerry",
    description: "A Website where you can explore and generate witty lines to make convo fun",
    imageSrc: "/pro.png",
    liveDemoLink: "",
    githubLink: "",
  },
];


const Projects = () => {
  return (
    <section  className="pt-[3rem] relative">
      <div id="projects" className="relative flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-2 justify-center relative mx-auto">
          <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
          <div className="w-fit mx-auto">
            <p className="text-center text-3xl lg:text-5xl text-white font-semibold font-poppins">
              Featured Projects
            </p>
            <UnderLine className={""} />
          </div>
          <p className="text-center text-gray-300 text-sm lg:text-lg">See what we made</p>
        </div>
        <div className="px-[2rem] lg:px-[4rem] lg:py-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col">
              <div className="overflow-hidden rounded-t-4xl">
                <Image
                  className="w-full h-full object-cover"
                  height={1000}
                  width={1000}
                  src={project.imageSrc}
                  alt={project.title}
                />
              </div>
              <div className="bg-gray-500/20 backdrop-blur-2xl py-[0.5rem] px-4 flex flex-col gap-2">
                <h3 className="text-2xl lg:text-3xl text-white font-semibold font-poppins">
                  {project.title}
                </h3>
                <p className="text-gray-200 font-inter text-sm lg:text-lg">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-content-between bg-gray-500/20 backdrop-blur-2xl rounded-b-4xl">
                <a
                  href={project.liveDemoLink}
                  className="bg-gradient-to-r from-[#EB0000] to-[#FF00B2] w-full py-3 px-2 text-2xl font-semibold text-center rounded-bl-4xl rounded-tr-4xl text-black"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  className="relative w-full py-3 px-2 text-2xl font-semibold text-center rounded-br-4xl rounded-tl-4xl bg-black text-white"
                >
                  <span className="bg-gradient-to-r from-[#EB0000] to-[#FF00B2] bg-clip-text text-transparent">
                    Github
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
            <button className="flex font-poppins items-center bg-gradient-to-r w-fit from-[#EB0000] to-[#FF00B2] py-2 px-6 text-sm font-semibold text-center rounded-full text-white">
               View More <ChevronsDown className="ms-2 h-5" /> </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
