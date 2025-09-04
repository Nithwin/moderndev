// components/Projects.tsx

"use client";
import React, { useEffect, useState } from "react";
import UnderLine from "./SVG/UnderLine";
import { supabase } from "@/lib/supabaseClient";
import ProjectCard from "./ProjectCard"; // Import the new component
import { ChevronsDown } from "lucide-react";

/**
 * Interface for a Project object.
 * @interface Project
 * @property {number} id - Unique identifier for the project.
 * @property {string} created_at - Timestamp of when the project record was created.
 * @property {string} img - URL or path to the image representing the project.
 * @property {string} title - The title of the project.
 * @property {string} description - A detailed description of the project.
 * @property {string} [github] - Optional GitHub repository URL for the project.
 * @property {string} [live] - Optional live demo URL for the project.
 */
interface Project {
  id: number;
  created_at: string;
  img: string;
  title: string;
  description: string;
  github?: string;
  live?: string;
}

/**
 * Projects component fetches and displays a list of projects from Supabase.
 * It uses `ProjectCard` to render individual project details and includes
 * a "View More" button.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects = () => {
  /**
   * State to store the fetched projects.
   * @type {Project[]}
   */
  const [projects, setProjects] = useState<Project[]>([]);
  /**
   * State to manage the loading status of data fetching.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(true);
  /**
   * State to store any error messages during data fetching.
   * @type {string | null}
   */
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches project data from Supabase on component mount.
   * Sets loading state, handles errors, and updates projects state.
   */
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("projects").select("*");

        if (error) {
          throw new Error(`Failed to fetch projects: ${error.message}`);
        }

        setProjects(data as Project[]);
      } catch (err) {
        /**
         * Handles errors during data fetching.
         * Checks if the error is an instance of Error to safely access its message.
         */
        if (err instanceof Error) {
            console.error("Error fetching projects:", err.message);
            setError(`Failed to load projects: ${err.message}`);
        } else {
            console.error("An unknown error occurred:", err);
            setError("An unknown error occurred. Please try again later.");
        }
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
      {/* Main container for the projects section */}
      <div id="projects" className="relative flex flex-col gap-[2rem]">
        {/* Title and subtitle section */}
        <div className="flex flex-col gap-2 justify-center relative mx-auto">
          {/* Decorative blurred circle */}
          <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
          {/* Title text with underline */}
          <div className="w-fit mx-auto">
            <p className="text-center text-3xl lg:text-5xl text-white font-semibold font-poppins">
              Featured Projects
            </p>
            <UnderLine className={""} />
          </div>
          {/* Subtitle text */}
          <p className="text-center text-gray-300 text-sm lg:text-lg">See what we made</p>
        </div>
        {/* Grid container for project cards */}
        <div className="px-[2rem] lg:px-[4rem] lg:py-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {projects.map((project) => (
            /**
             * Renders a `ProjectCard` component for each project.
             * @param {Project} project - The project data.
             * @returns {JSX.Element} The `ProjectCard` component.
             */
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* "View More" button section */}
        <div className="flex justify-center gap-2">
          /**
           * Button to view more projects.
           * Currently a placeholder, but can be linked to a dedicated projects page or load more functionality.
           */
          <button className="flex font-poppins items-center bg-gradient-to-r w-fit from-[#EB0000] to-[#FF00B2] py-2 px-6 text-sm font-semibold text-center rounded-full text-white">
            View More
            {/* Icon for "View More" */}
            <ChevronsDown className="ms-2 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;