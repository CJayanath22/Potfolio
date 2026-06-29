// app/work/page.tsx
"use client";

import ScrollReveal from "../../components/ScrollReveal";
import ParallaxCard from "../../components/ParallaxCard";

// 1. අපේ නිර්මාණ වල දත්ත ලැයිස්තුව (Data Array)
const projectsData = [
  {
    title: "Hyperion Digital Platform",
    category: "Branding / Web Design",
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
  },
  {
    title: "Nova Architecture Studio",
    category: "Creative Development",
    imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
  },
  {
    title: "Aether Capsule Collection",
    category: "Art Direction",
    imgUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200"
  },
  {
    title: "Lumina Smart Home",
    category: "UI/UX App Design",
    imgUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200"
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-40 px-6 md:px-16 pb-32">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* 2. පිටුවේ ප්‍රධාන මාතෘකාව */}
        <ScrollReveal>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-20">
            Our Work.
          </h1>
        </ScrollReveal>

        {/* 3. Cards පෙන්වන Grid එක */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          
          {/* 4. Array එක හරහා Loop කරමින් Cards නිර්මාණය කිරීම */}
          {projectsData.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ParallaxCard 
                title={project.title} 
                category={project.category} 
                imgUrl={project.imgUrl} 
              />
            </ScrollReveal>
          ))}

        </div>
      </div>
    </main>
  );
}