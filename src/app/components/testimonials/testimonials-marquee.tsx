"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Marquee } from "@/components/ui/marquee";
import { testimonials } from "./testimonials.data";
import { TestimonialCard } from "./testimonial-card";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialMarquee() {
  const translate = useTranslations("home");
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");

        gsap.set(cards, {
          opacity: 0,
          y: 20,
          scale: 0.96,
          filter: "blur(8px)",
          willChange: "transform, opacity",
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="w-full overflow-hidden relative">
      <Marquee reverse pauseOnHover className="[--duration:80s]">
        {testimonials.map((t) => (
          <TestimonialCard
            role={translate(`testimonials.items.${t.id}.role`)}
            message={translate(`testimonials.items.${t.id}.message`)}
            key={t.id}
            {...t}
          />
        ))}
      </Marquee>

      <Marquee pauseOnHover className="[--duration:80s]">
        {testimonials.map((t) => (
          <TestimonialCard
            role={translate(`testimonials.items.${t.id}.role`)}
            message={translate(`testimonials.items.${t.id}.message`)}
            key={`${t.id}-2`}
            {...t}
          />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 -left-32 w-1/4 bg-linear-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 -right-32 w-1/4 bg-linear-to-l from-background" />
    </div>
  );
}
