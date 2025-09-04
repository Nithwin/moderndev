import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12 + 3;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 25 && currentPhase === 0) setCurrentPhase(1);
    if (progress > 50 && currentPhase === 1) setCurrentPhase(2);
    if (progress > 75 && currentPhase === 2) setCurrentPhase(3);
    if (progress > 95 && currentPhase === 3) setCurrentPhase(4);
  }, [progress, currentPhase]);

  // Get window height on mount and resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lightning effect trigger
  useEffect(() => {
    const lightningInterval = setInterval(() => {
      setShowLightning(true);
      setTimeout(() => setShowLightning(false), 200);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(lightningInterval);
  }, []);
  // Client-only particle data (generated on mount to avoid SSR hydration mismatches)
  type FireParticle = {
    width: number;
    height: number;
    background: string;
    left: string;
    xShift: number;
    duration: number;
    delay: number;
  };

  type EmberParticle = {
    left: string;
    top: string;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    duration: number;
    delay: number;
  };

  const [fireParticlesData, setFireParticlesData] = useState<FireParticle[]>([]);
  const [emberParticlesData, setEmberParticlesData] = useState<EmberParticle[]>([]);

  useEffect(() => {
    // generate particle data only on client
    const fp = Array.from({ length: 60 }, () => {
      const width = Math.random() * 8 + 4;
      const height = Math.random() * 8 + 4;
      const colorRoll = Math.random();
      const background =
        colorRoll > 0.66
          ? 'radial-gradient(circle, rgba(255, 69, 0, 0.9), transparent)'
          : colorRoll > 0.33
          ? 'radial-gradient(circle, rgba(255, 140, 0, 0.8), transparent)'
          : 'radial-gradient(circle, rgba(255, 215, 0, 0.7), transparent)';
      return {
        width,
        height,
        background,
        left: `${Math.random() * 100}%`,
        xShift: (Math.random() - 0.5) * 200,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
      };
    });

    const ep = Array.from({ length: 40 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x1: Math.random() * 100 - 50,
      x2: Math.random() * 100 - 50,
      y1: Math.random() * 100 - 50,
      y2: Math.random() * 100 - 50,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 3,
    }));

    setFireParticlesData(fp);
    setEmberParticlesData(ep);
  }, []);

  // Lightning bolts
  const lightningPaths = [
    "M50,10 L55,30 L45,35 L60,60 L40,65 L50,90",
    "M20,15 L25,40 L15,45 L30,70 L10,75 L20,95",
    "M80,20 L85,45 L75,50 L90,75 L70,80 L80,100"
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-red-900 to-black overflow-hidden"
    >
      {/* Dynamic fire background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at bottom, rgba(220, 38, 38, 0.3), rgba(153, 27, 27, 0.2), rgba(0, 0, 0, 0.8))",
            "radial-gradient(ellipse at bottom, rgba(239, 68, 68, 0.4), rgba(185, 28, 28, 0.3), rgba(0, 0, 0, 0.7))",
            "radial-gradient(ellipse at bottom, rgba(220, 38, 38, 0.3), rgba(153, 27, 27, 0.2), rgba(0, 0, 0, 0.8))"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lightning flash overlay */}
      <AnimatePresence>
        {showLightning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gradient-to-b from-red-300/20 via-orange-200/10 to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Fire particles */}
      {/* Fire particles (client-only) */}
      {fireParticlesData.length > 0 && fireParticlesData.map((p, i) => (
        <motion.div
          key={`fire-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            background: p.background,
            left: p.left,
            top: '100%'
          }}
          animate={{
            y: [0, -windowHeight - 100],
            x: [0, p.xShift],
            opacity: [0, 1, 0.8, 0],
            scale: [0.5, 1.2, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Ember particles (client-only) */}
      {emberParticlesData.length > 0 && emberParticlesData.map((e, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-t from-red-600 to-orange-400"
          style={{ left: e.left, top: e.top }}
          animate={{
            x: [0, e.x1, e.x2],
            y: [0, e.y1, e.y2],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: e.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: e.delay,
          }}
        />
      ))}

      {/* Lightning bolts */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {showLightning && lightningPaths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke="url(#lightning-gradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        ))}
        <defs>
          <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
      </svg>

      {/* Hexagonal grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4444' fill-opacity='0.3'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        animate={{ 
          x: [0, 30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Main logo section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* ModernDev Logo */}
          <motion.div
            className="relative mb-8"
            animate={{ 
              filter: showLightning ? "brightness(1.5) saturate(1.2)" : "brightness(1) saturate(1)"
            }}
            transition={{ duration: 0.1 }}
          >
            {/* Code brackets with fire effect */}
            <motion.div
              className="relative inline-flex items-center justify-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Left bracket */}
              <motion.div
                className="text-8xl md:text-9xl font-bold bg-gradient-to-b from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent mr-4"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 40px rgba(239, 68, 68, 0.8)",
                    "0 0 20px rgba(239, 68, 68, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'<'}
              </motion.div>

              {/* Center content */}
              <div className="flex flex-col items-center">
                {/* Modern */}
                <motion.h1
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Modern
                </motion.h1>
                
                {/* Dev */}
                <motion.h1
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent -mt-2"
                  animate={{ 
                    backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Dev
                </motion.h1>
              </div>

              {/* Right bracket */}
              <motion.div
                className="text-8xl md:text-9xl font-bold bg-gradient-to-b from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent ml-4"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 40px rgba(239, 68, 68, 0.8)",
                    "0 0 20px rgba(239, 68, 68, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                {'>'}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-red-300/80 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              textShadow: [
                "0 0 10px rgba(252, 165, 165, 0.3)",
                "0 0 20px rgba(252, 165, 165, 0.6)",
                "0 0 10px rgba(252, 165, 165, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            Student Development Lab
          </motion.p>
        </motion.div>

        {/* Progress section */}
        <motion.div
          className="w-full max-w-lg px-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Terminal-style progress */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
              <span className="text-red-400 text-sm font-mono ml-2">~/moderndev-lab</span>
            </div>

            {/* Progress bar */}
            <div className="relative mb-6">
              <div className="h-3 bg-red-950/50 rounded-full overflow-hidden border border-red-800/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Fire shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
              
              {/* Progress glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-full blur-md opacity-30"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Progress info */}
            <div className="flex justify-between items-center text-sm font-mono">
              <motion.span
                className="text-red-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                [{Math.round(progress).toString().padStart(3, '0')}%]
              </motion.span>
              
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhase}
                  className="text-orange-300"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentPhase === 0 && "$ initializing workspace..."}
                  {currentPhase === 1 && "$ compiling modules..."}
                  {currentPhase === 2 && "$ optimizing build..."}
                  {currentPhase === 3 && "$ final preparations..."}
                  {currentPhase === 4 && "$ ready to launch! 🔥"}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Loading indicators */}
        <motion.div
          className="flex items-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.span
            className="text-red-400 font-mono text-sm"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Loading
          </motion.span>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-6 bg-gradient-to-t from-red-600 to-orange-400 rounded-full"
              animate={{
                scaleY: [1, 2, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Corner fire effects */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-red-500/20 via-orange-500/10 to-transparent rounded-full blur-xl" />
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 w-32 h-32"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-gradient-to-bl from-red-500/20 via-orange-500/10 to-transparent rounded-full blur-xl" />
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;