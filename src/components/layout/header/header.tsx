import { Logo } from "@/assets/common/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const links = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "My Journey",
      href: "/",
    },
    {
      name: "Some Projects",
      href: "/",
    },
    {
      name: "Testimonials",
      href: "/",
    },
    {
      name: "Contacts",
      href: "/",
    },
  ];
  return (
    <header className="w-full container px-20 mx-auto py-6 flex items-center justify-between">
      {Logo}

      <nav>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white/60 font-medium text-sm hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        variant="default"
        className="bg-white text-background font-semibold py-2.5 px-6"
      >
        Lets talk
      </Button>
    </header>
  );
}
