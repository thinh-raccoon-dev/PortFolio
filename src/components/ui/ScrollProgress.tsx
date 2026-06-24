"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.to(barRef.current, {
          scaleX: self.progress,
          duration: 0.2,
          ease: "none",
          overwrite: true,
        });
      },
    });
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full"
        style={{
          background: "linear-gradient(90deg, #DEDBC8 0%, #E1E0CC 100%)",
        }}
      />
    </div>
  );
}
