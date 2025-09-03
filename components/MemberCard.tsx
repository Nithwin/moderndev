// components/MemberCard.tsx

"use client";
import React from 'react';
import Image from 'next/image';

interface MemberCardProps {
  member: {
    id: number;
    name: string;
    specialization: string;
    img: string;
    role: string;
    description?: string; // Add description to the type
  };
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div
      key={member.id}
      className="flex flex-col mx-auto max-w-[18rem] lg:max-w-[17rem] relative group"
    >
      <div className="h-72 w-full rounded-t-2xl overflow-hidden">
        <Image
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          height={500}
          width={500}
          src={member.img || "/contact.png"}
          alt={member.name}
        />
        {/* The hover effect for the description */}
        <div
          className="absolute inset-0 bg-black/70  flex justify-center items-center text-white
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     p-4 text-center rounded-2xl"
        >
          {member.description || "No description available."}
        </div>
      </div>
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