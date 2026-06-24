import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PreferencesBar from "@/components/ui/PreferencesBar";
import ProfileAvatar from "@/components/ui/ProfileAvatar";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ProfileAvatar />
      <PreferencesBar />
      <Navbar variant="fixed" />

      <SmoothScroll>
        <main className="bg-[var(--bg)] min-h-screen transition-colors duration-300">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
