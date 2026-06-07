import { Title } from "@/components/shared/title";
import { AnimatedDescription } from "@/components/shared/animated-description";
import { ProjectMarquee } from "./projects-marquee";


export function Projects() {
  return (
    <div className="w-full relative items-center flex flex-col gap-y-12">
      
      <div className="flex px-2 flex-col items-center gap-y-6">
        <Title className="max-w-3xl!" line1="Check out some" line2="projects i worked on." />

        <AnimatedDescription className="text-white/60 max-w-191 leading-7 text-center">
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with strong focus on performance and UX.
        </AnimatedDescription>
      </div>

      <ProjectMarquee />
    </div>
  );
}