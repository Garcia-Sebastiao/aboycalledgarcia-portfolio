import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience/experience";
import { Faqs } from "./components/faqs";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <div className="w-full flex relative flex-col items-center gap-y-42.5">
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
