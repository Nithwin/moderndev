// components/ProjectCard.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { ChevronsDown } from 'lucide-react';

interface Project {
  id: number;
  created_at: string;
  img: string;
  title: string;
  description: string;
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div key={project.id} className="flex flex-col">
      <div className="overflow-hidden rounded-t-4xl">
        <Image
          className="w-full h-full object-cover"
          height={1000}
          width={1000}
          src={project.img || "/placeholder-project.png"}
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
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#EB0000] to-[#FF00B2] w-full py-3 px-2 text-2xl font-semibold text-center rounded-bl-4xl rounded-tr-4xl text-black"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full py-3 px-2 text-2xl font-semibold text-center rounded-br-4xl rounded-tl-4xl bg-black text-white"
          >
            <span className="bg-gradient-to-r from-[#EB0000] to-[#FF00B2] bg-clip-text text-transparent">
              Github
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;