import React from "react";
import Title from "../components/Title";

export default function ITMonitoring() {
  return (
    <div>
      <Title
        text="Veille informatique 💻"
        className="flex flex-col items-center justify-center -rotate-[6deg] mt-20"
      />
      <h2 className="text-xl text-center mt-10">
        Qu'est ce qu'une veille informatique ?
      </h2>
      <p className="mt-4 sm:px-12 lg:px-12">
        La veille informatique consiste en la collecte, l'analyse et la gestion
        méthodique des informations récentes sur les évolutions, les tendances
        et les nouvelles technologies dans le secteur de l'informatique. Cette
        pratique permet aux professionnels de se tenir au courant des nouveaux
        outils, méthodologies et orientations stratégiques. Dans le cadre de la
        validation de mon BTS Services Informatiques aux Organisations, j'ai
        réalisé une veille sur le thème de mon choix, portant spécifiquement sur
        les algorithmes des réseaux sociaux.
      </p>
    </div>
  );
}
