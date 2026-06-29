// components/Marquee.tsx
"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    // 1. පිටතින් ඇති ප්‍රධාන රාමුව (සුදු පැහැති පසුබිම)
    <div className="w-full overflow-hidden bg-white py-6 md:py-8 flex items-center border-y border-zinc-200">
      
      {/* 2. චලනය වන කොටස */}
      <motion.div
        className="flex whitespace-nowrap gap-10 items-center"
        animate={{ x: [0, "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 15 // තත්පර 15කින් රවුමක් යයි (වේගය අඩු/වැඩි කිරීමට මෙය වෙනස් කරන්න)
        }}
      >
        {/* 3. එකම අකුරු ටික දෙපාරක් (Array එකක් මඟින්) පෙන්වීම */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-10 items-center pr-10">
            <span className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#0a0a0a]">
              Full-Stack Software Engineer Here 
            </span>
            <span className="text-3xl md:text-5xl text-[#0a0a0a]">✦</span>
            <span className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text" style={{ WebkitTextStroke: "2px #0a0a0a" }}>
              to Build Your Next Project
            </span>
            <span className="text-3xl md:text-5xl text-[#0a0a0a]">✦</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
}