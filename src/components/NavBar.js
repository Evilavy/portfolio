import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export default function NavBar() {
  const socials = [
    {
      Link: "mailto:evilavypro@gmail.com",
      Label: "Email",
      Icon: SiGmail,
    },
    {
      Link: "https://github.com/Evilavy",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.linkedin.com/in/evilavy-tinga-kotto-404b8a22a",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-[#004AAD] rotate-[-2deg] hover:rotate-[4deg] z-10 transition duration-300">
        TINGA KOTTO Evilavy🧑🏾‍💻
      </h1>
      <div className="flex items-center gap-5 z-10">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <a key={index} href={social.Link} alt={social.Label}>
              <Icon className="text-neutral-500 w-6 h-6 hover:scale-125 transition-all" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
