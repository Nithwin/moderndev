"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UnderLine from "./SVG/UnderLine";
import MemberCard from "./MemberCard";
import { supabase } from "@/lib/supabaseClient";

/**
 * Interface for a Member object.
 * @interface Member
 * @property {number} id - Unique identifier for the member.
 * @property {string} name - The name of the member.
 * @property {string} [email] - Optional email address of the member.
 * @property {string} role - The role of the member (e.g., "adviser", "faculty", "student").
 * @property {string} img - URL or path to the member's profile image.
 * @property {string} specialization - The member's area of specialization.
 * @property {string} [description] - Optional detailed description of the member.
 * @property {string} [github] - Optional GitHub profile URL.
 * @property {string} [linkedin] - Optional LinkedIn profile URL.
 */
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

/**
 * Members component fetches and displays different categories of members (advisers, faculty, students)
 * from Supabase. It uses `MemberCard` to render individual member details and includes
 * animations for sections and member cards.
 * @returns {JSX.Element} The rendered Members component.
 */
const Members = () => {
  const [studentMembers, setStudentMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!supabase) {
          // Supabase client isn't available (likely missing env vars during prerender)
          throw new Error(
            "Supabase client is not configured. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set."
          );
        }

        const { data, error } = await supabase.from("members").select("*");

        if (error) {
          throw new Error(`Failed to fetch: ${error.message}`);
        }

        setStudentMembers(data || []);
      } catch (err) {
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
  const faculties = studentMembers.filter((i) => i.role === "faculty").sort((a, b) => a.id - b.id);
  const students = studentMembers.filter((i) => i.role === "student").sort((a, b) => a.id - b.id);
 
  return (
    <section className="pt-[15vh] pb-[10rem]">
      <div className="flex flex-col gap-[4rem]">
        {/*
         * Section for "Overall Incharge" members.
         * Displays a title and dynamically renders MemberCard components for advisers.
         */}
        <div className="flex flex-col justify-center w-full gap-[2rem]">
          <motion.div
            className="flex flex-col gap-2 justify-center relative mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-2 justify-center relative mx-auto">
              <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
              <div className="w-fit mx-auto">
                <p className="text-center text-3xl lg:text-4xl text-white font-semibold font-poppins">
                  Overall Incharge
                </p>
                <UnderLine className={""} />
              </div>
            </div>
          </motion.div>
          {advisers.sort((a, b) => a.id - b.id).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <MemberCard member={item} />
            </motion.div>
          ))}
        </div>

        {/*
         * Section for "Faculty Incharge" members.
         * Displays a title and dynamically renders MemberCard components for faculty.
         */}
        <div className="flex flex-col justify-center w-full gap-[2rem]">
          <motion.div
            className="flex flex-col gap-2 justify-center relative mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
            <div className="w-fit mx-auto">
              <p className="text-center text-3xl lg:text-4xl text-white font-semibold font-poppins">
                Faculty Incharge
              </p>
              <UnderLine className={""} />
            </div>
          </motion.div>
          <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[5rem] mx-auto">
            {faculties.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <MemberCard member={item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/*
         * Section for "Student Members".
         * Displays a title and dynamically renders MemberCard components for students.
         */}
        <div className="w-full justify-center lg:px-[3rem]">
          <motion.div
            className="flex flex-col gap-2 justify-center relative mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
            <div className="w-fit mx-auto">
              <p className="text-center text-3xl lg:text-4xl text-white font-semibold font-poppins">
                Student Members
              </p>
              <UnderLine className={""} />
            </div>
          </motion.div>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-[5rem] w-full py-[4rem]">
            {students.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.10 }}
              >
                <MemberCard member={item} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Members;