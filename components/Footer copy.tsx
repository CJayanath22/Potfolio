// components/Footer.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

export default function Footer() {
  // 1. Footer එක තිරයේ තියෙන තැන අල්ලගන්න Ref එකක්
  const footerRef = useRef<HTMLElement>(null);

  // 2. Footer එක තිරයට ඇතුළු වන වෙලාවේ සිට scroll වන ප්‍රමාණය මැනීම
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // 3. එම scroll ප්‍රමාණය අනුව අකුරු වල Y පිහිටීම -30% සිට 0% දක්වා වෙනස් කිරීම
  // U අකුර සඳහා (මුල සිටම චලනය වේ)
  const xMoveU = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  // N අකුර සඳහා (0.2 ක පරතරයකින් පසුව චලනය ආරම්භ වේ)
  const xMoveN = useTransform(scrollYProgress, [0.2, 1], ["25%", "-25%"]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0a0a0a] text-white overflow-hidden pt-32 pb-10 px-6 md:px-16 w-full border-t border-zinc-900"
    >
      {/* Parallax ක්‍රියාවලිය සිදුවන විශාල අකුරු (පසුබිමේ) */}
      <div className="absolute top-0 right-0 text-[40vw] font-black leading-[0.8] text-white pointer-events-none select-none opacity-90 flex flex-col">
        <motion.div style={{ x: xMoveU }}>U</motion.div>

        <motion.div style={{ x: xMoveN }}>N</motion.div>
      </div>

      {/* ප්‍රධාන විස්තර අඩංගු කොටස */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between h-full min-h-[70vh]">
        {/* ඉහළ කොටස: ප්‍රධාන වාක්‍යය සහ බොත්තම */}
        <div className="w-full md:w-2/3">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
              We speak English, Spanish and Design.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-2xl md:text-4xl text-zinc-500 mb-16 max-w-2xl">
              At Uncommon we find the common ground. Reach out to explore a
              world of strategic design solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-3xl md:text-5xl font-medium hover:text-zinc-300 transition-colors group"
              >
                <span className="text-zinc-500 group-hover:translate-x-3 transition-transform duration-300">
                  ↳
                </span>
                Book a 15 min call
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>

        {/* පහළ කොටස: තීරු 4කින් සමන්විත Grid එක */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 text-sm font-medium">
          {/* 1 වන තීරුව: ලිපිනය */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-4">
              <p className="text-zinc-400 uppercase tracking-widest text-xs">
                10 GWYNNE ST, CREMORNE VIC 3121
              </p>
              <div className="border border-zinc-700 w-fit px-4 py-2 rounded-full text-xs tracking-widest uppercase">
                Working Globally
              </div>
            </div>
          </ScrollReveal>

          {/* 2 වන තීරුව: සමාජ මාධ්‍ය 1 */}
          <ScrollReveal delay={0.4}>
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <Link
                  href="#"
                  className="hover:text-zinc-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-zinc-400 transition-colors"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-zinc-400 transition-colors"
                >
                  Behance
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          {/* 3 වන තීරුව: සමාජ මාධ්‍ය 2 සහ ඊමේල් */}
          <ScrollReveal delay={0.5}>
            <ul className="flex flex-col gap-2 text-lg mb-8">
              <li>
                <Link
                  href="#"
                  className="hover:text-zinc-400 transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-zinc-400 transition-colors"
                >
                  Awwwards
                </Link>
              </li>
            </ul>
            <Magnetic>
              <Link
                href="mailto:hola@uncommonstudio.com.au"
                className="text-lg underline underline-offset-4 hover:text-zinc-400 transition-colors inline-block"
              >
                hola@uncommonstudio.com.au
              </Link>
            </Magnetic>
          </ScrollReveal>

          {/* 4 වන තීරුව: නෛතික/සංස්කෘතික සටහන */}
          <ScrollReveal delay={0.6}>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Uncommon acknowledges the Wurundjeri Woi Wurrung people as the
              Traditional Owners of the lands on which our office is located.
              <br />
              <br />
              We acknowledge the Traditional Owners of Country on which we meet
              and work throughout Australia. We recognise that sovereignty over
              the land has never been ceded, and pay our respects to Elders past
              and present.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
