// components/Projects.tsx

"use client";
import React, { useEffect, useState } from "react";
import UnderLine from "./SVG/UnderLine";
import { supabase } from "@/lib/supabaseClient";
import ProjectCard from "./ProjectCard"; // Import the new component
import { ChevronsDown } from "lucide-react";

interface Project {
  id: number;
  created_at: string;
  img: string;
  title: string;
  description: string;
  github?: string;
  live?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("projects").select("*");

        if (error) {
          throw new Error(`Failed to fetch projects: ${error.message}`);
        }
        console.log(data);
        
        setProjects(data as Project[]);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="pt-[3rem] relative">
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {/* This button is for a different purpose, keeping it as is */}
          <button className="flex font-poppins items-center bg-gradient-to-r w-fit from-[#EB0000] to-[#FF00B2] py-2 px-6 text-sm font-semibold text-center rounded-full text-white">
            View More <ChevronsDown className="ms-2 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;