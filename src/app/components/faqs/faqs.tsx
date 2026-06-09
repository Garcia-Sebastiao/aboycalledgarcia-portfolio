import { useTranslations } from 'next-intl';
import { FaqAccordion } from "./faq-accordion";

export function Faqs() {
  const t = useTranslations('home.faqs');

  return (
    <div className="w-full pt-32 container mx-auto px-8 relative flex flex-col items-center gap-y-12">
      
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-2xl lg:text-[40px] font-extrabold text-white max-w-xl text-center">
          {t('title')}
        </h2>

        <p className="text-white/60 max-w-191 leading-7 text-center">
          {t('subtitle')}
        </p>
      </div>

      <FaqAccordion />
    </div>
  );
}