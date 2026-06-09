import { AnimatedDescription } from "@/components/shared/animated-description";
import { Title } from "@/components/shared/title";

import { BrandsList } from "./components/brands-list";
import { Timeline } from "./components/timeline";
import { useTranslations } from "next-intl";

export function Experience() {
  const translate = useTranslations("home");
  return (
    <section id="my-journey" className="container pt-32 mx-auto mt-20 flex flex-col items-center gap-y-20">
      <div className="flex flex-col items-center gap-y-6">
        <Title
          className="max-w-2xl!"
          line1={translate("experience.title1")}
          line2={translate("experience.title2")}
        />

        <AnimatedDescription className="max-w-191">
          {translate("experience.description")}
        </AnimatedDescription>
      </div>

      <div>
        <BrandsList />
        <Timeline />
      </div>
    </section>
  );
}
