import type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      description:
        "Frontend Developer — Crafting fast, beautiful web experiences. I build performant, accessible web applications with clean code and smooth animations.",
      cta: "View Projects",
    },
    about: {
      label: "About Me",
      segments: [
        { text: "I'm Lại Văn Thịnh,", className: "font-normal" },
        { text: "a Frontend Developer.", className: "font-serif italic" },
        {
          text: "I craft fast, beautiful web experiences.",
          className: "font-normal",
        },
      ],
      body: "I'm a Frontend Developer passionate about building performant, accessible web applications with clean code and smooth animations. I love turning complex problems into elegant, user-friendly interfaces. When I'm not coding, you'll find me exploring new design trends, contributing to open source, or leveling up my animation skills.",
    },
    projects: {
      heading1: "Selected work from a growing portfolio.",
      heading2: "Built with care. Powered by code.",
      viewProject: "View project",
      items: {
        "rimberio-coffee": {
          title: "Rimberio Coffee",
          tags: [
            "Landing page",
            "HTML & CSS",
            "Responsive design",
            "GitHub Pages deploy",
          ],
        },
        "raccoon-phim": {
          title: "Raccoon.phim",
          tags: ["Next.js", "Vietsub HD", "OPhim API", "Vercel deploy"],
        },
        portfolio: {
          title: "Personal Portfolio",
          tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
        },
      },
    },
    skills: {
      heading1: "Technologies I work with daily.",
      heading2: "Always learning. Always building.",
      categories: {
        Frontend: { category: "Frontend" },
        "Tools & Workflow": { category: "Tools & Workflow" },
        "Currently Learning": { category: "Currently Learning" },
      },
    },
    contact: {
      label: "Get In Touch",
      heading: "Let's work together.",
      description:
        "I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — reach out via email, Zalo, or Telegram.",
      sayHello: "Say Hello",
      links: {
        GitHub: { label: "GitHub" },
        Email: { label: "Email" },
        Zalo: { label: "Zalo" },
        Telegram: { label: "Telegram" },
      },
    },
    footer: {
      builtWith: "Built with Next.js & Framer Motion.",
    },
    preferences: {
      language: "Language",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
    },
  },
  vi: {
    nav: [
      { label: "Giới thiệu", href: "#about" },
      { label: "Dự án", href: "#projects" },
      { label: "Kỹ năng", href: "#skills" },
      { label: "Liên hệ", href: "#contact" },
    ],
    hero: {
      description:
        "Lập trình viên Frontend — Tạo nên những trải nghiệm web nhanh và đẹp mắt. Tôi xây dựng ứng dụng web hiệu năng cao, dễ tiếp cận với code sạch và animation mượt mà.",
      cta: "Xem dự án",
    },
    about: {
      label: "Giới thiệu",
      segments: [
        { text: "Tôi là Lại Văn Thịnh,", className: "font-normal" },
        { text: "một Lập trình viên Frontend.", className: "font-serif italic" },
        {
          text: "Tôi tạo nên những trải nghiệm web nhanh và đẹp mắt.",
          className: "font-normal",
        },
      ],
      body: "Tôi là Lập trình viên Frontend đam mê xây dựng các ứng dụng web hiệu năng cao, dễ tiếp cận với code sạch và animation mượt mà. Tôi thích biến những bài toán phức tạp thành giao diện tinh tế, thân thiện với người dùng. Khi không code, bạn sẽ thấy tôi khám phá xu hướng thiết kế mới, đóng góp open source, hoặc nâng cao kỹ năng animation.",
    },
    projects: {
      heading1: "Các dự án đã triển khai thực tế.",
      heading2: "Làm với tâm huyết. Vận hành bằng code.",
      viewProject: "Xem dự án",
      items: {
        "rimberio-coffee": {
          title: "Rimberio Coffee",
          tags: [
            "Landing page",
            "HTML & CSS",
            "Responsive",
            "Deploy GitHub Pages",
          ],
        },
        "raccoon-phim": {
          title: "Raccoon.phim",
          tags: ["Next.js", "Vietsub HD", "OPhim API", "Deploy Vercel"],
        },
        portfolio: {
          title: "Portfolio cá nhân",
          tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
        },
      },
    },
    skills: {
      heading1: "Công nghệ tôi sử dụng hàng ngày.",
      heading2: "Luôn học hỏi. Luôn xây dựng.",
      categories: {
        Frontend: { category: "Frontend" },
        "Tools & Workflow": { category: "Công cụ & Quy trình" },
        "Currently Learning": { category: "Đang học thêm" },
      },
    },
    contact: {
      label: "Liên hệ",
      heading: "Cùng hợp tác nhé.",
      description:
        "Hiện tôi đang mở nhận cơ hội mới. Dù bạn có dự án, câu hỏi hay chỉ muốn chào hỏi — hãy liên hệ qua email, Zalo hoặc Telegram.",
      sayHello: "Gửi lời chào",
      links: {
        GitHub: { label: "GitHub" },
        Email: { label: "Email" },
        Zalo: { label: "Zalo" },
        Telegram: { label: "Telegram" },
      },
    },
    footer: {
      builtWith: "Xây dựng với Next.js & Framer Motion.",
    },
    preferences: {
      language: "Ngôn ngữ",
      theme: "Giao diện",
      light: "Sáng",
      dark: "Tối",
    },
  },
};

export function getGmailComposeUrl(locale: Locale, email: string) {
  const subject =
    locale === "vi"
      ? "Xin chào — Liên hệ từ portfolio"
      : "Hello — Portfolio contact";
  const body =
    locale === "vi" ? "Chào Lại Văn Thịnh,\n\n" : "Hi Lại Văn Thịnh,\n\n";

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
