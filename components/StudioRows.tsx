// components/StudioRows.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

// 1. The Data
const rowsData = [
  {
    id: "001",
    title: "ASP.NET Core Web API",
    desc: "Built a robust, production-ready backend following a clean architecture approach with Repository and Unit of Work patterns, secured via JWT and fully containerized using Docker[cite: 1].",
  },
  {
    id: "002",
    title: "Spring Boot & Angular E-Commerce",
    desc: "Developed a full-stack web application implementing JWT authentication, Hibernate ORM, and MVC architecture alongside a dynamic Angular frontend with Angular Material[cite: 1].",
  },
  {
    id: "003",
    title: "Node.js & MongoDB API Engine",
    desc: "Engineered a full-stack e-commerce backend using Express and MongoDB that efficiently processes secure user authentication, transactional shopping carts, and order management[cite: 1].",
  },
  {
    id: "004",
    title: "Java Firebase Android App",
    desc: "Created a mobile application featuring secure user authentication, Firestore for database operations, Firebase Storage for files, and Picasso for dynamic image handling[cite: 1].",
  },
  {
    id: "005",
    title: "Java Textile Shop POS System",
    desc: "Built a standalone Point of Sale system using Java 8 and MySQL, incorporating dynamic Jasper reporting to streamline transactions and operational efficiency[cite: 1].",
  },
  {
    id: "006",
    title: "PHP Full-Stack E-Commerce Site",
    desc: "Developed a classic e-commerce storefront with a secure user management setup, a dynamic catalog search system, and a dedicated admin panel for tracking orders[cite: 1].",
  },
  {
    id: "007",
    title: "AI Automation & Agents",
    desc: "Specializing in creating AI agents on the n8n platform to automate critical workflows, including intelligent chatbots, personal assistants, and streamlined social media management[cite: 1].",
  },
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
            Proffesion and Passion combined to deliver the best results for your business.
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