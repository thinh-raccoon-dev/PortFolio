"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useApp } from "@/components/providers/AppProvider";
import WordsPullUpMultiStyle from "@/components/ui/WordsPullUpMultiStyle";
import AnimatedLetter from "@/components/ui/AnimatedLetter";

export default function About() {
  const { t, locale } = useApp();
  const bodyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = t.about.body.split("");

  return (
    <section id="about" className="bg-[var(--bg)] py-20 md:py-32 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-[var(--bg-card)] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center transition-colors duration-300">
        <p className="text-primary text-[10px] sm:text-xs mb-6 tracking-widest uppercase">
          {t.about.label}
        </p>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12">
          <WordsPullUpMultiStyle
            key={locale}
            segments={t.about.segments}
            containerClassName="text-primary"
          />
        </div>

        <div ref={bodyRef} className="max-w-2xl mx-auto" key={`body-${locale}`}>
          <p
            className="text-xs sm:text-sm md:text-base text-primary"
            style={{ lineHeight: 1.7 }}
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={`${locale}-${i}`}
                char={char}
                scrollYProgress={scrollYProgress}
                index={i}
                total={chars.length}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
