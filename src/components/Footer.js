import React from "react";
import { SiGithub, SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    <div className="w-[100vw] flex justify-center items-center py-10">
      <div className="w-[60vw] flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 z-10">
          TINGA KOTTO 🧑🏾‍💻
        </h1>
        <div className="icons flex flew-row gap-3 mt-5">
          <SiGithub className="h-10 w-6" />
          <SiGmail className="h-10 w-6" />
        </div>
      </div>
    </div>
  );
}
