import { Title } from "@/components/shared/title";
import { AnimatedDescription } from "@/components/shared/animated-description";
import { MobileTimeline } from "./components/mobile-timeline";
import { useTranslations } from "next-intl";

export function MobileExperience() {
  const translate = useTranslations("home");
  return (
    <div id="my-journey" className="w-full lg:hidden relative px-4 container mx-auto mt-20 items-center flex flex-col gap-y-20">
      <div className="flex flex-col items-center gap-y-6">
        <Title
          line1={translate("experience.title1")}
          line2={translate("experience.title2")}
        />

        <AnimatedDescription className="max-w-xl">
          {translate("experience.description")}
        </AnimatedDescription>
      </div>

      <MobileTimeline />
    </div>
  );
}
