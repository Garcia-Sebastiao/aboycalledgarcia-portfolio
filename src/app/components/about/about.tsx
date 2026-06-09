import { BlurShape } from "@/assets/common/blur-shape";
import { AnimatedDescription } from "@/components/shared/animated-description";
import { Title } from "@/components/shared/title";
import { StacksList } from "./stacks-list";
import { useTranslations } from "next-intl";

export function About() {
  const translate = useTranslations("home");
  return (
    <section id="about" className="w-full relative px-4 pt-32 container mx-auto flex flex-col items-center gap-y-12 mt-24 lg:mt-42.5">
      <div className="flex flex-col items-center gap-y-6">
        <Title
        className="max-w-3xl!"
          line1={translate("about.title1")}
          line2={translate("about.title2")}
        />

        <AnimatedDescription>
          {translate("about.description")}
        </AnimatedDescription>
      </div>

      <StacksList />

      <div className="absolute top-1/2 opacity-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BlurShape />
      </div>
    </section>
  );
}
