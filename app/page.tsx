// app/page.tsx
"use client";

import { motion } from "framer-motion";
import ParallaxCard from "../components/ParallaxCard"; 
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal"; 
import StudioRows from "../components/StudioRows";

export default function Home() {
  const textVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="w-full bg-[#0a0a0a]">
      {/* 1. Hero Section */}
      <main className="w-full min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 relative mb-20">
        <motion.section
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full"
        >
          <p className="text-xs md:text-sm tracking-widest uppercase text-zinc-500 mb-6 font-medium">
            Full-Stack Software Engineer / Portfolio
          </p>

          <h1 className="text-[11vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] text-white flex flex-col gap-2">
            <div className="overflow-hidden block py-1">
              <motion.span variants={textVariant} className="block">
                Charith
              </motion.span>
            </div>
            <div className="overflow-hidden block py-1">
              <motion.span
                variants={textVariant}
                className="block text-zinc-600"
              >
                Jayanath
              </motion.span>
            </div>
            <div className="overflow-hidden block py-1">
              <motion.span variants={textVariant} className="block">
                Software Eng.
              </motion.span>
            </div>
          </h1>

          <div className="mt-12 max-w-xl md:ml-auto">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
             Highly motivated BEng Software Engineering student with a strong foundation 
from the Java Institute for Advanced Technology. Proficient in time management 
and creative thinking, seeking opportunities to contribute to cutting-edge research 
in emerging technologies. Committed to continuous learning and poised to apply 
theoretical knowledge to real-world challenges.
            </p>
          </div>
        </motion.section>

        <div className="absolute bottom-10 left-6 md:left-16 text-xs uppercase tracking-widest text-zinc-600 animate-pulse">
          Scroll Down ↓
        </div>
      </main>

      {/* 2. Marquee Component */}
      <Marquee/>

      {/* 3. Projects Section */}
      <section className="w-full px-6 md:px-16 py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full flex justify-between items-end mb-16 md:mb-24">
            <ScrollReveal>
              <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Selected Engineering Works / (04)
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xs text-zinc-600 hidden md:block uppercase tracking-widest">
                © 2026 Charith Jayanath
              </p>
            </ScrollReveal>
          </div>

          {/* Parallax Cards Grid with Clean Asymmetric Offsets */}
          <div className="flex flex-col gap-24 md:gap-40 w-full">
            {/* Project 1 */}
            <div className="w-full md:w-[80%] self-start">
              <ScrollReveal>
                <ParallaxCard
                  title="Production-Ready ASP.NET Core Web API"
                  category="Backend Architecture / Clean Architecture / Docker"
                  imgUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
                />
              </ScrollReveal>
            </div>

            {/* Project 2 */}
            <div className="w-full md:w-[80%] self-end">
              <ScrollReveal>
                <ParallaxCard
                  title="Angular & Spring Boot E-Commerce Ecosystem"
                  category="Full-Stack Web Dev / JWT / Hibernate ORM"
                  imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
                />
              </ScrollReveal>
            </div>

            {/* Project 3 */}
            <div className="w-full md:w-[80%] self-start">
              <ScrollReveal>
                <ParallaxCard
                  title="Node.js, Express & MongoDB API Engine"
                  category="REST API / Product & Transaction Systems"
                  imgUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200"
                />
              </ScrollReveal>
            </div>

            {/* Project 4 */}
            <div className="w-full md:w-[80%] self-end">
              <ScrollReveal>
                <ParallaxCard
                  title="Java-Based Android Application"
                  category="Mobile Development / Firebase Engine / Firestore"
                  imgUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Studio Rows Section */}
      <section className="w-full px-6 md:px-16 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <StudioRows />
        </div>
      </section>
    </div>
  );
}