// app/contact/page.tsx
"use client";

import { FormEvent } from "react";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";
import Magnetic from "../../components/Magnetic";

// ඔබේ resources ෆෝල්ඩරයේ ඇති රූපය නිවැරදිව import කරගැනීම
import contactBgImage from "../resources/images/my2.png";

export default function ContactPage() {
  
  // පෝරමය යවන විට (Submit කරද්දී) සිදුවන දේ පාලනය කරන Function එක
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // පිටුව Refresh වීම වළක්වයි
    alert("ඔබගේ පණිවිඩය සාර්ථකව යොමු කරන ලදී!");
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      
      {/* LAYER 1: Fixed Background Image Layer (තිරය පිටුපස සවි වී පවතින රූපය) */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <Image
          src={contactBgImage}
          alt="Charith Jayanath Contact Background"
          priority
          quality={100}
          className="object-cover opacity-35 mt-10 xl:mx-100" // රූපයේ දීප්තිය පාලනය කිරීමට opacity වෙනස් කළ හැක
        />
        {/* Input fields සහ Text පැහැදිලිව පෙනීමට යොදන ලද අඳුරු gradient overlay එක */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0a0a0a]/60 to-[#0a0a0a]" />
      </div>

      {/* LAYER 2: Content Layer (රූපයට උඩින් scroll වන සියලුම කොටස්) */}
      <div className="relative z-10 w-full bg-transparent">
        
        {/* මුලින්ම රූපය පමණක් පෙන්වීමට යොදා ඇති හිස් මුළු තිරයම වැසෙන Spacer කොටස */}
        <div className="w-full h-70 flex flex-col items-center justify-end pb-12">
          <div className="animate-bounce text-xs uppercase tracking-widest text-zinc-500 font-medium">
            Get In Touch ↓
          </div>
        </div>

        {/* ප්‍රධාන Content Container එක (Spacer එකට පසුව ආරම්භ වේ) */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 pb-32 pt-20">
          
          {/* ප්‍රධාන මාතෘකාව */}
          <ScrollReveal>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-20">
              Hello.
            </h1>
          </ScrollReveal>

          {/* Form එක සහ විස්තර අඩංගು Grid එක */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
            
            {/* වම් පස: Contact Form */}
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-12 bg-black/10 p-6 md:p-10 rounded-2xl backdrop-blur-md border border-zinc-900/40">
                
                {/* නම ඇතුළත් කරන තීරුව */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    What's your name?
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="John Doe *"
                    className="bg-transparent border-b border-zinc-800 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* ඊමේල් එක ඇතුළත් කරන තීරුව */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    What's your email?
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="john@example.com *"
                    className="bg-transparent border-b border-zinc-800 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* පණිවිඩය ඇතුළත් කරන තීරුව */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    Tell me about your project or opportunity
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    placeholder="Hello Charith, I would like to discuss... *"
                    className="bg-transparent border-b border-zinc-800 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit බොත්තම */}
                <div className="mt-8 self-start">
                  <Magnetic>
                    <button 
                      type="submit"
                      className="group flex items-center gap-4 text-2xl font-medium text-white hover:text-zinc-300 transition-colors"
                    >
                      Send Message
                      <span className="text-zinc-500 group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </Magnetic>
                </div>

              </form>
            </ScrollReveal>

            {/* දකුණු පස: Contact Details */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col gap-16 pt-4">
                
                {/* ඊමේල් සහ දුරකථන */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Contact Details</h3>
                  <div className="flex flex-col gap-4 text-2xl md:text-3xl font-medium">
                    <a href="mailto:bgcjayanath2000@gmail.com" className="hover:text-zinc-400 text-white transition-colors break-words">
                      bgcjayanath2000@gmail.com
                    </a>
                    <a href="tel:+94727239753" className="hover:text-zinc-400 text-white transition-colors">
                      +94 72 723 9753
                    </a>
                  </div>
                </div>

                {/* ලිපිනය */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Location</h3>
                  <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed max-w-sm">
                    No: 2213, Nidahas Mawatha,<br/>
                    Moraketiya, Embilipitiya,<br/>
                    70200, Sri Lanka
                  </p>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </main>
  );
}