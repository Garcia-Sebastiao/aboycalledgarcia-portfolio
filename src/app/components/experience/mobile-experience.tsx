import { Title } from "@/components/shared/title";
import { AnimatedDescription } from "@/components/shared/animated-description";
import { MobileTimeline } from "./components/mobile-timeline";

export function MobileExperience() {
  return (
    <div className="w-full relative px-4 container mx-auto mt-20 items-center flex flex-col gap-y-20">
      <div className="flex flex-col items-center gap-y-6">
        <Title line1="Explore between" line2="my journeys." />

        <AnimatedDescription className="max-w-xl">
          With over 5 years of experience, I specialize in developing scalable
          web and mobile applications with a strong focus on performance and UX.
        </AnimatedDescription>
      </div>

      <MobileTimeline />
    </div>
  );
}