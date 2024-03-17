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
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Mongo DB", Icon: SiMongodb },
    { text: "PHP", Icon: SiPhp },
    { text: "Symfony", Icon: SiSymfony },
    { text: "SQL", Icon: SiMysql },
    { text: "Linux", Icon: SiLinux },
    { text: "Postman", Icon: SiPostman },
  ];

  return (
    <div>
      <Title
        text="🔪 Compétences"
        className="flex flex-col items-center justify-center -rotate-[6deg] mt-20"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
