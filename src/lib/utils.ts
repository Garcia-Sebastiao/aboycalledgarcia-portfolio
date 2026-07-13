import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openWhatsApp() {
  const phone = "+244934889417";
  const formattedPhone = phone.replace(/\D/g, "");

  window.open(`https://wa.me/${formattedPhone}`, "_blank");
}
