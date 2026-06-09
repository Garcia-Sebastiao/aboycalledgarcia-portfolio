import { Title } from "@/components/shared/title";
import { AnimatedDescription } from "@/components/shared/animated-description";
import { ProjectMarquee } from "./projects-marquee";
import { useTranslations } from "next-intl";

export function Projects() {
  const translate = useTranslations("home");
  return (
    <div id="projects" className="w-full pt-32 relative items-center flex flex-col gap-y-12">
      <div className="flex px-2 flex-col items-center gap-y-6">
        <Title
          className="max-w-3xl!"
          line1={translate("projects.title1")}
          line2={translate("projects.title2")}
        />

        <AnimatedDescription className="text-white/60 max-w-191 leading-7 text-center">
          {translate("projects.label")}
        </AnimatedDescription>
      </div>

      <ProjectMarquee />
    </div>
  );
}
