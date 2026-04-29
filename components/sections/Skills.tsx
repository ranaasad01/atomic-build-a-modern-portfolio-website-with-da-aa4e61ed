"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

const categoryColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  Frontend: {
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
    text: "text-indigo-700 dark:text-indigo-300",
    border: "border-indigo-200 dark:border-indigo-800/50",
    dot: "bg-indigo-500",
  },
  Backend: {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-800/50",
    dot: "bg-violet-500",
  },
  "Tools & DevOps": {
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    text: "text-cyan-700 dark:text-cyan-300",
    border: "border-cyan-200 dark:border-cyan-800/50",
    dot: "bg-cyan-500",
  },
  Design: {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-800/50",
    dot: "bg-rose-500",
  },
};

const categoryIcons: Record<string, string> = {
  Frontend: "⚡",
  Backend: "🔧",
  "Tools & DevOps": "🛠️",
  Design: "🎨",
};

const categories = ["Frontend", "Backend", "Tools & DevOps", "Design"] as const;

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 mb-4">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Technologies I work with
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
              A curated toolkit built over years of shipping production software across diverse domains.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, catIdx) => {
            const catSkills = skills.filter((s) => s.category === category);
            const colors = categoryColors[category];
            return (
              <ScrollReveal key={category} delay={catIdx * 0.1} direction="up">
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800/60 transition-all duration-300">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
                      {categoryIcons[category]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {category}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {catSkills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.05 + skillIdx * 0.04, duration: 0.3 }}
                        className={[
                          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all hover:scale-105 cursor-default",
                          colors.bg,
                          colors.text,
                          colors.border,
                        ].join(" ")}
                      >
                        <span className={["w-1.5 h-1.5 rounded-full flex-shrink-0", colors.dot].join(" ")} />
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Proficiency legend */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
              Core expertise at a glance
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/50 dark:to-violet-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
