// app/studio/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../../components/ScrollReveal";

const rowsData = [
  { id: "001", title: "We collaborate", desc: "Hyper-collaboration supercharges creativity. Together, we make your vision manifest." },
  { id: "002", title: "We discover", desc: "We believe in the beauty of the brief. Unlike agencies, we don't expect you to create the perfect scope only to be then charged for 'unforeseen costs.' We craft the brief with you, not for you." },
  { id: "003", title: "We specialise", desc: "Instead of painting with a broad brush, we narrow in on the detail by specialising in UX and UI. We never compromise on aesthetics or function." },
  { id: "004", title: "We become your team", desc: "We make sure you have a Senior team member dedicated to your project. Undivided attention, no cut corners. Just dedicated experts." },
  { id: "005", title: "We design for growth", desc: "We design with your end-customer in mind. If it doesn't mine growth for your company, then it's doing nothing for your business." }
];

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

function StudioRow({ data, index }: { data: any; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // පේළිය තිරයේ උඩම ගැටෙන මොහොතේ සිට ඇනිමේෂන් එක පටන් ගනී
    offset: ["start start", "end start"]
  });

  // 1. Scroll කරන ප්‍රමාණයට සමානුපාතිකව රූපය 160px සිට 50px දක්වා ක්‍රමයෙන් කුඩා වේ
  const shapeSize = useTransform(scrollYProgress, [0, 0.5], [160, 50]);
  
  // 2. අකුරු වල Opacity එක 1 සිට 0 දක්වා ක්‍රමයෙන් අඩු වේ
  const pOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  // 3. වැදගත්ම දේ: උස එකපාර බිංදුව නොවී, 200px සිට 0px දක්වා ඉතාමත් සුමටව අඩුවේ.
  const pMaxHeight = useTransform(scrollYProgress, [0, 0.5], ["200px", "0px"]);

  return (
    /* Scroll කිරීම සඳහා ලබා දෙන කාල සීමාව (Track) */
    <div ref={containerRef} className="w-full h-[120vh] relative">
      
      {/* Sticky රාමුව - h-auto නිසා අකුරු හැංගෙද්දී මෙහි උසත් ක්‍රමයෙන් අඩුවේ */}
      <div className="sticky top-0 w-full bg-[#0a0a0a] flex flex-col md:flex-row gap-6 md:gap-16 border-t border-zinc-800 pt-10 md:pt-16 pb-6 items-start z-10">
        
        {/* වම් පස: අංකය සහ ජ්‍යාමිතික හැඩතලය (items-start නිසා මේවා හැමවිටම ඉහළින්ම පවතී) */}
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

        {/* දකුණු පස: මාතෘකාව සහ ක්‍රමයෙන් හැංගෙන විස්තරය */}
        <div className="w-full md:w-2/3 flex flex-col justify-start">
          <h3 className="text-4xl md:text-[5vw] leading-[1.1] font-medium tracking-tight text-white mb-2">
            {data.title}
          </h3>

          <motion.div
            style={{ maxHeight: pMaxHeight, opacity: pOpacity }}
            className="overflow-hidden"
          >
            {/* උස අඩුවීම මේ කොටුවට අදාළ වන නිසා, මෙය කිසිදු ගැස්සීමකින් තොරව ක්‍රමයෙන් වැසී යයි */}
            <p className="text-xl md:text-3xl text-zinc-400 leading-relaxed max-w-2xl pt-6">
              {data.desc}
            </p>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 px-6 md:px-16 pb-40">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ප්‍රධාන මාතෘකාව */}
        <ScrollReveal>
          <div className="mb-32 mt-10">
            <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-[0.9] text-white mb-20 max-w-5xl">
              Design that comes from the heart and mind
            </h1>
            
            <div className="w-full aspect-[21/9] bg-zinc-900 rounded-sm mb-20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm tracking-widest uppercase">
                Image / Video Grid Placeholder
              </div>
            </div>

            <p className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.3] max-w-6xl">
              We mix traditions and create a new culture of design where nothing is assumed and everything is tested; a culture where we take what works and discard what doesn't.
            </p>
          </div>
        </ScrollReveal>

        {/* සජීවීකරණය වන පේළි අඩංගු කොටස */}
        <div className="mt-40">
          
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

      </div>
    </main>
  );
}