import React from "react";
import proj1 from "../images/proj1.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";
import proj4 from "../images/proj4.png";
import proj5 from "../images/proj5.png";
import proj6 from "../images/proj6.png";

const Trabalho = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="trabalho">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Trabalho</p>
        <p className="text-gray-400">
          A seguir algum dos trabalhos que ja produzi
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                    shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative"
        >
          <img src={proj1}  alt="" />
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                    shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative"
        >
          <img src={proj2}  alt="" />
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                    shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative"
        >
          <img src={proj3}  alt="" />
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                    shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative"
        >
          <img src={proj4}  alt="" />
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                    shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative"
        >
          <img src={proj5} layout="fill" objectFit="cover" alt="" />
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                    shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center 
                    h-[200px] bg-cover relative"
        >
          <img src={proj6} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trabalho;
