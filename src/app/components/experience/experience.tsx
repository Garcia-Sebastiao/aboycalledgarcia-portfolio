import { AnimatedDescription } from "@/components/shared/animated-description";
import { Title } from "@/components/shared/title";

import { BrandsList } from "./components/brands-list";
import { Timeline } from "./components/timeline";

export function Experience() {
  return (
    <section className="container mx-auto mt-20 flex flex-col items-center gap-y-20">
      <div className="flex flex-col items-center gap-y-6">
        <Title className="max-w-2xl!" line1="Explore between" line2="my journeys." />

        <AnimatedDescription className="max-w-xl">
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with a strong focus on performance and
          user experience. My work spans from corporate management platforms and
          event systems to streaming services and interactive digital
          experiences.
        </AnimatedDescription>
      </div>

      <div>
        <BrandsList />
        <Timeline />
      </div>
    </section>
  );
}
