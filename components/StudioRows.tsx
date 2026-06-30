// components/StudioRows.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

// 1. The Data (Keep your original project list)
const rowsData = [
  {
    id: "001",
    title: "ASP.NET Core Web API",
    desc: "Built a robust, production-ready backend following a clean architecture approach with Repository and Unit of Work patterns, secured via JWT and fully containerized using Docker.",
  },
  {
    id: "002",
    title: "Spring Boot & Angular E-Commerce",
    desc: "Developed a full-stack web application implementing JWT authentication, Hibernate ORM, and MVC architecture alongside a dynamic Angular frontend with Angular Material.",
  },
  {
    id: "003",
    title: "Node.js & MongoDB API Engine",
    desc: "Engineered a full-stack e-commerce backend using Express and MongoDB that efficiently processes secure user authentication, transactional shopping carts, and order management.",
  },
  {
    id: "004",
    title: "Java Firebase Android App",
    desc: "Created a mobile application featuring secure user authentication, Firestore for database operations, Firebase Storage for files, and Picasso for dynamic image handling.",
  },
  {
    id: "005",
    title: "Java Textile Shop POS System",
    desc: "Built a standalone Point of Sale system using Java 8 and MySQL, incorporating dynamic Jasper reporting to streamline transactions and operational efficiency.",
  },
  {
    id: "006",
    title: "PHP Full-Stack E-Commerce Site",
    desc: "Developed a classic e-commerce storefront with a secure user management setup, a dynamic catalog search system, and a dedicated admin panel for tracking orders.",
  },
  {
    id: "007",
    title: "AI Automation & Agents",
    desc: "Specializing in creating AI agents on the n8n platform to automate critical workflows, including intelligent chatbots, personal assistants, and streamlined social media management.",
  },
  {
    id: "008",
    title: "Next.js & Tailwind Portfolio",
    desc: "Built this very portfolio website using Next.js 14 and Tailwind CSS. It features highly advanced scroll-linked animations powered by Framer Motion, customized client-side state management, and ultra-smooth kinematics using Lenis Smooth Scroll.",
  }
];

