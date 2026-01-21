import Hero from "@/components/Hero";
import Architecture from "@/components/Architecture";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      <Hero />
      <Architecture />
      <Metrics />
      <Experience />
      <Contact />
    </main>
  );
}
