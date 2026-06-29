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
  // C අකුර සඳහා (Charith)
  const xMoveU = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  // J අකුර සඳහා (Jayanath)
  const xMoveN = useTransform(scrollYProgress, [0.2, 1], ["25%", "-25%"]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0a0a0a] text-white overflow-hidden pt-32 pb-10 px-6 md:px-16 w-full border-t border-zinc-900"
    >
      {/* Parallax පසුබිම් අකුරු - Your initials C & J */}
      <div className="absolute top-0 right-0 text-[40vw] font-black leading-[0.8] text-white pointer-events-none select-none opacity-5 flex flex-col">
        <motion.div style={{ x: xMoveU }}>C</motion.div>
        <motion.div style={{ x: xMoveN }}>J</motion.div>
      </div>

      {/* ප්‍රධාන විස්තර අඩංගু කොටස */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between h-full min-h-[70vh]">
        {/* ඉහළ කොටස: ප්‍රධාන වාක්‍යය සහ බොත්තම */}
        <div className="w-full md:w-2/3">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
              Creative Solutions for Your Business or team
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-2xl md:text-4xl text-zinc-500 mb-16 max-w-2xl">
              Let's collaborate to build highly scalable backend engines, dynamic interfaces, and automated AI systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Magnetic>
              <a
                href="mailto:bgcjayanath2000@gmail.com"
                className="inline-flex items-center gap-4 text-3xl md:text-5xl font-medium hover:text-zinc-300 transition-colors group"
              >
                <span className="text-zinc-500 group-hover:translate-x-3 transition-transform duration-300">
                  ↳
                </span>
                Let's start a project
              </a>
            </Magnetic>
          </ScrollReveal>
        </div>

        {/* පහළ කොටස: තීරු 4කින් සමන්විත Grid එක */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 text-sm font-medium">
          {/* 1 වන තීරුව: ලිපිනය */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-4">
              <p className="text-zinc-400 uppercase tracking-widest text-xs leading-loose">
                No: 2213, Nidahas Mawatha,<br />
                Moraketiya, Embilipitiya,<br />
                70200 Sri Lanka
              </p>
              <div className="border border-zinc-700 w-fit px-4 py-2 rounded-full text-xs tracking-widest uppercase">
                Available Globally
              </div>
            </div>
          </ScrollReveal>

          {/* 2 වන තීරුව: සමාජ මාධ්‍ය 1 */}
          <ScrollReveal delay={0.4}>
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <Link
                  href="https://linkedin.com/in/charith-jayanath"
                  target="_blank"
                  className="hover:text-zinc-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/charith.jayanath.60?mibextid=ZbWKwL"
                  target="_blank"
                  className="hover:text-zinc-400 transition-colors"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          {/* 3 වන තීරුව: දුරකථන අංකය සහ ඊමේල් */}
          <ScrollReveal delay={0.5}>
            <ul className="flex flex-col gap-2 text-lg mb-8">
              <li className="text-zinc-400 text-sm tracking-wide">
                +94 72 723 9753
              </li>
            </ul>
            <Magnetic>
              <Link
                href="mailto:bgcjayanath2000@gmail.com"
                className="text-lg underline underline-offset-4 hover:text-zinc-400 transition-colors inline-block"
              >
                bgcjayanath2000@gmail.com
              </Link>
            </Magnetic>
          </ScrollReveal>

          {/* 4 වන තීරුව: වෘත්තීය ප්‍රකාශය */}
          <ScrollReveal delay={0.6}>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Dedicated to continuous growth and applying cutting-edge engineering standards to enterprise architecture. Focused on modular, test-driven backend systems and secure multi-layered web webspaces.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}