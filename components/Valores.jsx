import React from "react";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi";

const Valores = () => {
  return (
    <div
      id="valores"
      className="bg-green-100 text-white  w-full h-full md:h-[700px]"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300"
        >
          <div className="grid justify-center mt-10">
            <FaGear size={70} color="#048f1a" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Melhores práticas de produção e automatização
          </p>
        </div>

        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300"
        >
          <div className="grid justify-center mt-10">
            <MdEnergySavingsLeaf  size={80} color="#048f1a" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Energia renovável fotovoltaíca e madeiras de reflorestamento
          </p>
        </div>

        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300"
        >
          <div className="grid justify-center mt-10">
            <GiWoodPile size={70} color="#048f1a" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Desenvolvimento de paletes e embalagens de madeira sob medida
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valores;
