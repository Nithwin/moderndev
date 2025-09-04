"use client";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion"; // Import motion and the Variants type
import React from "react";

// Define the component with its TypeScript type: React.FC (Functional Component)
const Hero: React.FC = () => {
  // Add TypeScript type 'Variants' to the animation variants object
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of children by 0.3s
      },
    },
  };

  // Add TypeScript type 'Variants' to the animation variants object
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
    visible: {
      opacity: 1,
      y: 0, // Animate to full opacity and original position
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    // Added pb-[15vh] (padding-bottom) to create extra vertical space for the next component
    <section className="relative pt-[15vh] ">
      <div id="hero" className="flex flex-col">
        <div className="absolute -z-10 top-0 opacity-30 h-dvh lg:w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* This motion.div orchestrates the animation for its children */}
        <motion.div
          className="flex flex-col gap-[3rem] h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Each child animates in sequence */}
          <motion.div variants={itemVariants}>
            <p className="text-center font-inter flex items-center text-[0.6rem] lg:text-sm border-2 border-red-600 text-white bg-red-500/20 backdrop-blur-3xl mx-auto w-fit px-4 py-2 rounded-4xl">
              ⭐ We are the future stars.{" "}
              <span className="font-semibold flex items-center">
                {" "}
                &nbsp;Discover our story &nbsp;
                <ArrowRight className="size-4" />{" "}
              </span>
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-6xl lg:text-7xl py-3 font-poppins text-center font-bold bg-gradient-to-r from-[#F90000] to-[#960087] bg-clip-text text-transparent"
          >
            Innovate. Develop. Transform.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="max-w-[40rem] mx-auto font-inter font-medium text-sm lg:text-lg text-center px-[0.5rem] text-gray-200"
          >
            Join Morderndev, a college lab where students build cutting-edge
            projects and shape the future of technology.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row justify-center gap-[3rem]"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="delay-150 ease-linear transition-all hover:scale-110" // Original classes preserved but motion will override hover
            >
              <span className="cursor-pointer bg-white text-xl font-poppins font-semibold px-[1rem] py-[0.5rem] rounded-full">
                Why choose us ?
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="delay-150 ease-linear transition-all hover:scale-110" // Original classes preserved but motion will override hover
            >
              <span className="cursor-pointer text-white border-2 border-red-950 font-inter text-xl bg-gradient-to-r from-[#EB0000] to-[#FF00B2] px-[1.5rem] py-[0.5rem] rounded-full font-semibold ">
                Let's Connect
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

