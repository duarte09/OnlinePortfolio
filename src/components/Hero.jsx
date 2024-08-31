import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroimage from "../images/profilepic7.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 w-[400px] sm:w-[500px] lg:w-[600px] h-auto mr-auto sm:mr-0">
        <img src={heroimage} alt="hero image" className="w-full h-auto" />
      </div>

      <div className="col-span-2 px-5 my-auto text-center sm:text-right">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
          <span className="primary-color">Eu sou</span> <br />
          <TypeAnimation
            sequence={[
              "Dev Frontend",
              1000,
              "Dev Backend",
              1000,
              "Estudante",
              1000,
              "Apaixonado por inovação",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white text-base sm:text-lg lg:text-xl my-6">
        Meu nome é Felipe Duarte e trabalho há 1 ano como desenvolvedor web. <br />Bem-vindo ao meu portfólio!
        </p>

        <div className="my-8 flex flex-col sm:flex-row justify-center sm:justify-end gap-4">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center"
          >
            Download CV
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center hover:border-none"
          >
            Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
