import React, { useEffect } from "react";
import { MovingBorderBtn } from "./ui/moving-border.tsx";
import Title from "./Title.js";
import CV from "../assets/TINGA KOTTO Evilavy CV.pdf"
export default function HeroSection() {
  useEffect(() => {
    const floatElements = document.querySelectorAll(".float-animation");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      floatElements.forEach((elem) => {
        const { left, top, width, height } = elem.getBoundingClientRect();
        const center_x = left + width / 2;
        const center_y = top + height / 2;
        const dx = (clientX - center_x) / 50; // Réduisez pour augmenter la sensibilité
        const dy = (clientY - center_y) / 50; // Réduisez pour augmenter la sensibilité

        elem.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap:14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left mt-20 lg:mt-0">
        <h1 className="text-4xl lg:text-7xl font-bold md:mt-16 lg:mt-0">
          Bonjour ! 👋 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"Je m'appelle Evilavy"}
          </span>
        </h1>

        <p className="md:w-96 text-lg">
          {
            "Je suis un étudiant passionné d'informatique en deuxième année de BTS SIO"
          }
        </p>
        <a href="mailto:evilavypro@gmail.com" className="inline-block group">
          <Title text="📭 Contactez-moi" />
        </a>
      </div>
      <div className="relative">
        <div className="sm:w-72 sm:h-72 w-68 h-68 space-y-3 -rotate-[30deg] relative mt-12">
          <div className="flex gap-3 translate-x-8">
            <div className="sm:w-32 sm:h-32 w-24 h-24 rounded-xl bg-green-500 float-animation float-delay-1"></div>
            <div className="sm:w-32 sm:h-32 w-24 h-24 rounded-full bg-indigo-500 float-animation float-delay-2"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="sm:w-32 sm:h-32 w-24 h-24 rounded-xl bg-indigo-500 float-animation float-delay-2"></div>
            <div className="sm:w-32 sm:h-32 w-24 h-24 rounded-full bg-green-500 float-animation float-delay-1"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <a target="blank_" href={CV}>📣 Recherche une Alternance</a>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