// 2. The Animated Shape
const AnimatedShape = ({ index }: { index: number }) => {
  const techLogos = [
    {
      // 0: ASP.NET Core (Purple)
      color: "text-[#512bd4]",
      icon: <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" strokeWidth="1.5" />
    },
    {
      // 1: Spring Boot (Green)
      color: "text-[#6db33f]",
      icon: (
        <>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.5.5-2.5 2-6 5.5-8.5 3.5-2.5 7-3 8.5-3.5-1.5 5.5-4 9-8.5 11.5 2.5.3 5.2-.5 7-2.5 2.5-2.5 3-7.5 3-7.5s-5 .5-7.5 3c-1.5 1.5-2.5 3.8-2.5 6.5-2.7-1.9-4.5-5-4.5-8.5 0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.5-.4 3-1.1 4.3" />
          <path d="M12 22V12" strokeWidth="1" opacity="0.7" />
        </>
      )
    },
    {
      // 2: Node.js / MongoDB (Green)
      color: "text-[#68a063]",
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 7v10l10 5" strokeWidth="1.5" />
    },
    {
      // 3: Android / Firebase (Android Green)
      color: "text-[#3DDC84]",
      icon: (
        <>
          <path d="M5 15c0-3.87 3.13-7 7-7s7 3.13 7 7v1H5v-1z" strokeWidth="1.5" />
          <path d="M8 5l-1-2M16 5l1-2" strokeWidth="1.5" />
          <circle cx="9" cy="11" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15" cy="11" r="1.5" fill="currentColor" stroke="none" />
        </>
      )
    },
    {
      // 4: Java (Orange/Red)
      color: "text-[#f89820]",
      icon: (
        <>
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" strokeWidth="1.5" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" strokeWidth="1.5" />
          <path d="M6 1v3M10 1v3M14 1v3" strokeWidth="1.5" />
        </>
      )
    },
    {
      // 5: PHP (Blue/Purple)
      color: "text-[#777BB4]",
      icon: (
        <>
          <ellipse cx="12" cy="12" rx="10" ry="6" strokeWidth="1.5" />
          <path d="M8 12h8M10 9v6M14 9v6" strokeWidth="1.5" />
        </>
      )
    },
    {
      // 6: AI Automation (Network Node / Blue)
      color: "text-[#0070f3]",
      icon: (
        <>
          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
          <path d="M12 9V2M12 22v-7M5 12H2M22 12h-3M7 7L2 2M22 22l-5-5M7 17l-5 5M22 2l-5 5" strokeWidth="1.5" />
        </>
      )
    },
    {
      // 7: Next.js Portfolio (White / Pure Minimalist Tech)
      color: "text-white dark:text-white",
      icon: (
        <>
          {/* Next.js 'N' Shape */}
          <path d="M19.5 21a7.5 7.5 0 0 1-7.5-7.5v-9M4.5 4.5L15 16.5M19.5 4.5v9" strokeWidth="2" />
        </>
      )
    }
  ];

  const activeTech = techLogos[index] || {
    color: "text-zinc-400",
    icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="0.5" />
  };

  return (
    <div className={`w-full h-full relative flex items-center justify-center ${activeTech.color} transition-colors duration-500`}>
      
      {/* 1. Outer Orbit Ring */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 100 100"
        className="absolute w-full h-full opacity-40"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
      </motion.svg>

      {/* 2. Inner Orbit Ring */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 100 100"
        className="absolute w-[80%] h-[80%] opacity-60"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="40 10" />
      </motion.svg>

      {/* 3. The Core Logo */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[45%] h-[45%] drop-shadow-[0_0_10px_currentColor]"
      >
        {activeTech.icon}
      </svg>
      
    </div>
  );
};

// 3. The Individual Row Logic
function StudioRow({ data, index }: { data: any; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const shapeSize = useTransform(scrollYProgress, [0, 0.5], [160, 50]);
  const pOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // FIX: Fixed 200px max-height එක වෙනුවට scaleY (1 සිට 0 දක්වා) යොදා ඇත. 
  // මෙයින් ඕනෑම දිග විස්තරයක් මුලින්ම 100% ක්ම පැහැදිලිව දර්ශනය වේ.
  const pScaleY = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="w-full h-[120vh] relative bg-inherit">
      
      {/* FIX: bg-[#0a0a0a] වෙනුවට bg-inherit දමා ඇති නිසා Home page එකේ පසුබිම වෙනස් වන විට මෙයද සුමටව මාරු වේ */}
      <div className="sticky top-0 w-full bg-inherit text-inherit flex flex-col md:flex-row gap-6 md:gap-16 border-t border-zinc-500/20 pt-10 md:pt-16 pb-6 items-start z-10 transition-colors duration-500">
        
        {/* වම් පස: අංකය සහ හැඩතල */}
        <div className="w-full md:w-1/3 flex flex-col items-start gap-6 bg-inherit text-inherit">
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

        {/* දකුණු පස: මාතෘකාව සහ විස්තරය */}
        <div className="w-full md:w-2/3 flex flex-col justify-start bg-inherit text-inherit">
          {/* text-white වෙනුවට text-inherit යෙදූ නිසා පසුබිම සුදු වන විට අකුරු කළු පැහැයට හැරේ */}
          <h3 className="text-4xl md:text-[5vw] leading-[1.1] font-medium tracking-tight mb-2 transition-colors duration-500">
            {data.title}
          </h3>

          {/* transformOrigin: "top" මඟින් විස්තරය ඉහළ දෙසට හැකිලී යාම පාලනය කරයි */}
          <motion.div
            style={{ scaleY: pScaleY, opacity: pOpacity, transformOrigin: "top" }}
            className="overflow-hidden origin-top w-full"
          >
            <p className="text-xl md:text-3xl text-zinc-500 leading-relaxed max-w-2xl pt-6 transition-colors duration-500">
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
    <div className="w-full bg-inherit text-inherit">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6 bg-inherit text-inherit">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 md:text-xl">
            My Projects
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-md transition-colors duration-500">
            Back End and Full Stack Projects I've Built. Take a look at some of my work and the technologies I've used to build them. ↓
          </p>
        </div>
      </ScrollReveal>

      {/* border-zinc-800 වෙනුවට border-zinc-500/20 යෙදූ නිසා කළු/සුදු පසුබිම් දෙකටම බෝඩරය ලස්සනට ගැලපේ */}
      <div className="flex flex-col border-b border-zinc-500/20 bg-inherit text-inherit">
        {rowsData.map((row, index) => (
          <StudioRow key={row.id} data={row} index={index} />
        ))}
      </div>
    </div>
  );
}