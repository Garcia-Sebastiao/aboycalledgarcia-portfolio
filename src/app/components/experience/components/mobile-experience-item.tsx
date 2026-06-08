/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ExperienceNodeSmall } from "./lines/node";

type Props = {
  company: string;
  role: string;
  period: string;
  color: string;
  description: string;
  logo: string;
};

export function MobileExperienceItem({
  company,
  role,
  period,
  color,
  logo,
  description
}: Props) {
  return (
    <div className="mobile-experience-item flex flex-col gap-y-4 items-start">
      <div className="mobile-experience-header -left-4 flex items-center gap-x-4 relative">
        <ExperienceNodeSmall color={color} />

        <img
          className={cn("w-30 mt-2 brightness-100 transition-all duration-500", company == 'Statement Labs' && "w-44!")}
          src={logo}
          alt={company}
        />
      </div>

      <div className="mobile-experience-content flex flex-col">
        <h3 className="text-lg font-bold text-white">
          {company} - {role}
        </h3>

        <span className="text-sm text-white font-semibold">{period}</span>

        <span
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          className="text-left pt-4 text-white/60 text-sm leading-6"
        />
      </div>
    </div>
  );
}
