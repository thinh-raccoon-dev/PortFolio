"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useApp } from "@/components/providers/AppProvider";
import WordsPullUpMultiStyle from "@/components/ui/WordsPullUpMultiStyle";
import { skillCategories } from "@/lib/data";

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

function SkillCard({
  index,
  category,
  skills,
}: {
  index: number;
  category: string;
  skills: string[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl bg-[var(--bg-card-alt)] p-6 flex flex-col gap-4 transition-colors duration-300"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: CARD_EASE }}
    >
      <h3 className="text-primary text-[10px] sm:text-xs font-medium uppercase tracking-widest">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[var(--muted-gray)] text-xs sm:text-sm px-3 py-1.5 rounded-full border border-[var(--border)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t, locale } = useApp();

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[var(--bg)] py-20 md:py-32 px-4 overflow-hidden transition-colors duration-300"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <WordsPullUpMultiStyle
            key={`s1-${locale}`}
            segments={[{ text: t.skills.heading1, className: "text-primary" }]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 block w-full"
          />
          <WordsPullUpMultiStyle
            key={`s2-${locale}`}
            segments={[
              { text: t.skills.heading2, className: "text-[var(--muted-gray)]" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-2">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.id}
              index={i}
              category={t.skills.categories[cat.id].category}
              skills={cat.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
