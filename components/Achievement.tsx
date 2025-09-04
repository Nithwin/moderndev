"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loader } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

/**
 * Defines the structure for an Achievement object.
 * @interface Achievement
 * @property {number} id - Unique identifier for the achievement.
 * @property {string} created_at - Timestamp of when the achievement record was created.
 * @property {string} title - The title of the achievement.
 * @property {string} img - URL or path to the image representing the achievement.
 * @property {string} description - A detailed description of the achievement.
 */
interface Achievement {
  id: number;
  created_at: string;
  title: string;
  img: string;
  description: string;
}

const Achievement: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Fetches achievement data from Supabase.
   * Sets loading state, handles errors, and updates achievements state.
   */
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("achievements").select("*");
        if (error) {
          throw error;
        }
        setAchievements(data as Achievement[]);
      } catch (err) {
        /**
         * Handles errors during data fetching.
         * Checks if the error is an instance of Error to safely access its message.
         */
        if (err instanceof Error) {
          console.error("Error fetching achievements:", err.message);
          setError(`Failed to load achievements: ${err.message}`);
        } else {
          console.error("An unknown error occurred:", err);
          setError("An unknown error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // The empty dependency array is correct; this runs once on mount.

  /**
   * Manages the auto-scrolling behavior of the achievement carousel.
   */
  useEffect(() => {
    if (achievements.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [achievements]);

  if (loading) {
    return (
      <section className="pt-[4rem] h-full px-[1.5rem] lg:p-[4rem] flex relative justify-center items-center">
        <Loader className="text-red-600 animate-spin" size={48} />
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-[4rem] h-full px-[1.5rem] lg:p-[4rem] flex relative justify-center items-center text-white">
        <div>Error: {error}</div>
      </section>
    );
  }

  if (achievements.length === 0) {
    return (
      <section className="pt-[4rem] h-full px-[1.5rem] lg:p-[4rem] flex relative justify-center items-center text-white">
        <div>No achievements found.</div>
      </section>
    );
  }

  const currentAchievement = achievements[currentIndex];

  return (
    <section className="pt-[4rem] h-full px-[1.5rem] lg:p-[4rem] flex relative">
      <div
        id="achievement"
        className="flex border-2 border-red-600/50 px-[2rem] lg:px-[4rem] py-[1.5rem] lg:pt-[3rem] rounded-2xl h-full bg-red-950/10 backdrop-blur-3xl w-full"
      >
        <div className="flex flex-col gap-[2rem] relative w-full">
          <div className="border-1 rounded-full border-red-700 px-3 py-2 w-fit mx-auto flex gap-2 items-center bg-red-600/15 backdrop-blur-3xl">
            <Image
              className="w-6 lg:w-8"
              height={50}
              width={50}
              src={"/logo.png"}
              alt="Logo"
            />
            <p className="text-xs lg:text-lg text-red-100 font-poppins">
              Our Achievements...
            </p>
            <Loader className="text-red-600 animate-spin" />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden relative">
            {/* Key to ensure React re-renders the image when the achievement changes */}
            {/* Fallback image if img is not available */}
            <Image
              className="w-full h-full object-cover opacity-75"
              height={10000}
              width={10000}
              src={currentAchievement.img || "/placeholder.jpg"}
              alt={currentAchievement.title}
              key={currentAchievement.id}
            />
            <div className="absolute bottom-0 z-10 left-0 right-0 bg-black/10 backdrop-blur-lg lg:backdrop-blur-2xl px-2 py-1 lg:py-[1rem]">
              <p className="text-white text-[0.5rem] lg:text-2xl text-center font-inter font-semibold">
                {currentAchievement.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;

