// Import necessary components and hooks for the Home page layout
"use client";
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Achievement from "@/components/Achievement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechSkills from "@/components/TechSkills";
import Vision from "@/components/Vision";
import PreLoader from '@/components/PreLoader'; // Import the new Preloader component

// Home component responsible for rendering the main landing page.
const Home = () => {
  // Use a boolean type for the loading state
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a loading delay.
    // In a real app, you would set loading to false after your data has finished fetching.
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 5000); // Preloader will be visible for 5 seconds

    // Disable scrolling when the preloader is active to prevent content flash
    document.body.style.overflow = 'hidden';

    // Cleanup function to clear the timer
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {/* AnimatePresence enables the preloader's exit animation. */}
      <AnimatePresence>
        {loading && <PreLoader />}
      </AnimatePresence>
      
      {/* The main app content is wrapped in a container */}
      <div className="bg-[#1E1E1E] z-0 min-h-dvh relative pb-[4rem]">
        <Header />
        <Hero />
        <Achievement />
        <Vision />
        <Projects />
        <TechSkills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;