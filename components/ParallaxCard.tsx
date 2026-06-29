// components/ParallaxCard.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxCardProps {
  title: string;
  category: string;
  imgUrl: string;
}

export default function ParallaxCard({ title, category, imgUrl }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // පින්තූරය පාවෙන ප්‍රමාණය ටිකක් වැඩි කරමු වඩාත් හොඳින් පෙනෙන්න (-15% සිට 15%)
  const yRange = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={cardRef} className="w-full flex flex-col gap-4 group">
      
      <div className="w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900 relative">
        
        {/* 1. Parallax එක පාලනය කරන ප්‍රධාන කොටුව (motion.div) */}
        <motion.div 
          style={{ y: yRange }} 
          className="absolute top-[-15%] left-0 w-full h-[130%]"
        >
          {/* 2. Hover වෙද්දී Zoom වෙන සාමාන්‍ය පින්තූරය */}
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
        
        {/* පින්තූරය උඩින් වැටෙන කළු පැහැති ළා ආවරණය */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        
      </div>

      <div className="flex justify-between items-start pt-2">
        <div>
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-zinc-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs md:text-sm uppercase tracking-widest text-zinc-500 mt-1">
            {category}
          </p>
        </div>
        
        <div className="text-xl text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
          ↗
        </div>
      </div>

    </div>
  );
}