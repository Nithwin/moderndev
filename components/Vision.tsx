"use client";
import React, { useEffect, useRef } from 'react';
import { Box, Lightbulb, UsersRound } from 'lucide-react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import UnderLine from './SVG/UnderLine'; // Importing the UnderLine component for styling

/**
 * Interface for a single vision item.
 * @interface VisionItem
 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} logo - The Lucide icon component for the vision item.
 * @property {string} title - The title of the vision item.
 * @property {string} description - A brief description of the vision item.
 */

/**
 * Vision component displays the core values and objectives of the organization.
 */
interface VisionItem {
    logo: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for Lucide icons
    title: string;
    description: string;
}

const Vision: React.FC = () => {
    /**
 * Array of vision items, each containing a logo, title, and description.
 */
    const data: VisionItem[] = [
        {
            logo: Box,
            title: "Rapid Prototyping",
            description: "We accelerate the development process, turning concepts into functional prototypes swiftly and efficiently"
        },
        {
            logo: Lightbulb,
            title: "Creative Solutions",
            description: "We foster innovation and design thinking to craft unique and impactful digital experiences."
        },
        {
            logo: UsersRound,
            title: "Collaborative Development",
            description: "We believe in teamwork and open communication, working closely with clients to achieve shared goals."
        },
    ];

    /**
 * Ref for the section to track when it enters the viewport.
 */
    const ref = useRef<HTMLElement>(null);
    /**
 * Hook to determine if the component is currently in view.
 */
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    /**
 * Animation controls for triggering Framer Motion animations.
 */
    const mainControls = useAnimation();

    // Trigger animation when the component is in view
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);


    /**
 * Variants for the container animation, orchestrating child animations.
 */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    /**
 * Variants for individual item animations within the container.
 */
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }
        },
    };


    return (
        <section ref={ref} className='pt-[3rem] relative'>
            {/* Main container for the vision section */}
            <div id='vision' className='relative'>
                {/* Animated Title Section */}
                <motion.div
                    className='flex flex-col gap-2 justify-center relative mx-auto'
                    variants={itemVariants}
                    initial="hidden"
                    animate={mainControls}
                >
                    {/* Decorative blurred circle */}
                    <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
                    <div className='w-fit mx-auto'>
                        {/* Title text */}
                        <p className='text-center text-3xl lg:text-5xl text-white font-semibold font-poppins'>Our Vision</p>
                        {/* Underline for the title */}
                        <UnderLine className={''} />
                    </div>
                    {/* Subtitle text */}
                    <p className='text-center text-gray-300 text-sm'>Where idea become reality</p>
                </motion.div>

                {/* Animated Cards Container */}
                <motion.div
                    className='flex flex-col justify-center px-[2rem] py-[2rem] gap-10 lg:flex-row items-center'
                    variants={containerVariants}
                    initial="hidden"
                    animate={mainControls}
                >
                    {data.map((item, index) => (
                        /**
 * Renders a motion.div for each vision item, applying animation variants.
 */
                        <motion.div
                            key={index}
                            className='bg-gray-400/20 border-2 border-gray-100/30 rounded-2xl p-3 pt-5 lg:py-[2rem] flex flex-col gap-5 w-full max-w-[25rem]'
                            variants={itemVariants}
                        >
                            {/* Icon for the vision item */}
                            <item.logo className='bg-red-700 size-20 rounded-full p-3 mx-auto' />
                            {/* Title of the vision item */}
                            <p className='text-xl lg:text-[25px] text-white text-center font-bold'>{item.title}</p>
                            {/* Description of the vision item */}
                            <p className='text-sm lg:text-[18px] text-gray-200 text-center'>{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Vision;
