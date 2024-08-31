import React from "react";
import sobre from "../images/sobre.jpg";

const Sobre = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="sobre">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">Sobre mim</h2>
            <p className="text-base lg:text-lg">
              Yes, that's correct. I need to cancel checks from 10,001 to
              90,000. Point for the Einsteins. [applause] Here's your final
              question. Cinephiles, put on your memory berets: This 2001
              masterpiece from Gilles Paquet-Brenner explores the intricate
              dynamics of a family in disarray. Your screen is all black. You
              just unplugged your computer. Uh, yes you are. I'm Assistant
              Regional Manager. Now this is called slack lining. Oh.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3x1 py-8 md:py-0"
          src={sobre}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Sobre;
