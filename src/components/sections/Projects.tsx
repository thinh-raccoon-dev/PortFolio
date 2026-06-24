"use client";

import { useApp } from "@/components/providers/AppProvider";
import FeatureCard from "@/components/ui/FeatureCard";
import WordsPullUpMultiStyle from "@/components/ui/WordsPullUpMultiStyle";
import { projects, type Project } from "@/lib/data";

function ProjectMediaCard({
  project,
  title,
  index,
}: {
  project: Project;
  title: string;
  index: number;
}) {
  const href = project.live || project.github;

  return (
    <FeatureCard index={index} className="h-64 md:h-full group">
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={title}
        />
      )}
      {project.video ? (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-card-alt)] to-[var(--bg)]" />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, var(--card-overlay), transparent, transparent)`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 z-[1]">
        <p className="font-medium text-sm md:text-base text-[var(--hero-text)]">
          {title}
        </p>
      </div>
    </FeatureCard>
  );
}

export default function Projects() {
  const { t, locale } = useApp();

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[var(--bg)] py-20 md:py-32 px-4 overflow-hidden transition-colors duration-300"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <WordsPullUpMultiStyle
            key={`h1-${locale}`}
            segments={[{ text: t.projects.heading1, className: "text-primary" }]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 block w-full"
          />
          <WordsPullUpMultiStyle
            key={`h2-${locale}`}
            segments={[
              { text: t.projects.heading2, className: "text-[var(--muted-gray)]" },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {projects.map((project, i) => {
            const pt = t.projects.items[project.id];
            return (
              <ProjectMediaCard
                key={project.id}
                project={project}
                title={pt.title}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
