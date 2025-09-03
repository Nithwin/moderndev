"use client";
import React, { useState, useEffect } from 'react';
import { 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiFramer,
  SiBootstrap,
  SiSass,
  SiVite,
  SiWebpack,
  // --- NEW ICONS ADDED HERE ---
  SiCplusplus,
  SiQt,
  SiSpring,
  SiMui,
  SiChakraui,
  SiJest,
  SiGraphql,
  SiDocker
} from 'react-icons/si';
import UnderLine from './SVG/UnderLine';

const TechSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    // --- EXISTING SKILLS ---
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500", shadowColor: "shadow-orange-500/50", borderColor: "border-orange-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500", shadowColor: "shadow-blue-500/50", borderColor: "border-blue-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400", shadowColor: "shadow-yellow-400/50", borderColor: "border-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", shadowColor: "shadow-blue-600/50", borderColor: "border-blue-600" },
    { icon: SiReact, name: "React", color: "text-cyan-400", shadowColor: "shadow-cyan-400/50", borderColor: "border-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white", shadowColor: "shadow-white/50", borderColor: "border-white" },
    { icon: SiRedux, name: "Redux", color: "text-purple-500", shadowColor: "shadow-purple-500/50", borderColor: "border-purple-500" },
    { icon: SiFramer, name: "Framer Motion", color: "text-pink-500", shadowColor: "shadow-pink-500/50", borderColor: "border-pink-500" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400", shadowColor: "shadow-teal-400/50", borderColor: "border-teal-400" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600", shadowColor: "shadow-purple-600/50", borderColor: "border-purple-600" },
    { icon: SiSass, name: "Sass", color: "text-pink-400", shadowColor: "shadow-pink-400/50", borderColor: "border-pink-400" },
    { icon: SiFigma, name: "Figma", color: "text-red-500", shadowColor: "shadow-red-500/50", borderColor: "border-red-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500", shadowColor: "shadow-green-500/50", borderColor: "border-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-300", shadowColor: "shadow-gray-300/50", borderColor: "border-gray-300" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400", shadowColor: "shadow-green-400/50", borderColor: "border-green-400" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400", shadowColor: "shadow-blue-400/50", borderColor: "border-blue-400" },
    { icon: SiFirebase, name: "Firebase", color: "text-yellow-500", shadowColor: "shadow-yellow-500/50", borderColor: "border-yellow-500" },
    { icon: SiVite, name: "Vite", color: "text-yellow-300", shadowColor: "shadow-yellow-300/50", borderColor: "border-yellow-300" },
    { icon: SiWebpack, name: "Webpack", color: "text-blue-300", shadowColor: "shadow-blue-300/50", borderColor: "border-blue-300" },
    { icon: SiGit, name: "Git", color: "text-red-400", shadowColor: "shadow-red-400/50", borderColor: "border-red-400" },
    
    // --- NEW SKILLS ADDED HERE ---
    { icon: SiMui, name: "Material UI", color: "text-blue-500", shadowColor: "shadow-blue-500/50", borderColor: "border-blue-500" },
    { icon: SiChakraui, name: "Chakra UI", color: "text-teal-500", shadowColor: "shadow-teal-500/50", borderColor: "border-teal-500" },
    { icon: SiSpring, name: "Spring", color: "text-green-600", shadowColor: "shadow-green-600/50", borderColor: "border-green-600" },
    { icon: SiCplusplus, name: "C++", color: "text-blue-500", shadowColor: "shadow-blue-500/50", borderColor: "border-blue-500" },
  ];

  return (
    <section id='skills' className="pt-16 relative overflow-hidden min-h-screen z-0">
      <div className="flex flex-col relative z-10 gap-[3rem]">
        {/* Header Section */}
        <div className="flex flex-col gap-2 justify-center relative mx-auto">
          <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
          <div className="w-fit mx-auto">
            <p className="text-center text-3xl lg:text-5xl text-white font-semibold font-poppins">
              Tech & Skills 
            </p>
            <UnderLine className={""} />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-7xl">
            {skills.map((skill:any, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group relative bg-black/40 backdrop-blur-sm border-2 ${skill.borderColor} rounded-2xl h-14 w-14 md:h-24 md:w-24 flex flex-col justify-center items-center cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:bg-black/60 ${skill.shadowColor} hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: `float 3s ease-in-out infinite ${index * 0.2}s`
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl ${skill.shadowColor} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <IconComponent className={`${skill.color} text-3xl md:text-5xl z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`} />
                  
                  {/* Tooltip */}
                  <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${hoveredSkill === skill.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} pointer-events-none shadow-lg border border-gray-700`}>
                    {skill.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-0 rounded-2xl animate-ping ${skill.borderColor} opacity-20`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Animation Styles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TechSkills;