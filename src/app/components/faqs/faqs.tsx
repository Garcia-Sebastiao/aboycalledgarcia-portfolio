import { FaqAccordion } from "./faq-accordion";

export function Faqs() {
  return (
    <div className="w-full container mx-auto px-8 relative flex flex-col items-center gap-y-12">
      
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-2xl lg:text-[40px] font-extrabold text-white max-w-xl text-center">
          Everything you need to know
        </h2>

        <p className="text-white/60 max-w-191 leading-7 text-center">
          Get all of your questions answered.
        </p>
      </div>

      <FaqAccordion />
    </div>
  );
}