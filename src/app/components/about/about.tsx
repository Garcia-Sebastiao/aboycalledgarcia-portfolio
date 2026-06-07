import { BlurShape } from "@/assets/common/blur-shape";
import { AnimatedDescription } from "@/components/shared/animated-description";
import { Title } from "@/components/shared/title";
import { StacksList } from "./stacks-list";

export function About() {
  return (
    <section className="w-full relative px-4 container mx-auto flex flex-col items-center gap-y-12 mt-24 lg:mt-42.5">
      <div className="flex flex-col items-center gap-y-6">
        <Title
          line1="Checkout my"
          line2="tech stacks"
        />

        <AnimatedDescription>
          Checkout the main stacks I normally use to develop every project I
          work on.
        </AnimatedDescription>
      </div>

      <StacksList />

      <div className="absolute top-1/2 opacity-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BlurShape />
      </div>
    </section>
  );
}