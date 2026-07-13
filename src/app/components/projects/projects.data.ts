export type ProjectProps = {
  id: number;
  title: string;
  url: string;
  img: string;
  description: string;
  stacks: string[];
};

export const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/images/projects/aura-01.png",
    stacks: ["ReactJS", "TypeScript", "TailwindCSS", "Gemini Api", "Firebase"],
    title: "Aura: An AI-Powered Psychological First Aid (PFA) Assistant",
    url: "https://aura-ai-beta-blue.vercel.app/",
    description:
      "Aura is an AI-powered virtual assistant providing immediate Psychological First Aid (PFA) for emotional distress. Grounded in international protocols, it offers real-time emotional support, validation, and stabilization techniques through three pillars: Look, Listen, and Link. Designed for immediate crisis intervention without clinical diagnosis, Aura safely connects users to support networks while strictly prioritizing safety and ethical boundaries.",
  },
  {
    id: 2,
    img: "/images/projects/koreflow-01.png",
    stacks: [
      "ReactJS",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Zustand",
      "TanStack Query",
    ],
    url: "https://koreflow-ai.vercel.app/",
    title: "Kore Flow: Modern Productivity & Team Management Platform",
    description:
      "Kore Flow is a productivity and team management platform designed to bridge the gap between everyday task execution and performance evaluation. Built for speed and scalability, it allows organizations to manage multiple multi-tenant workspaces, track real-time task progress through interactive boards, and automatically generate data-driven performance insights to evaluate team efficiency.",
  },
  {
    id: 3,
    img: "/images/projects/sorrisos.png",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    title: "SSorrisos: Modern Dental Clinic Website",
    url: "https://ssorrisos.vercel.app/",
    description:
      "A premium, highly interactive marketing website developed for the SSorrisos dental clinic. Built with a focus on fluid user experience and visual elegance, the platform showcases dental services, highlights medical expertise, and streamlines the patient journey with seamless contact integration and dynamic, smooth-scrolling animations.",
  },
  {
    id: 4,
    img: "/images/projects/oppsum.png",
    stacks: ["ReactJS", "TypeScript", "TailwindCSS", "Chart.js"],
    url: "https://oopsum-crypto.netlify.app/",
    title: "Oopsum Crypto: Dynamic Cryptocurrency Dashboard",
    description:
      "A sleek and intuitive financial dashboard designed for real-time cryptocurrency tracking. The platform aggregates complex market data, offering users interactive charts and visual analytics to monitor price fluctuations, track market trends, and manage asset portfolios through a clean, highly responsive interface.",
  },
  {
    id: 4,
    img: "/images/projects/njila.png",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Framer-Motion"],
    url: "https://oopsum-crypto.netlify.app/",
    title: "Oopsum Crypto: Dynamic Cryptocurrency Dashboard",
    description:
      "The Official Landing Page of Njilabrand.",
  },
];
