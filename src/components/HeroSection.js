import React from "react";
import { MovingBorderBtn } from "./ui/moving-border.tsx";
import Title from "./Title.js";
export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap:14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
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
            <Title text="📭 Contactez-moi"/>
        </a>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📣 Disponible en contrat d'apprentissage</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
