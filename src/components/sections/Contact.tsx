"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useApp } from "@/components/providers/AppProvider";
import WordsPullUpMultiStyle from "@/components/ui/WordsPullUpMultiStyle";
import { GithubIcon } from "@/components/icons";
import { contactLinks, siteConfig } from "@/lib/data";
import { getGmailComposeUrl } from "@/lib/i18n/translations";

function ContactIcon({ id }: { id: string }) {
  if (id === "GitHub") return <GithubIcon size={16} />;
  if (id === "Email") return <Mail size={16} />;
  if (id === "Zalo") return <Phone size={16} />;
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

export default function Contact() {
  const { t, locale } = useApp();
  const gmailUrl = getGmailComposeUrl(locale, siteConfig.email);

  return (
    <section id="contact" className="bg-[var(--bg)] py-20 md:py-32 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-[var(--bg-card)] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center transition-colors duration-300">
        <p className="text-primary text-[10px] sm:text-xs mb-6 tracking-widest uppercase">
          {t.contact.label}
        </p>

        <div className="text-3xl sm:text-4xl md:text-5xl mb-8">
          <WordsPullUpMultiStyle
            key={locale}
            segments={[
              {
                text: t.contact.heading,
                className: "text-primary font-serif italic",
              },
            ]}
            containerClassName="text-3xl sm:text-4xl md:text-5xl"
          />
        </div>

        <motion.p
          className="text-primary/70 text-xs sm:text-sm md:text-base mb-10 max-w-lg mx-auto"
          style={{ lineHeight: 1.7 }}
          initial={false}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.contact.description}
        </motion.p>

        <motion.div
          initial={false}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-4 pr-1 py-1 font-medium text-sm sm:text-base text-[var(--btn-text)]"
          >
            <Mail size={16} className="ml-1" />
            {t.contact.sayHello}
            <span className="bg-[var(--nav-bg)] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <ArrowRight size={16} className="text-primary" />
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card-alt)] px-4 py-3 text-left hover:border-primary/40 transition-colors"
              initial={false}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6 + i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="text-primary">
                <ContactIcon id={link.id} />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--muted-gray)]">
                  {t.contact.links[link.id].label}
                </p>
                <p className="text-primary/80 text-xs sm:text-sm">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
