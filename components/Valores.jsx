import React, { useState } from "react";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Valores = () => {
  const [showPopup, setShowPopup] = useState(null);

  const handlePopup = (index) => {
    setShowPopup(index);
  };

  const closePopup = () => {
    setShowPopup(null);
  };

  return (
    <div id="valores" className="bg-green-100 text-white w-full h-full md:h-[700px]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
        
        {/* Item 1 */}
        <div
          onClick={() => handlePopup(1)}
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300 cursor-pointer"
        >
          <div className="grid justify-center mt-10">
            <FaGear size={70} color="#048f1a" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Melhores práticas de produção e automatização
          </p>
        </div>

        {/* Item 2 */}
        <div
          onClick={() => handlePopup(2)}
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300 cursor-pointer"
        >
          <div className="grid justify-center mt-10">
            <MdEnergySavingsLeaf size={80} color="#048f1a" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Energia renovável fotovoltaíca e madeiras de reflorestamento
          </p>
        </div>

        {/* Item 3 */}
        <div
          onClick={() => handlePopup(3)}
          style={{ borderRadius: "50px", transition: "all 0.4s" }}
          className="bg-white w-[350px] md:w-[400px] h-[375px] hover:scale-110 hover:bg-gray-300 cursor-pointer"
        >
          <div className="grid justify-center mt-10">
            <GiWoodPile size={70} color="#048f1a" />
          </div>
          <p className="grid text-center text-3xl font-bold text-gray-700 p-12">
            Desenvolvimento de paletes e embalagens de madeira sob medida
          </p>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white rounded-lg p-8 w-11/12 max-w-lg text-gray-800 relative">
            {/* Botão de fechar (X) */}
            <button onClick={closePopup} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {showPopup === 1 && "Melhores práticas de produção e automatização"}
              {showPopup === 2 && "Energia renovável e materiais sustentáveis"}
              {showPopup === 3 && "Desenvolvimento personalizado de paletes"}
            </h2>
            <p className="mb-6">
              {showPopup === 1 &&
                "Aplicamos as melhores práticas de produção para garantir eficiência e qualidade em todos os processos, com um alto grau de automatização que reduz custos e aumenta a produtividade."}
              {showPopup === 2 &&
                "Utilizamos energia fotovoltaica renovável e madeiras de reflorestamento, priorizando sempre práticas sustentáveis para minimizar o impacto ambiental."}
              {showPopup === 3 &&
                "Desenvolvemos paletes e embalagens de madeira personalizadas para atender às necessidades específicas de cada cliente, garantindo a qualidade e durabilidade dos produtos."}
            </p>
            <div className="flex justify-end">
              <a
                href="#contact"
                onClick={closePopup}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Valores;
