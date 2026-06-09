"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const locales = ["en", "fr", "pt", "es"];

export function LanguageSwitcher() {
  const router = useRouter();

  const changeLocale = (locale: string) => {
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;

    router.refresh();
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          className={cn("text-white text-lg lg:text-xl font-medium")}
          key={locale}
          onClick={() => changeLocale(locale)}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
