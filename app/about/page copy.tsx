// app/about/page.tsx
"use client";

import ScrollReveal from "../../components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-40 px-6 md:px-16 pb-32">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* 1. ප්‍රධාන මාතෘකාව */}
        <ScrollReveal>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-20">
            We are a creative studio.
          </h1>
        </ScrollReveal>

        {/* 2. විස්තර කොටස (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <ScrollReveal delay={0.2}>
            <div className="text-zinc-400 space-y-6">
              <h3 className="text-white text-xl font-bold uppercase">Our Philosophy</h3>
              <p className="text-lg leading-relaxed">
                අපි හිතන්නේ නිර්මාණයක් කියන්නේ ලස්සනට පේන දෙයක් විතරක් නෙවෙයි. ඒක ව්‍යාපාරයක අනාගතය වෙනස් කරන බලවේගයක්. අපි දත්ත සහ කලාව එකතු කරලා වෙනස්ම අත්දැකීම් නිර්මාණය කරන්නමු.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-zinc-400 space-y-6">
              <h3 className="text-white text-xl font-bold uppercase">Our Approach</h3>
              <p className="text-lg leading-relaxed">
                සෑම ව්‍යාපෘතියකදීම අපි ගැඹුරින් අධ්‍යයනය කර, අනවශ්‍ය දේවල් අයින් කරලා, සරල සහ බලවත් විසඳුම් ලබා දෙන්න කැපවෙනවා. අපේ අරමුණ Uncommon දේවල් නිර්මාණය කිරීමයි.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}