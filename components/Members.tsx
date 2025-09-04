"use client";
import React, { useEffect, useState } from "react";
import UnderLine from "./SVG/UnderLine";
import Image from "next/image";
import MemberCard from "./MemberCard";
import { supabase } from "@/lib/supabaseClient";

interface Member {
  id: number;
  name: string;
  email?: string;
  role: string;
  img: string;
  specialization: string;
  description?: string;
  github?: string;
  linkedin?: string;
}

const Members = () => {
  const [studentMembers, setStudentMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("members").select("*");

        if (error) {
          throw new Error(`Failed to fetch: ${error.message}`);
        }
        console.log(data);
        
        setStudentMembers(data);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError("Failed to load members. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const advisers = studentMembers.filter((i) => i.role === "adviser");
  const faculties = studentMembers.filter((i) => i.role === "faculty");
  const students = studentMembers.filter((i) => i.role === "student");

  return (
    <section className="pt-[15vh] pb-[10rem]">
      <div className="flex flex-col gap-[4rem]">
        {/* Overall Incharge Section */}
        <div className="flex flex-col justify-center w-full gap-[2rem]">
          <div className="flex flex-col gap-2 justify-center relative mx-auto">
            <div className="flex flex-col gap-2 justify-center relative mx-auto">
              <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
              <div className="w-fit mx-auto">
                <p className="text-center text-3xl lg:text-4xl text-white font-semibold font-poppins">
                  Overall Incharge
                </p>
                <UnderLine className={""} />
              </div>
            </div>
          </div>
          {advisers.map((item) => (
            <MemberCard key={item.id} member={item} />
          ))}
        </div>

        {/* Faculty Incharge Section */}
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
            {faculties.map((item) => (
              <MemberCard key={item.id} member={item} />
            ))}
          </div>
        </div>

        {/* Student Members Section */}
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
            {students.map((item) => (
              <li key={item.id}>
                <MemberCard member={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Members;