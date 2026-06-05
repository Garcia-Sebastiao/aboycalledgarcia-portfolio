import { InstagramIcon } from "@/assets/icons/instagram-icon";
import { LinkedinIcon } from "@/assets/icons/linkedin-icon";
import { WhatsappIcon } from "@/assets/icons/whatsapp-icon";
import { XIcon } from "@/assets/icons/x-icon";
import { ChevronUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col-reverse gap-y-6 lg:flex-row justify-between w-full mt-10 lg:mt-70 pb-16 items-center container mx-auto">
      <span className="text-xl text-white font-bold">
        © {new Date().getFullYear()} aboycalledgarcia
      </span>

      <div className="flex items-center gap-x-6">
        {XIcon}
        {WhatsappIcon}
        {LinkedinIcon}
        {InstagramIcon}
      </div>

      <button className="text-white hidden lg:flex items-center gap-x-6 font-bold text-xl">
        Back to top <ChevronUp className="size-6" />{" "}
      </button>
    </footer>
  );
}
