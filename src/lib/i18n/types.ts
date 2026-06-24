export type Locale = "en" | "vi";
export type Theme = "dark" | "light";

export type AboutSegment = {
  text: string;
  className?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ProjectTranslation = {
  title: string;
  tags: string[];
};

export type SkillCategoryTranslation = {
  category: string;
};

export type ContactLinkTranslation = {
  label: string;
};

export type Translations = {
  nav: NavItem[];
  hero: {
    description: string;
    cta: string;
  };
  about: {
    label: string;
    segments: AboutSegment[];
    body: string;
  };
  projects: {
    heading1: string;
    heading2: string;
    viewProject: string;
    items: Record<string, ProjectTranslation>;
  };
  skills: {
    heading1: string;
    heading2: string;
    categories: Record<string, SkillCategoryTranslation>;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    sayHello: string;
    links: Record<string, ContactLinkTranslation>;
  };
  footer: {
    builtWith: string;
  };
  preferences: {
    language: string;
    theme: string;
    light: string;
    dark: string;
  };
};
