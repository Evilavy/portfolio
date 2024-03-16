import React from "react";
import { SiGithub, SiGmail } from "react-icons/si";

export default function NavBar() {
  const socials = [
    {
      Link: "evilavypro@gmail.com",
      Label: "Email",
      Icon: SiGmail,
    },
    {
      Link: "https://github.com/Evilavy",
      Label: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-neutral-100 text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        TINGA KOTTO Evilavy🧑🏾‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <a key={index} href={social.Link} alt={social.Label}>
              <Icon className="text-neutral-100 w-6 h-6 hover:scale-125 transition-all" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
