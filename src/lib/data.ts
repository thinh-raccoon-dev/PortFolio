export const siteConfig = {
  name: "Lại Văn Thịnh",
  heroName: "Thịnh",
  email: "thinh.raccoon@gmail.com",
  github: "https://github.com/thinh-raccoon-dev",
  phone: "0559642921",
  zalo: "0559642921",
  telegram: "https://t.me/RaccoonDev0109",
  telegramHandle: "@RaccoonDev0109",
};

export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

export const PROJECT_VIDEOS = {
  coffee: "/kahve%20kahve.mp4",
  phim: "/Pika.mp4",
} as const;

export type Project = {
  id: string;
  github?: string;
  live?: string;
  image?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    id: "rimberio-coffee",
    github: "https://github.com/thinh-raccoon-dev/RimberioCoffee",
    live: "https://thinh-raccoon-dev.github.io/RimberioCoffee/",
    video: PROJECT_VIDEOS.coffee,
  },
  {
    id: "raccoon-phim",
    github: "https://github.com/thinh-raccoon-dev/Raccoon.phimV1.0.0",
    live: "https://raccoon-phim-v1-0-0.vercel.app/",
    video: PROJECT_VIDEOS.phim,
  },
  {
    id: "portfolio",
    github: "https://github.com/thinh-raccoon-dev/PortFolio",
    image: "/c1.jpg",
  },
];

export type SkillCategory = {
  id: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "GSAP",
    ],
  },
  {
    id: "Tools & Workflow",
    skills: ["Git", "Vite", "Webpack", "Figma", "VS Code", "npm / pnpm"],
  },
  {
    id: "Currently Learning",
    skills: ["Three.js", "Framer Motion", "Node.js", "PostgreSQL"],
  },
];

export const contactLinks = [
  {
    id: "GitHub",
    value: "thinh-raccoon-dev",
    href: siteConfig.github,
    external: true,
  },
  {
    id: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    id: "Zalo",
    value: siteConfig.zalo,
    href: `https://zalo.me/${siteConfig.zalo}`,
    external: true,
  },
  {
    id: "Telegram",
    value: siteConfig.telegramHandle,
    href: siteConfig.telegram,
    external: true,
  },
];
