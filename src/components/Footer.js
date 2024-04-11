import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
export default function Footer() {
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
    <div className="w-[100vw] flex justify-center items-center py-10">
      <div className="w-[60vw] flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-[#004AAD] -rotate-2 z-10">
          TINGA KOTTO Evilavy🧑🏾‍💻
        </h1>
        <div className="icons flex flew-row gap-3 mt-5">
          {socials.map((social, index) => {
            const Icon = social.Icon;

            return (
              <a key={index} href={social.Link} alt={social.Label}>
                <Icon className="text-neutral-500 w-6 h-6 hover:scale-125 transition-all" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
