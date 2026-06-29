// app/about/page.tsx
"use client";

import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";

// Importing the image directly from your resources folder to prevent Next.js routing breakages
import aboutBgImage from "../resources/images/my5.png";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* LAYER 1: Fixed Background Image (Takes full viewport height, stays behind all text) */}
      <div className="fixed inset-0 w-full h-screen z-0 overflow-hidden pointer-events-none">
        <Image
          src={aboutBgImage}
          alt="Charith Jayanath Background"
          priority
          quality={100}
          // object-right: රූපය දකුණු දාරයට ඇදේ
          // object-cover: මුළු තිරයම ආවරණය කරයි
          // scale-x-[-1]: Mirror කරයි
          className="object-cover object-right scale-x-[-1] opacity-35 mt-10 xl:mx-100"
        />{" "}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0a0a0a]/60 to-[#0a0a0a]" />
      </div>

      {/* LAYER 2: Content Layer that scrolls directly over the fixed image */}
      <div className="relative z-10 w-full">
        {/* Empty Full-Screen Spacer: Shows ONLY the image with no text when the page loads */}
        <div className="w-full h-70 flex flex-col items-center justify-end pb-12">
          {/* Optional: Subtle minimal scroll indicator */}
          <div className="animate-bounce text-zinc-500 text-xs uppercase tracking-widest font-medium opacity-70">
            Scroll Down ↓
          </div>
        </div>

        {/* Text Content Container (Starts immediately after scrolling past the first viewport height) */}
        <div className="max-w-5xl mx-auto w-full px-6 md:px-16 pb-32 pt-20">
          {/* 1. Main Heading */}
          <ScrollReveal>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-20">
              About Me.
            </h1>
          </ScrollReveal>

          {/* 2. Core Profile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <ScrollReveal delay={0.1}>
              <div className="text-zinc-300 space-y-6">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  Profile Overview
                </h3>
                <p className="text-lg leading-relaxed">
                  I am a highly motivated BEng Software Engineering student with
                  a solid academic foundation built through the Java Institute
                  for Advanced Technology[cite: 1]. Exceptionally proficient in
                  structural time management and creative critical thinking, I
                  actively seek high-impact opportunities to contribute to
                  cutting-edge research and deployment in emerging digital
                  technologies[cite: 1].
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-zinc-300 space-y-6">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  My Commitment
                </h3>
                <p className="text-lg leading-relaxed">
                  I am firmly committed to non-stop continuous learning, always
                  striving to stay ahead of architectural changes[cite: 1]. I
                  stand poised to map advanced theoretical computer science
                  concepts directly onto real-world computing challenges, making
                  applications efficient, maintainable, and completely
                  production-ready[cite: 1].
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-zinc-800/60 my-16" />

          {/* 3. Dedicated Professional Experience Section */}
          <section className="mb-24">
            <ScrollReveal>
              <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-10">
                Professional Experience
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-xl p-6 md:p-8 space-y-4 hover:border-zinc-800 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h4 className="text-white font-bold text-xl tracking-tight">
                      Full Stack Web Developer Intern
                    </h4>
                    <p className="text-zinc-400 text-md font-medium mt-1">
                      Xess Global
                    </p>
                  </div>
                  <span className="text-xs text-zinc-300 uppercase tracking-widest font-semibold bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 w-fit whitespace-nowrap">
                    2024 October — 2025 April
                  </span>
                </div>
                <p className="text-zinc-300 text-base leading-relaxed pt-2">
                  Completed a highly intensive six-month in-house internship
                  where I gained hands-on experience in developing scalable
                  websites, building structural backend APIs, and heavily
                  customizing advanced enterprise systems like Perfex CRM and
                  Rocket LMS[cite: 1]. Engineered robust integrations utilizing
                  both the CodeIgniter and Laravel frameworks[cite: 1]. Greatly
                  refined my collaborative development framework, teamwork
                  dynamics, and communication skills by working
                  shoulder-to-shoulder with internal development and UI/UX
                  design teams in an agile professional environment[cite: 1].
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-zinc-800/60 my-16" />

          {/* 4. Refactored Academic & Certification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            {/* Left Column: Education History */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-10">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  Education
                </h3>

                <div className="space-y-2 border-l-2 border-zinc-800 pl-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    2021 — 2025
                  </p>
                  <h4 className="text-white font-semibold text-lg">
                    BEng (Hons) Software Engineering
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    IIC University of Technology (IIC), Cambodia / Java
                    Institute[cite: 1]
                  </p>
                </div>

                <div className="space-y-2 border-l-2 border-zinc-800 pl-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    2019
                  </p>
                  <h4 className="text-white font-semibold text-lg">
                    GCE Advanced Level Examination
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Mathematics Stream (2C passes and 1 S pass)[cite: 1]
                  </p>
                  <p className="text-zinc-500 text-xs italic">
                    R/Emb/Moraketiya Maha Vidyalaya, Embilipitiya[cite: 1]
                  </p>
                </div>

                <div className="space-y-2 border-l-2 border-zinc-800 pl-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    2016
                  </p>
                  <h4 className="text-white font-semibold text-lg">
                    GCE Ordinary Level Examination
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Passed with Distinction (9 As)[cite: 1]
                  </p>
                  <p className="text-zinc-500 text-xs italic">
                    R/Emb/Moraketiya Maha Vidyalaya, Embilipitiya[cite: 1]
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Technical & Academic Qualifications */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-10">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  Qualifications & Certifications
                </h3>

                <div className="space-y-2 border-l-2 border-zinc-800 pl-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    2024
                  </p>
                  <h4 className="text-white font-semibold text-lg">
                    Developer Stack Master Program Course
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Advanced engineering program specializing in comprehensive
                    stack modern architectures[cite: 1].
                  </p>
                </div>

                <div className="space-y-2 border-l-2 border-zinc-800 pl-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    2025
                  </p>
                  <h4 className="text-white font-semibold text-lg">
                    Diploma in English
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    SITC Campus — Professional technical communication
                    certification[cite: 1].
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-zinc-800/60 my-16" />

          {/* 5. Standalone Extracurricular Activities & Languages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            {/* Left Block: Standalone Extracurricular Section */}
            <ScrollReveal delay={0.4}>
              <div className="space-y-8">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  Extracurricular Activities
                </h3>

                <div className="space-y-6">
                  <div className="border-l-2 border-zinc-800 pl-4 space-y-1">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                      2015
                    </p>
                    <h4 className="text-white font-semibold text-md">
                      Senior Prefect
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      R/Emb/Moraketiya Maha Vidyalaya, Embilipitiya[cite: 1]
                    </p>
                    <p className="text-zinc-500 text-xs">
                      School Student Leader Association[cite: 1]
                    </p>
                  </div>

                  <div className="border-l-2 border-zinc-800 pl-4 space-y-1">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                      2013
                    </p>
                    <h4 className="text-white font-semibold text-md">
                      Junior Prefect
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      R/Emb/Moraketiya Maha Vidyalaya, Embilipitiya[cite: 1]
                    </p>
                    <p className="text-zinc-500 text-xs">
                      School Student Leader Association[cite: 1]
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Block: Languages Skills */}
            <ScrollReveal delay={0.5}>
              <div className="space-y-6">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  Language Skills
                </h3>
                <p className="text-zinc-300 text-base leading-relaxed">
                  Bi-lingual proficiency in structural{" "}
                  <strong className="text-zinc-100">English</strong> and native{" "}
                  <strong className="text-zinc-100">Sinhala</strong>{" "}
                  communication[cite: 1].
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-lg p-4 italic">
                  Recipient of multiple Sinhala Language Day Certificates
                  (awarded both at the Divisional level 2011 - 2016 and
                  Provincial tier) recognizing competitive excellence in
                  creative writing, classical literature analysis, and poem
                  composition[cite: 1].
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-zinc-800/60 my-16" />

          {/* 6. Fields of Interest & Hobbies Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal delay={0.6}>
              <div className="space-y-4">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  Core Engineering Targets
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Software Engineering (JAVA)",
                    "Back-end Development",
                    "Front-end Development",
                    "Cloud Architecture",
                    "n8n AI Workflow Automation",
                  ].map((interest, i) => (
                    <span
                      key={i}
                      className="bg-zinc-900/90 text-zinc-200 text-xs px-3 py-1.5 rounded-md border border-zinc-800 font-medium backdrop-blur-sm"
                    >
                      {interest}[cite: 1]
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="space-y-4">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">
                  Personal Hobbies
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed pt-2">
                  Outside the coding IDE environment, I actively find creative
                  perspective through professional{" "}
                  <strong className="text-zinc-100">Video Editing</strong> or
                  seeking geographical inspiration when{" "}
                  <strong className="text-zinc-100">Traveling</strong> across
                  countries[cite: 1].
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
