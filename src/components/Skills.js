import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect.tsx";
import {
  SiReact,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiLinux,
  SiPostman,
  SiSymfony,
  SiTailwindcss,
  SiDocker,
  SiNodedotjs,
  SiGit,
  SiWordpress,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { text: "React js", Icon: SiReact },
    { text: "Mongo DB", Icon: SiMongodb },
    { text: "Node.js", Icon: SiNodedotjs },
    { text: "Postman", Icon: SiPostman },
    { text: "Git", Icon: SiGit },
    { text: "Tailwind css", Icon: SiTailwindcss },
    { text: "Docker", Icon: SiDocker },
    { text: "Wordpress", Icon: SiWordpress },
    { text: "PHP", Icon: SiPhp },
    { text: "Symfony", Icon: SiSymfony },
    { text: "SQL", Icon: SiMysql },
    { text: "Linux", Icon: SiLinux },
  ];

  return (
    <div>
      <Title
        text="Compétences 🔪"
        className="flex flex-col items-center justify-center -rotate-[6deg] mt-20"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
