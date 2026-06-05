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

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How long is a typical project?",
    answer:
      "Typically most projects span 4-6 weeks, beginning with an initial discovery and assessment phase, followed by in-depth analysis, solution design and concluding with delivery of final reports and implementation support.",
  },
  {
    question: "What information do you need to start?",
    answer:
      "To get started, I usually need a clear understanding of your project goals, target audience, and any specific requirements or preferences you may have.",
  },
  {
    question: "How do you ensure data confidentiality?",
    answer:
      "I take data confidentiality very seriously. I use secure communication channels and ensure that all sensitive information is handled with the utmost care and discretion.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience working with clients across various industries, including technology, healthcare, finance, and e-commerce.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "My pricing structure is flexible and can be tailored to fit the specific needs of each project.",
  },
];

export function Faqs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(".faq-item");

        // initial states
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 24,
          filter: "blur(12px)",
        });

        gsap.set(items, {
          opacity: 0,
          y: 24,
          filter: "blur(10px)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        /**
         * TITLE
         */
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
        });

        /**
         * ITEMS STAGGER
         */
        tl.to(
          items,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6",
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="w-full container mx-auto px-8 relative items-center flex flex-col gap-y-12"
    >
      <div
        ref={titleRef}
        className="flex flex-col px-4 items-center gap-y-6"
      >
        <h2 className="text-2xl lg:text-[40px] font-extrabold text-white max-w-xl text-center">
          Everything you need to know
        </h2>

        <p className="text-white/60 max-w-191 leading-7 text-center">
          Get all of your questions answered.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full mx-auto max-w-225">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`faq-item ${
              index > 0 ? "border-b border-white" : "border-y border-white"
            }`}
          >
            <AccordionTrigger className="py-4 lg:py-6 hover:no-underline">
              <h3 className="font-bold text-xl lg:text-[2rem] text-left text-white">
                {`${index + 1}. ${faq.question}`}
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