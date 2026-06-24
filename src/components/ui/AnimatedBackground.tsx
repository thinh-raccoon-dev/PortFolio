"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

/**
 * Aurora-style background: a few large blurred gradient blobs that drift
 * slowly and infinitely. Sits behind all content (fixed, -z).
 */
export default function AnimatedBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const blobs = gsap.utils.toArray<HTMLElement>(".blob");

        blobs.forEach((blob, i) => {
          gsap.to(blob, {
            x: () => gsap.utils.random(-120, 120),
            y: () => gsap.utils.random(-100, 100),
            scale: () => gsap.utils.random(0.85, 1.25),
            duration: () => gsap.utils.random(8, 14),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.6,
          });
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="blob"
        style={{
          top: "-10%",
          left: "-5%",
          width: "45vw",
          height: "45vw",
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.28), transparent 70%)",
        }}
      />
      <div
        className="blob"
        style={{
          top: "30%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.22), transparent 70%)",
        }}
      />
      <div
        className="blob"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "38vw",
          height: "38vw",
          background:
            "radial-gradient(circle at center, rgba(37,99,235,0.18), transparent 70%)",
        }}
      />
    </div>
  );
}
