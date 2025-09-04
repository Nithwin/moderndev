// components/MemberCard.tsx

"use client";
import React, { FC } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

/**
 * Interface for a Member object.
 * @interface Member
 * @property {number} id - Unique identifier for the member.
 * @property {string} name - The name of the member.
 * @property {string} specialization - The member's area of specialization.
 * @property {string} img - URL or path to the member's profile image.
 * @property {string} [description] - Optional detailed description of the member.
 * @property {string} [github] - Optional GitHub profile URL.
 * @property {string} [linkedin] - Optional LinkedIn profile URL.
 * @property {string} [portfolio] - Optional personal portfolio URL.
 */
interface Member {
  id: number;
  name: string;
  specialization: string;
  img: string;
  description?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

interface MemberCardProps {
  /**
   * The member data to be displayed in the card.
   * @type {Member}
   */
  member: Member;
}

/**
 * MemberCard component displays a member's information including their image, name, specialization,
 * and links to their GitHub, LinkedIn, and portfolio, with a hover effect for description.
 * @param {MemberCardProps} props - The props for the MemberCard component.
 * @returns {JSX.Element} The rendered MemberCard component.
 */
const MemberCard: FC<MemberCardProps> = ({ member }) => {
  return (
    <div
      key={member.id}
      className="flex flex-col mx-auto max-w-[18rem] min-w-[18rem] lg:max-w-[17rem] relative group"
    >
      {/* Image container with rounded top corners */}
      /**
 * Image container for the member's profile picture.
 * Applies rounded top corners and overflow hidden for the image.
 */
      <div className="h-72 w-full rounded-t-2xl overflow-hidden relative">
        <Image
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          height={500}
          width={500}
          src={member.img || "/contact.png"}
          alt={member.name}
        />
        /**
 * Overlay that appears on hover, displaying the member's description and social links.
 */
        <div
          className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     p-3 text-center"
        >
          {/* Description text with smaller font and scroll if too long */}
          <p className="mb-3 text-xs sm:text-sm overflow-y-auto max-h-[70%] custom-scrollbar">
            /**
 * Displays the member's description, with a fallback if no description is provided.
 * Allows scrolling if the text is too long.
 */
            {member.description || "No description available."}
          </p>
          /**
 * Container for social media and portfolio links.
 */
          <div className="flex gap-4 mt-auto pb-2">
            {member.portfolio && (
              <a href={member.portfolio} target="_blank" rel="noopener noreferrer" aria-label={`Portfolio for ${member.name}`}>
                <FaGlobe className="text-white text-3xl hover:text-green-400 transition-colors duration-300" />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub profile for ${member.name}`}>
                <FaGithub className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile for ${member.name}`}>
                <FaLinkedin className="text-white text-3xl hover:text-blue-400 transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
      /**
 * Displays the member's name and specialization.
 * Styled with a gradient background and rounded bottom corners.
 */
      <div className="flex flex-col gap-2 bg-gradient-to-l from-[#9C0000] to-[#9B006D] text-white px-[0.7rem] py-[1rem] rounded-b-2xl">
        <p className="text-2xl font-bold text-center">
          {member.name}
        </p>
        <p className="text-center font-medium text-md">
          {member.specialization}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;