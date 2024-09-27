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
              Prazer! Me chamo Felipe, e hoje atuo como desenvolvedor de
              software na empresa Autoscar, e estou graduando em Sistemas de
              Informação na Universidade Federal de Uberlândia. 
              <br />
              <br />
              Atualmente atuo utilizando Javascript, Nest.js, React e Node. E anteriormente,
              adquiri experiência como analista de suporte e testes na iCrop
              Gestão de Irrigação e como analista de suporte em redes na Algar
              Telecom. Estou sempre buscando novos desafios e oportunidades para
              aprender e crescer. 
              <br />
              <br />
              Dentre minhas características profissionais
              destacam-se a evolução contínua, capacidade analítica,
              proatividade, orientação e capacitação de novos colaboradores,
              saber lidar com situações criticas e de intervenção imediata.
            </p>
          </div>
        </div>
        <img
          className="ml-auto rounded-3x1 py-8 md:py-0"
          src={sobre}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Sobre;
