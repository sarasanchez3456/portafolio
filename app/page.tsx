import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <AboutMe />
      <Projects />
      <Technologies />
      <CallToAction />
      <Footer />
    </main>
  );
}
