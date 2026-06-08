import { Title } from "@/components/shared/title";
import { TestimonialMarquee } from "./testimonials-marquee";
import { useTranslations } from "next-intl";

export function Testimonials() {
  const translate = useTranslations("home");
  return (
    <div className="w-full relative items-center flex flex-col gap-y-12">
      <div className="flex px-4 flex-col items-center gap-y-6">
        <Title
          line1={translate("testimonials.title1")}
          className="max-w-3xl!"
          line2={translate("testimonials.title2")}
        />
      </div>

      <TestimonialMarquee />
    </div>
  );
}
