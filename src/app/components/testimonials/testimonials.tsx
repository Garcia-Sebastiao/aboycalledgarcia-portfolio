import { Title } from "@/components/shared/title";
import { TestimonialMarquee } from "./testimonials-marquee";

export function Testimonials() {
  return (
    <div className="w-full relative items-center flex flex-col gap-y-12">
      
      <div className="flex px-4 flex-col items-center gap-y-6">
        <Title line1="People who trusted" className="max-w-3xl!" line2="on my work." />
      </div>

      <TestimonialMarquee />
    </div>
  );
}