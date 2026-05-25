import { About } from "./components/about";
import { Experience } from "./components/experience/experience";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full flex flex-col items-center gap-y-42.5">
        <About />
        <Experience />
      </div>
    </div>
  );
}
