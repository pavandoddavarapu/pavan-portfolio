import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../../page";
import { BackgroundGradient } from "../ui/background-gradient";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-4">
        <div className="flex gap-3 justify-center">
          {/* Primary Button (Green) */}
          <button
            className="flex items-center justify-center text-sm font-bold 
            bg-spotify-green hover:bg-spotify-dark-green hover:scale-105 
            px-6 py-2.5 rounded-full gap-2 transition-all duration-200
            min-w-[180px]"
          >
            Achivements
            <FaArrowDown className="text-base" />
          </button>

          {/* Secondary Button (White Border) */}
          <button
            className="flex items-center justify-center text-sm font-bold 
            border border-[#727272] hover:border-white hover:scale-105 
            text-white px-6 py-2.5 rounded-full gap-2 transition-all duration-200
            animate-pulse hover:animate-none hover:bg-white hover:text-black
            shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            min-w-[180px]"
            onClick={onSetExperienceSection}
          >
            Explore All Projects
            <GrLinkNext className="text-base" />
          </button>
        </div>
      </div>
      <StickyScroll content={projectLists} />
    </div>
  );
}

const projectLists: {
  title: string;
  description: string;
  content?: React.ReactNode | any;
}[] = [
  {
    title: "Winner-AUDEVDEY T20 CHALLENGE",
    description:
      "2× AUDevDay DSA Challenge Winner among 10,000+ participants (Hyderabad) — Excelled in solving complex, real-world algorithmic problems with precision and efficiency under competitive pressure.2× AUDevDay DSA Challenge Winner among 10,000+ participants (Hyderabad) — Excelled in solving complex, real-world algorithmic problems with precision and efficiency under competitive pressure.",
    content: (
      <a target="_blank" href="https://board-game-cafe-website.vercel.app/">
        <Image
          src={`/audevday.jpeg`}
          alt="Sip n Play Cafe Website"
          width={500}
          height={500}
        />
      </a>
    ),
  },
  {
    title: "AIR 149",
    description:
    "Won this one of the finest contest.with a all india rank of 149 and global rank of 2177 contducted by Denso named Denso Create Programming Contest 2025 (AtCoder)Won this one of the finest contest.with a all india rank of 149 and global rank of 2177 contducted by Denso named Denso Create Programming Contest 2025 (AtCoder)",
    content: (
      <a target="_blank" href="https://board-game-cafe-website.vercel.app/">
        <Image
          src={`/denso contest.png`}
          alt="Sip n Play Cafe Website"
          width={500}
          height={500}
        />
      </a>
    ),
  }
  
  
];
