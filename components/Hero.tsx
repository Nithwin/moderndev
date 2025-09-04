"use client";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import React from "react";

/**
 * Hero component displays the main introductory section of the website.
 * It features a video background, animated text, and call-to-action buttons.
 */
const Hero: React.FC = () => {
  /**
   * Variants for the main container animation.
   * @type {Variants}
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        /**
         * Staggers the animation of child components.
         * @property {number} staggerChildren - Delay between the start of child animations in seconds.
         */
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for each individual animated item.
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
    <section className="relative pt-[15vh] ">
      <div id="hero" className="flex flex-col">
        {/* Video background for the hero section.
          `autoPlay`, `muted`, `loop`, and `playsInline` ensure the video plays automatically without sound.
          `object-cover` ensures the video covers the entire container.
        */}
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

        {/* Animated container for the hero content.
          Uses `framer-motion` for `hidden` and `visible` states, orchestrating child animations.
        */}
        <motion.div
          className="flex flex-col gap-[3rem] h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated paragraph for the introductory text. */}
          <motion.div variants={itemVariants}>
            <p className="text-center font-inter flex items-center text-[0.6rem] lg:text-sm border-2 border-red-600 text-white bg-red-500/20 backdrop-blur-3xl mx-auto w-fit px-4 py-2 rounded-full">
              ⭐ We are the future stars.{" "}
              <span className="font-semibold flex items-center">
                {" "}
                &nbsp;Discover our story &nbsp;
                <ArrowRight className="size-4" />{" "}
              </span>
            </p>
          </motion.div>

          {/* Animated main title with a gradient text effect. */}
          <motion.p
            variants={itemVariants}
            className="text-6xl lg:text-7xl py-3 font-poppins text-center font-bold bg-gradient-to-r from-[#F90000] to-[#960087] bg-clip-text text-transparent"
          >
            Innovate. Develop. Transform.
          </motion.p>
          
          {/* Animated descriptive text providing a brief introduction. */}
          <motion.p
            variants={itemVariants}
            className="max-w-[40rem] mx-auto font-inter font-medium text-sm lg:text-lg text-center px-[0.5rem] text-gray-200"
          >
            Join Morderndev, a college lab where students build cutting-edge
            projects and shape the future of technology.
          </motion.p>
          
          {/* Container for the call-to-action buttons. */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row justify-center gap-[3rem]"
          >
            {/* Button for "Why choose us?" with hover and tap animations. */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="cursor-pointer bg-white text-xl font-poppins font-semibold px-[1rem] py-[0.5rem] rounded-full">
                Why choose us ?
              </span>
            </motion.button>

            {/* Button for "Let's Connect" with hover/tap animations and a gradient background. */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="cursor-pointer text-white border-2 border-red-950 font-inter text-xl bg-gradient-to-r from-[#EB0000] to-[#FF00B2] px-[1.5rem] py-[0.5rem] rounded-full font-semibold ">
                Let&apos;s Connect
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

