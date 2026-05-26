import { About } from "./components/about";
import { Experience } from "./components/experience/experience";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full flex relative flex-col items-center gap-y-42.5">
        <About />
        <Experience />
        <Projects />
        <Testimonials />
      </div>
    </div>
  );
}
