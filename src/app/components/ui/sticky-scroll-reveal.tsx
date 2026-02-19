"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Enhanced gradient themes with more vibrant colors
  const themes = [
    {
      primary: "#1DB954", // Spotify Green
      secondary: "#191414", // Spotify Black
      accent: "#1ed760",
      gradient: "linear-gradient(135deg, #1DB954 0%, #1ed760 50%, #17a84a 100%)",
      shadow: "0 20px 40px rgba(29, 185, 84, 0.3)",
      particles: "#1ed760"
    },
    {
      primary: "#E22134", // Red
      secondary: "#FF6B6B",
      accent: "#ff4757",
      gradient: "linear-gradient(135deg, #E22134 0%, #FF6B6B 50%, #c44569 100%)",
      shadow: "0 20px 40px rgba(226, 33, 52, 0.3)",
      particles: "#ff4757"
    },
    {
      primary: "#9B59B6", // Purple
      secondary: "#8E44AD",
      accent: "#bb6bd9",
      gradient: "linear-gradient(135deg, #9B59B6 0%, #8E44AD 50%, #663399 100%)",
      shadow: "0 20px 40px rgba(155, 89, 182, 0.3)",
      particles: "#bb6bd9"
    },
    {
      primary: "#3498DB", // Blue
      secondary: "#2980B9",
      accent: "#74b9ff",
      gradient: "linear-gradient(135deg, #3498DB 0%, #2980B9 50%, #1e6091 100%)",
      shadow: "0 20px 40px rgba(52, 152, 219, 0.3)",
      particles: "#74b9ff"
    }
  ];

  const currentTheme = themes[activeCard % themes.length];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  // Enhanced floating particles with different sizes and movements
  const ParticleEffect = ({ theme }: { theme: any }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40"
          style={{
            backgroundColor: theme.particles,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  // Progress indicator
  const ProgressIndicator = () => (
    <div className="absolute top-4 left-4 flex flex-col space-y-2 z-20">
      {content.map((_, index) => (
        <motion.div
          key={index}
          className="w-2 h-2 rounded-full bg-white/30"
          animate={{
            backgroundColor: activeCard === index ? currentTheme.accent : "rgba(255,255,255,0.3)",
            scale: activeCard === index ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      className="h-[38.5rem] overflow-y-auto flex justify-center relative space-x-4 rounded-3xl py-6 px-4 cursor-pointer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: currentTheme.gradient,
        boxShadow: currentTheme.shadow,
      }}
      animate={{
        scale: isHovered ? 1.01 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {/* Interactive gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentTheme.accent} 0%, transparent 50%)`,
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Enhanced particle effects */}
      <ParticleEffect theme={currentTheme} />
      
      {/* Progress indicator */}
      <ProgressIndicator />
      
      {/* Animated border with pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2"
        animate={{
          borderColor: `${currentTheme.accent}60`,
          boxShadow: `0 0 20px ${currentTheme.accent}40`,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="div relative flex items-start z-10">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.4,
                y: activeCard === index ? 0 : 10,
                scale: activeCard === index ? 1 : 0.95,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.h2
                className="text-xl font-bold text-white relative"
                style={{
                  textShadow: `0 0 20px ${currentTheme.accent}40`,
                }}
                animate={{
                  color: activeCard === index ? "#ffffff" : "#ffffff80",
                }}
                whileHover={{
                  scale: 1.03,
                  color: currentTheme.accent,
                  textShadow: `0 0 30px ${currentTheme.accent}80`,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
                {/* Enhanced animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 rounded-full"
                  style={{ backgroundColor: currentTheme.accent }}
                  initial={{ width: 0 }}
                  animate={{
                    width: activeCard === index ? "100%" : "0%",
                    boxShadow: activeCard === index ? `0 0 10px ${currentTheme.accent}` : "none",
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.h2>
              
              <motion.p
                className="text-sm text-white/80 max-w-sm mt-6 leading-relaxed"
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                whileHover={{
                  color: "#ffffff",
                }}
                transition={{ duration: 0.2 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      
      <motion.div
        className={cn(
          "hidden lg:block h-fit rounded-2xl sticky top-14 backdrop-blur-sm overflow-hidden",
          contentClassName
        )}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: `0 25px 50px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
        }}
        animate={{
          scale: 1,
          rotateY: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* Enhanced glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(45deg, ${currentTheme.accent}20, transparent, ${currentTheme.primary}20)`,
          }}
          animate={{
            opacity: 0.6,
            background: `linear-gradient(45deg, ${currentTheme.accent}20, transparent, ${currentTheme.primary}20)`,
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Content with no borders and enhanced styling */}
        <div className="relative z-10 p-1">
          <div className="border-none outline-none">
            {content[activeCard].content ?? null}
          </div>
        </div>
        
        {/* Enhanced floating accent elements */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentTheme.accent }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
        
        {/* Corner decoration */}
        <div className="absolute bottom-4 left-4">
          <motion.div
            className="w-6 h-6 rounded-full"
            style={{ 
              background: `linear-gradient(45deg, ${currentTheme.accent}, ${currentTheme.primary})`,
              opacity: 0.3,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};