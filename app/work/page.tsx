// app/work/page.tsx
"use client";

import ScrollReveal from "../../components/ScrollReveal";
import ParallaxCard from "../../components/ParallaxCard";

// 1. Technical projects data array populated with your exact engineering experience
const projectsData = [
  {
    title: "Production-Ready ASP.NET Core Web API",
    category: "Backend Architecture / Clean Architecture / Docker",
    imgUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200"
  },
  {
    title: "Angular & Spring Boot E-Commerce Web Application",
    category: "Full-Stack Development / JWT / Hibernate ORM",
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
  },
  {
    title: "Node.js, Express & MongoDB Full-Stack Backend",
    category: "REST API Design / JWT / Secure Transaction Systems",
    imgUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200"
  },
  {
    title: "Java-Based Android Application with Firebase",
    category: "Mobile App Development / Cloud Storage / Firestore",
    imgUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200"
  },
  {
    title: "Java-Based Textile Shop POS Standalone System",
    category: "Desktop Software / MySQL / Jasper Reporting",
    imgUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200"
  },
  {
    title: "PHP Full-Stack E-Commerce Management Platform",
    category: "Web Application / MySQL / Secure Admin Panel",
    imgUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1200"
  },
  {
    title: "AI Agents & Workflow Automation via n8n",
    category: "Intelligent Systems / Chatbots / Process Automation",
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-40 px-6 md:px-16 pb-32">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* 2. Personalized Section Header */}
        <ScrollReveal>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-20">
            My Work.
          </h1>
        </ScrollReveal>

        {/* 3. Cards display Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          
          {/* 4. Map looping system rendering custom cards */}
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