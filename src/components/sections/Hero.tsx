"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from "@/components/layout/Navbar";
import { useApp } from "@/components/providers/AppProvider";
import WordsPullUp from "@/components/ui/WordsPullUp";
import { HERO_VIDEO, siteConfig } from "@/lib/data";

export default function Hero() {
  const { t } = useApp();

  const handleProjectsClick = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo("#projects", true, "top 80px");
    } else {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="h-screen p-4 md:p-6 bg-[var(--bg)] transition-colors duration-300">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to bottom, var(--hero-gradient-from), transparent, var(--hero-gradient-to))`,
          }}
        />

        <div className="absolute top-0 left-0 right-0 flex justify-center z-20 pr-20 sm:pr-24">
          <Navbar variant="embedded" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-12 items-end px-4 md:px-6 pb-6 md:pb-8">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] text-[var(--hero-text)]"
            >
              <WordsPullUp text={siteConfig.heroName} showAsterisk />
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-2 pl-0 lg:pl-4">
            <motion.p
              className="text-[var(--hero-text)]/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={handleProjectsClick}
                className="group flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-4 pr-1 py-1 font-medium text-sm sm:text-base text-[var(--btn-text)] cursor-pointer"
              >
                {t.hero.cta}
                <span className="bg-[var(--nav-bg)] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={16} className="text-primary" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
