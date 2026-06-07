/* eslint-disable @next/next/no-img-element */
import { ExperienceNodeSmall } from "./lines/node";

type Props = {
  company: string;
  role: string;
  period: string;
  color: string;
  logo: string;
};

export function MobileExperienceItem({
  company,
  role,
  period,
  color,
  logo,
}: Props) {
  return (
    <div className="mobile-experience-item flex flex-col gap-y-4 items-start">
      <div className="mobile-experience-header -left-4 flex items-center gap-x-4 relative">
        <ExperienceNodeSmall color={color} />

        <img
          className="w-30 mt-2 brightness-100 transition-all duration-500"
          src={logo}
          alt={company}
        />
      </div>

      <div className="mobile-experience-content">
        <h3 className="text-lg font-bold text-white">
          {company} - {role}
        </h3>

        <span className="text-sm text-white font-semibold">{period}</span>

        <span
          dangerouslySetInnerHTML={{
            __html: ` I contributed to the development of key digital products
                      and user-facing solutions, focusing on performance
                      optimization, usability, and modern interface design.
                      <br /> <br />
                      Participated in the development of the company’s streaming
                      platform, Pn Clique Streaming, designed to deliver
                      services similar to Netflix, Spotify, and Prime Video;
                      fixed performance issues and developed core components and
                      services.
                      <br /> <br />
                      Built the company’s unified chat platform, PN Chat, used
                      to create chatbots and integrate with messaging platforms
                      such as WhatsApp and Telegram.
                      <br /> <br />
                      Designed the company website UI, delivering a simple,
                      clean, and user-friendly interface.`,
          }}
          className="text-left pt-4 text-white/60 text-sm leading-6"
        />
      </div>
    </div>
  );
}
