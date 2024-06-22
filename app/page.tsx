import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Grid from "@/components/Grid";
import Sec from "@/components/Sec";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

// import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="bg-black-100">
      <Navbar />
      <Hero />
      <section id="about">
        <Grid />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="stack">
        <Stack />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
