"use client";

import { motion } from "framer-motion";
import { User, Code, Target, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Code,
    title: "Engineering",
    description: "I write clean, typed, and scalable code. Next.js, Node, and Python are my daily drivers.",
    glow: "rgba(59,130,246,0.2)",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Target,
    title: "Product-Minded",
    description: "I care about the user. A feature isn't done when the code works, it's done when it solves the problem.",
    glow: "rgba(139,92,246,0.2)",
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]" />
      
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        
        {/* Left: Text & Story */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-400 w-fit mb-6">
            <User size={14} />
            About Me
          </div>
          
          <h2 className="text-4xl font-black text-white md:text-5xl mb-6">
            Hi, I&apos;m Denis. I turn complex problems into <span className="gradient-text">elegant software</span>.
          </h2>
          
          <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
            <p>
              I am a Full-Stack and AI Engineer based in Kenya. I specialize in building end-to-end platforms—from 
              architecting scalable cloud backends to crafting premium, motion-rich user interfaces.
            </p>
            <p>
              I don&apos;t just write code; I build products. Whether it&apos;s integrating AI tutors or 
              automating complex business workflows like WiFi billing systems, I focus on delivering real-world value fast.
            </p>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <MapPin size={16} className="text-emerald-400" />
              Nairobi, Kenya (Remote)
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="status-dot" />
              Available for new roles
            </div>
          </div>
        </motion.div>

        {/* Right: Credibility Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          {pillars.map((pillar) => (
             <div 
               key={pillar.title}
               className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f1a] p-6 transition-all duration-300 hover:border-white/15"
             >
               <div 
                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{ background: `radial-gradient(250px circle at 100% 0%, ${pillar.glow}, transparent 80%)` }}
               />
               <div className={`mb-4 inline-flex items-center justify-center rounded-xl border p-2.5 ${pillar.color}`}>
                 <pillar.icon size={20} />
               </div>
               <h3 className="mb-2 text-lg font-bold text-white">{pillar.title}</h3>
               <p className="text-sm leading-relaxed text-slate-500">{pillar.description}</p>
             </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
