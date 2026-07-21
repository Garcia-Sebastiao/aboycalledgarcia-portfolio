import { About } from "./components/about/about";
import { Contact } from "./components/contact";
import { Faqs } from "./components/faqs/faqs";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects/projects";
import { Testimonials } from "./components/testimonials/testimonials";
import { MainExperience } from "./components/experience/main-experience";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <div className="w-full flex relative flex-col items-center gap-y-12 lg:gap-y-24">
        <Particles
          className="absolute inset-0 z-0"
          quantity={150}
          ease={10}
          color="#fff"
          size={0.2}
          refresh
        />
        <About />
        <MainExperience />
        <Projects />
        <Testimonials />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
