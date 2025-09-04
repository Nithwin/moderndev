"use client";
import React, { useEffect, useRef } from 'react';
import { Box, Lightbulb, UsersRound, type LucideProps } from 'lucide-react';
// Assuming UnderLine is a local component. If it's in a specific folder, adjust the path.
// For example: import UnderLine from '@/components/SVG/UnderLine';
const UnderLine = ({ className }: { className: string }) => (
    <svg className={`w-full ${className}`} viewBox="0 0 100 5" preserveAspectRatio="none">
        <path d="M0,3 Q50,0 100,3" stroke="#F90000" fill="transparent" strokeWidth="2" />
    </svg>
);

import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

// Define the shape of the data objects in our array
interface VisionItem {
    logo: React.ComponentType<LucideProps>; // Type for Lucide icons
    title: string;
    description: string;
}

const Vision: React.FC = () => {
    // The `data` array is now strongly typed with our VisionItem interface
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

    // Ref for the section to track when it's in view
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Animation controls
    const mainControls = useAnimation();

    // Trigger animation when the component is in view
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);


    // Add the `Variants` type for type safety
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

    // Add the `Variants` type for type safety
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }
        },
    };


    return (
        <section ref={ref} className='pt-[3rem] relative'>
            <div id='vision' className='relative'>
                {/* --- Animated Title Section --- */}
                <motion.div
                    className='flex flex-col gap-2 justify-center relative mx-auto'
                    variants={itemVariants}
                    initial="hidden"
                    animate={mainControls}
                >
                    <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
                    <div className='w-fit mx-auto'>
                        <p className='text-center text-3xl lg:text-5xl text-white font-semibold font-poppins'>Our Vision</p>
                        <UnderLine className={''} />
                    </div>
                    <p className='text-center text-gray-300 text-sm'>Where idea become reality</p>
                </motion.div>

                {/* --- Animated Cards Container --- */}
                <motion.div
                    className='flex flex-col justify-center px-[2rem] py-[2rem] gap-10 lg:flex-row items-center'
                    variants={containerVariants}
                    initial="hidden"
                    animate={mainControls}
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            className='bg-gray-400/20 border-2 border-gray-100/30 rounded-2xl p-3 pt-5 lg:py-[2rem] flex flex-col gap-5 w-full max-w-[25rem]'
                            variants={itemVariants}
                        >
                            <item.logo className='bg-red-700 size-20 rounded-full p-3 mx-auto' />
                            <p className='text-xl lg:text-[25px] text-white text-center font-bold'>{item.title}</p>
                            <p className='text-sm lg:text-[18px] text-gray-200 text-center'>{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Vision;
