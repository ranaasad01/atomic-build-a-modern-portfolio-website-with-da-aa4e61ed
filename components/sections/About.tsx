"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Download, Github, Linkedin } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

const highlights = [
  { icon: "🚀", title: "Performance First", desc: "I obsess over Core Web Vitals and build apps that load in milliseconds." },
  { icon: "🎨", title: "Design-Minded", desc: "I bridge the gap between engineering and design to ship polished products." },
  { icon: "🤝", title: "Team Player", desc: "I thrive in collaborative environments and mentor junior developers." },
  { icon: "📚", title: "Always Learning", desc: "I stay current with the latest in web tech, AI tooling, and best practices." },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Crafting digital experiences
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                with purpose
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Avatar + meta */}
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                  <span className="text-7xl sm:text-8xl font-bold text-white/90 select-none">
                    AM
                  </span>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 rounded-xl px-3 py-2 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Available
                  </span>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                  </div>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-indigo-500" />
                  </div>
                  <span className="text-sm">{personalInfo.yearsExperience}+ years of experience</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-600 text-sm font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-600 text-sm font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Bio + highlights */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  {personalInfo.bioExtended}
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group"
                  >
                    <div className="text-2xl mb-2">{h.icon}</div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {h.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {h.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
