// app/contact/page.tsx
"use client";

import { FormEvent } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import Magnetic from "../../components/Magnetic";

export default function ContactPage() {
  
  // පෝරමය යවන විට (Submit කරද්දී) සිදුවන දේ පාලනය කරන Function එක
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // පිටුව Refresh වීම වළක්වයි
    alert("ඔබගේ පණිවිඩය සාර්ථකව යොමු කරන ලදී!");
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-40 px-6 md:px-16 pb-32">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ප්‍රධාන මාතෘකාව */}
        <ScrollReveal>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-20">
            Hello.
          </h1>
        </ScrollReveal>

        {/* Form එක සහ විස්තර අඩංගු Grid එක */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          
          {/* වම් පස: Contact Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              
              {/* නම ඇතුළත් කරන තීරුව */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  What's your name?
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  placeholder="John Doe *"
                  className="bg-transparent border-b border-zinc-700 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* ඊමේල් එක ඇතුළත් කරන තීරුව */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  What's your email?
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  placeholder="john@example.com *"
                  className="bg-transparent border-b border-zinc-700 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* පණිවිඩය ඇතුළත් කරන තීරුව */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  Tell us about your project
                </label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  placeholder="Hello, I would like to discuss... *"
                  className="bg-transparent border-b border-zinc-700 py-4 text-xl text-white focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Submit බොත්තම */}
              <div className="mt-8 self-start">
                <Magnetic>
                  <button 
                    type="submit"
                    className="group flex items-center gap-4 text-2xl font-medium hover:text-zinc-300 transition-colors"
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
                <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Contact Details</h3>
                <div className="flex flex-col gap-2 text-2xl md:text-3xl font-medium">
                  <a href="mailto:hola@uncommonstudio.com.au" className="hover:text-zinc-400 transition-colors">
                    hola@uncommonstudio.com.au
                  </a>
                  <a href="tel:+61390000000" className="hover:text-zinc-400 transition-colors">
                    +61 3 9000 0000
                  </a>
                </div>
              </div>

              {/* ලිපිනය */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Location</h3>
                <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed max-w-sm">
                  10 Gwynne St,<br/>
                  Cremorne VIC 3121<br/>
                  Australia
                </p>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}