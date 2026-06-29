// components/StudioRows.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

// 1. The Data
const rowsData = [
  { id: "001", title: "We collaborate", desc: "Hyper-collaboration supercharges creativity. Together, we make your vision manifest." },
  { id: "002", title: "We discover", desc: "We believe in the beauty of the brief. Unlike agencies, we don't expect you to create the perfect scope only to be then charged for 'unforeseen costs.' We craft the brief with you, not for you." },
  { id: "003", title: "We specialise", desc: "Instead of painting with a broad brush, we narrow in on the detail by specialising in UX and UI. We never compromise on aesthetics or function." },
  { id: "004", title: "We become your team", desc: "We make sure you have a Senior team member dedicated to your project. Undivided attention, no cut corners. Just dedicated experts." },
  { id: "005", title: "We design for growth", desc: "We design with your end-customer in mind. If it doesn't mine growth for your company, then it's doing nothing for your business." }
];

// 2. The Animated Shape
const AnimatedShape = ({ index }: { index: number }) => {
  return (
    <motion.svg 
      animate={{ rotate: index % 2 === 0 ? 360 : -360 }} 
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" 
      className="w-full h-full text-zinc-400"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </motion.svg>
  );
};

// 3. The Individual Row Logic
function StudioRow({ data, index }: { data: any; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const shapeSize = useTransform(scrollYProgress, [0, 0.5], [160, 50]);
  const pOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const pMaxHeight = useTransform(scrollYProgress, [0, 0.5], ["200px", "0px"]);

  return (
    <div ref={containerRef} className="w-full h-[120vh] relative">
      <div className="sticky top-0 w-full bg-[#0a0a0a] flex flex-col md:flex-row gap-6 md:gap-16 border-t border-zinc-800 pt-10 md:pt-16 pb-6 items-start z-10">
        
        <div className="w-full md:w-1/3 flex flex-col items-start gap-6">
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium pt-2">
            {data.id}
          </div>
          
          <motion.div
            style={{ width: shapeSize, height: shapeSize }}
            className="relative hidden md:block"
          >
            <AnimatedShape index={index} />
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-start">
          <h3 className="text-4xl md:text-[5vw] leading-[1.1] font-medium tracking-tight text-white mb-2">
            {data.title}
          </h3>

          <motion.div
            style={{ maxHeight: pMaxHeight, opacity: pOpacity }}
            className="overflow-hidden"
          >
            <p className="text-xl md:text-3xl text-zinc-400 leading-relaxed max-w-2xl pt-6">
              {data.desc}
            </p>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}

// 4. The Exported Wrapper Component
export default function StudioRows() {
  return (
    <div className="w-full">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
            WHY US?
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-md">
            Uncommon by name and by nature
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col border-b border-zinc-800">
        {rowsData.map((row, index) => (
          <StudioRow key={row.id} data={row} index={index} />
        ))}
      </div>
    </div>
  );
}