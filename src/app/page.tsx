import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Faqs } from "./components/faqs";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";
import { MainExperience } from "./components/experience/main-experience";

export default function Home() {

  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <div className="w-full flex relative flex-col items-center gap-y-24 lg:gap-y-42.5">
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
