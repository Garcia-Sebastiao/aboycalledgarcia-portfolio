import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <div className="w-full container mx-auto px-8 relative items-center flex flex-col gap-y-12">
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-[40px] font-extrabold text-white max-w-xl text-center">
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
            className={
              index > 0 ? "border-b border-white" : "border-y border-white"
            }
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <h3 className="font-bold text-[2rem] text-left text-white">
                {`${index + 1}. ${faq.question}`}
              </h3>
            </AccordionTrigger>

            <AccordionContent className="text-xl text-white/80 pb-6 leading-8">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
