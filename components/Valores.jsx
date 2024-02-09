import React from "react";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

const Valores = () => {
  return (
    <div
      id="valores"
      className="container  bg-green-100 text-white  w-full h-full md:h-[700px]"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-green-500"
        >
          <div className="grid justify-center mt-10">
            <FaGear size={70} color="green" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Processos automatizados, eficiência e agilidade.
          </p>
        </div>

        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-green-500"
        >
          <div className="grid justify-center mt-10">
            <PiPottedPlantFill size={80} color="green" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Re-Uso de águas de chuva, energia fotovoltaica​
          </p>
        </div>

        <div
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-green-500"
        >
          <div className="grid justify-center mt-10">
            <FaHelmetSafety size={70} color="green" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Engenharia e desenvolvimento de Embalagens​
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valores;
