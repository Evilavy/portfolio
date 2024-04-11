import React from "react";
import Title from "../components/Title";

export default function ITMonitoring() {
  return (
    <div>
      <Title
        text="Veille informatique 💻"
        className="flex flex-col items-center justify-center -rotate-[6deg] mt-20"
      />
      <h2 className="text-xl text-center mt-10 underline">
        Qu'est ce qu'une veille informatique ?
      </h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        La veille informatique consiste en la collecte, l'analyse et la gestion
        méthodique des informations récentes sur les évolutions, les tendances
        et les nouvelles technologies dans le secteur de l'informatique. Cette
        pratique permet aux professionnels de se tenir au courant des nouveaux
        outils, méthodologies et orientations stratégiques. Dans le cadre de la
        validation de mon BTS Services Informatiques aux Organisations, j'ai
        réalisé une veille sur le thème de mon choix, portant spécifiquement sur
        les algorithmes des réseaux sociaux.
      </p>
      <h2 className="text-xl text-center mt-10 underline">
        Algorithmes des Réseaux Sociaux en Général
      </h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        Les réseaux sociaux utilisent des algorithmes complexes pour
        personnaliser l'expérience des utilisateurs et rendre le contenu plus
        pertinent et engageant. Ces algorithmes prennent en compte plusieurs
        facteurs tels que :
      </p>
      <ul className="mt-4 sm:px-4 md:px-24 list-disc list-inside indent-10 leading-7">
        <li className="px-12">
          <span className="font-bold">Relations et Interactions : </span>La
          plupart des plateformes, comme Facebook ou LinkedIn, priorisent le
          contenu partagé par des amis ou des connections pour renforcer les
          relations personnelles et professionnelles.
        </li>
        <li className="px-12">
          <span className="font-bold">Intérêts et Comportements : </span>Les
          algorithmes analysent les interactions précédentes des utilisateurs
          avec le contenu (likes, partages, commentaires) pour prédire et
          recommander des contenus similaires.
        </li>
        <li className="px-12">
          <span className="font-bold">Actualité et Pertinence : </span>Les
          contenus récents ou tendance sont souvent privilégiés pour garder les
          utilisateurs informés des dernières nouvelles ou des sujets
          populaires.
        </li>
        <li className="px-12">
          <span className="font-bold">Qualité du Contenu : </span>Les
          plateformes évaluent la qualité du contenu en se basant sur divers
          signaux, comme l'engagement des utilisateurs, pour s'assurer qu'elles
          promeuvent des informations fiables et utiles.
        </li>
      </ul>
      <h2 className="text-xl text-center mt-10 underline">Focus sur TikTok</h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        TikTok se distingue des autres réseaux sociaux par sa manière unique
        d'utiliser l'algorithmique pour recommander des vidéos à ses
        utilisateurs, principalement via la section "Pour Toi". Contrairement à
        d'autres plateformes qui se basent largement sur les relations entre
        utilisateurs, TikTok privilégie l'analyse comportementale et l'intérêt
        du contenu.
      </p>

      <h2 className="text-xl text-center mt-10 underline">Succès</h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        En 2022, l’application a cumulé plus de 1,7 milliards d’utilisateurs
        quotidiens passant en moyenne 52 minutes à consommer les vidéos
        publiées. Ouvrant l’application entre 38 et 55 fois par jours. Tik toi
        fait maintenant donc partie des géants des réseaux sociaux, faisant
        concurrence à réseaux sociaux comme Instagram, Facebook, Twitter etc..
      </p>

      <h2 className="text-xl text-center mt-10 underline">La clé</h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        Contrairement aux autres réseaux sociaux où le système de recommendation
        se fait en majorité par relations entre utilisateurs (exemple : X, amis
        de Y a like le post N°167, on va donc le recommandé à Y), Tik tok quant
        à lui fonctionne essentiellement par l’algorithmique. Eveillant une
        grande curiosité chez les utilisateurs qui émettent des théorie sur le
        fonctionnement interne de l’application - « comment l’application arrive
        à cerner si efficacement mes centres d’intérêts ? ».<br></br>{" "}
        L’efficacité éventuelle de cette facon de faire s’est rapidement
        confirmée CF. « Succès ».
      </p>

      <h2 className="text-xl text-center mt-10 underline">
        Actions sur laquelle l’observation de l’algorithme est faite
      </h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        L’audit du fonctionnement interne de recommendation de Tik tok se fera
        sur les interactions utilisateurs les plus explicite :
      </p>
      <ul className="mt-4 sm:px-4 md:px-24 list-disc list-inside indent-10 leading-7">
        <li className="px-12">Localisation de l'utilisateur</li>
        <li className="px-12">Paramétrage de langue de l’utilisateur</li>
        <li className="px-12">Action de like</li>
        <li className="px-12">Action de suivre</li>
        <li className="px-12">Temps de lecture d’une vidéo</li>
      </ul>

      <h2 className="text-xl text-center mt-10 underline">
        Comment les créateurs de contenus perçoivent le système de
        recommendation « Pour toi »{" "}
      </h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        Les utilisateurs et les créateurs de contenu sur TikTok tentent souvent
        de comprendre ou d'analyser comment l'algorithme de recommandation
        fonctionne en se basant sur l'activité et les performances de leurs
        vidéos sur l'application. Les créateurs ont tendance à attribuer le
        succès ou l'échec de leurs vidéos à l'algorithme de recommandation de
        TikTok plutôt qu'au contenu réel de leurs vidéos.<br></br>
        <br></br>Ils séparent la possibilité d’avoir une vidéo virale en 3
        facteurs influents :
      </p>
      <ul className="mt-4 sm:px-4 md:px-24 list-disc list-inside indent-10 leading-7">
        <li className="px-12">
          L’engagement envers la vidéos : le nombre de likes, commentaires,
          partages etc…
        </li>
        <li className="px-12">
          La moment de publication de la vidéo : le jours ou l’heure de la mise
          en ligne du contenu
        </li>
        <li className="px-12">
          L'ajout et l'accumulation de hashtags : L'utilisation de hashtags
          pertinents et populaires pour augmenter la visibilité de la vidéo.
        </li>
        <li className="px-12">
          Leur but est de faire passer leur vidéo dans le « Pour toit » d’un
          maximum d’utilisateurs lecteurs.
        </li>
      </ul>

      <h2 className="text-xl text-center mt-10 underline">
        Comment l’application définit le profil d’un lecteur
      </h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 leading-7">
        <span className="font-bold">Intérêt de l'utilisateur :</span>
        <br></br>L’application prend en compte les intérêts personnels des
        utilisateurs, probablement identifiés par leurs interactions sur la
        plateforme, comme les vidéos qu'ils aiment, partagent ou commentent.
        <br></br>
        <br></br>
        <span className="font-bold">Identité de l'utilisateur :</span>
        <br></br>
        Cela pourrait se référer à des informations démographiques ou d'autres
        aspects de l'identité de l'utilisateur, comme l'âge, le genre, la
        localisation géographique, etc.<br></br>
        <br></br>
        <span className="font-bold">Caractéristiques comportementales :</span>
        <br></br>Cela inclut probablement comment et quand un utilisateur
        interagit avec la plateforme, comme le temps passé à regarder des
        vidéos, les moments de la journée où ils sont les plus actifs, les types
        de vidéos avec lesquels ils interagissent le plus, etc.
      </p>

      <h2 className="text-xl text-center mt-10 underline">
        Que se passe-t-il lors qu’un Tik tok est publié
      </h2>
      <p className="mt-4 px-4 sm:px-4 md:px-24 indent-10 leading-7">
        Pour l’instant on sait que lorsqu’une nouvelle vidéo est publié,
        l’algorithme utilise la «  computer vision » CF. « Explication computer
        vision » ou « vision par ordinateur » pour rattacher les éléments de la
        vidéo à des étiquettes, analyse les hashtags, les textes ainsi que la
        musique pour en faire un panier d’information.<br></br><br></br>L’application va donc
        pouvoir ensuite sélectionner les utilisateurs qui correspondent le plus
        au panier créé et proposer la vidéo dans leur « Pour toi ». Mais la
        nouvelle vidéo ne se propage pas sur les « Pour toi » de tout le monde
        aussi facilement. En effet, l’application veut s’assurer que la vidéo
        soit de qualité avant de l’envoyer au grand public.<br></br><br></br>Pour cela, elle va
        déjà la recommander à un échantillon d’utilisateur (« small bucket » ou
        « petit seau ») et va analyser la réponse des lecteurs (commentaires,
        likes, partages…). Si la vidéo a du succès auprès du petit seau elle
        sera ensuite envoyer à un échantillon plus conséquent d’utilisateurs
        lecteurs, un plus gros seau. Au fur et à mesure des seaux, la vidéo sera
        ou non devenue virale sur l'application.
      </p>
    </div>
  );
}
