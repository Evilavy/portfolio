import React from "react";
import { cn } from "../utils/cn.ts"
import { SiPhp, SiMysql } from "react-icons/si";
import Title from "../components/Title";
import DirectionAwareHover from "../components/ui/direction-aware-hover.tsx"

import GPADImage from "../assets/GPAD.png";

export default function Projects() {
  const projects = [
    {
      title: "GPAD",
      tech: [SiPhp, SiMysql],
      link: "https://gpad49.fr",
      cover: GPADImage,
      background: "bg-indigo-500",
    },
    {
      title: "GPAD",
      tech: [SiPhp, SiMysql],
      link: "https://gpad49.fr",
      cover: GPADImage,
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projets 🎨"
        className="flex flex-col items-center justify-center -rotate-[6deg] mt-20"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20">
        {projects.map((project, indx) => (
          <a href={project.link} key={indx}>
            <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5">

                </DirectionAwareHover>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
