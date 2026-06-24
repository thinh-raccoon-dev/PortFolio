"use client";

import Image from "next/image";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { siteConfig } from "@/lib/data";

export default function ProfileAvatar() {
  const handleClick = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo("#about", true, "top 80px");
    } else {
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed top-4 left-4 z-[70] w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[var(--border)] bg-[var(--bg-card)] shadow-lg ring-2 ring-[var(--bg)]/50 hover:scale-105 transition-transform duration-300 cursor-pointer"
      aria-label={siteConfig.name}
    >
      <Image
        src="/c1.jpg"
        alt={siteConfig.name}
        width={44}
        height={44}
        className="w-full h-full object-cover object-top"
        priority
      />
    </button>
  );
}
