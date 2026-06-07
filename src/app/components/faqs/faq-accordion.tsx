"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faqs.data";


gsap.registerPlugin(ScrollTrigger);

export function FaqAccordion() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const items = sectionRef.current?.querySelectorAll(".faq-item") as NodeListOf<Element>;

        gsap.set(items, {
          opacity: 0,
          y: 24,
          filter: "blur(10px)",
          willChange: "transform, opacity",
        });

        gsap.to(items, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.08,
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
    <div ref={sectionRef} className="w-full max-w-225 mx-auto">
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="faq-item border-b border-white"
          >
            <AccordionTrigger className="py-4 lg:py-6 hover:no-underline">
              <h3 className="font-bold text-xl lg:text-[2rem] text-left text-white">
                {index + 1}. {faq.question}
              </h3>
            </AccordionTrigger>

            <AccordionContent className="text-sm lg:text-xl text-white/80 pb-6 leading-8">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}