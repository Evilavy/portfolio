import React from "react";
import { cn } from "../utils/cn.ts";
import { SiPhp, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";
import Title from "../components/Title";
import DirectionAwareHover from "../components/ui/direction-aware-hover.tsx";

import GPADImage from "../assets/GPAD.png";
import ArtecoImage from "../assets/Arteco.png";
import PortfolioImage from "../assets/Portfolio.png";

export default function Projects() {
  const projects = [
    {
      title: "GPAD",
      tech: [SiPhp, SiMysql],
      link: "https://gpad49.fr",
      cover: GPADImage,
      background: "bg-[#77AAED]",
    },
    {
      title: "Arteco",
      tech: [SiPhp, SiMysql],
      link: "https://gpad49.fr",
      cover: ArtecoImage,
      background: "bg-[#ECA377]",
    },
    {
      title: "Portfolio",
      tech: [SiReact, SiTailwindcss],
      link: "https://gpad49.fr",
      cover: PortfolioImage,
      background: "bg-[#ECA377]",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projets 🎨"
        className="flex flex-col items-center justify-center -rotate-[6deg] mt-20"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, indx) => (
          <a target="blank_" href={project.link} key={indx}>
            <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 h-[300px]	"
              >
                <h1 className="font-bold text-lg">{project.title}</h1>
                <div className="flex space-x-2 justify-center">
                  {project.tech.map((Icon, iconIndex) => (
                    <Icon className="h-10 w-10" key={iconIndex} />
                  ))}
                </div>
              </DirectionAwareHover>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
