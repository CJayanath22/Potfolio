// app/page.tsx
"use client";

import { motion } from "framer-motion";
import ParallaxCard from "../components/ParallaxCard"; // Component එක Import කිරීම
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal"; // ScrollReveal Component එක Import කිරීම
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
            Creative Design & Development Studio
          </p>

          <h1 className="text-[11vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] text-white flex flex-col gap-2">
            <div className="overflow-hidden block py-1">
              <motion.span variants={textVariant} className="block">
                We Craft
              </motion.span>
            </div>
            <div className="overflow-hidden block py-1">
              <motion.span
                variants={textVariant}
                className="block text-zinc-600"
              >
                Uncommon
              </motion.span>
            </div>
            <div className="overflow-hidden block py-1">
              <motion.span variants={textVariant} className="block">
                Experiences.
              </motion.span>
            </div>
          </h1>

          <div className="mt-12 max-w-lg md:ml-auto">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              අපි සන්නාමයන් සහ ඩිජිටල් නිෂ්පාදන අනාගතයට ගැළපෙන පරිදි, ඉතාමත්
              නිර්මාණාත්මක සහ අද්විතීය ආකාරයෙන් සැලසුම් කර කේතනය කරන්නෙමු.
            </p>
          </div>
        </motion.section>

        <div className="absolute bottom-10 left-6 md:left-16 text-xs uppercase tracking-widest text-zinc-600 animate-pulse">
          Scroll Down ↓
        </div>
      </main>

      {/* 2. Marquee එක මෙතැනට එකතු කරන්න */}
      <Marquee/>

      {/* 2. Projects Section (අලුතින් එකතු කළ කොටස) */}
      <section className="w-full px-6 md:px-16 py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto w-full">
          {/* මැදින් යන කුඩා මාතෘකාව */}
          <div className="w-full flex justify-between items-end mb-16 md:mb-24">
            <ScrollReveal>
              <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Selected Works / (03)
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xs text-zinc-600 hidden md:block uppercase tracking-widest">
                © 2026 Portfolio Core
              </p>
            </ScrollReveal>
          </div>

          {/* Parallax Cards පෙළගැස්ම (Uncommon වෙබ් අඩවියේ මෙන් එකක් හැර එකක් විශාලව පවතී) */}
          <div className="flex flex-col gap-24 md:gap-40 w-full">
            <div className="w-full md:w-[80%] self-start">
              <ScrollReveal>
                <ParallaxCard
                  title="Hyperion Digital Platform"
                  category="Branding / Web Design"
                  imgUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
                />
              </ScrollReveal>
            </div>

            <div className="w-full md:w-[80%] self-end">
              <ScrollReveal>
                <ParallaxCard
                  title="Nova Architecture Studio"
                  category="Creative Development / 3D"
                  imgUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                />
              </ScrollReveal>
            </div>

            <div className="w-full md:w-[80%] self-start">
              <ScrollReveal>
                <ParallaxCard
                  title="Aether Capsule Collection"
                  category="Art Direction / E-Commerce"
                  imgUrl="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- ADD THE STUDIO ROWS HERE --- */}
      <section className="w-full px-6 md:px-16 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <StudioRows />
        </div>
      </section>
    </div>
  );
}
