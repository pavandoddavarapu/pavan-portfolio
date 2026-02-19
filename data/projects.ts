// data/projects.ts
export type personalProjectType = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
}[];

export const personalProjects: personalProjectType = [
  
  
  {
    href: "https://pavan-portfolio-rust.vercel.app/",
    imageSrc: `/spacegames.png`,
    imageAlt: "Space Games",
    title: "Space Games 👾",
    description:
      "Designed and developed key functionalities, game algorithms, and interface for three online games in p5.js with a team of four engineers and presented the finished products to over 20 stakeholders.",
    tech: ["HTML/CSS", "JavaScript", "p5.js"],
  },

  // Add more project objects here...
];
