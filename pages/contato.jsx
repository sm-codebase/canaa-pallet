import React from "react";
import { FaWhatsapp, FaUserTie, FaBriefcase } from "react-icons/fa";

const Contato = () => {
  return (
    <div id="Contato" className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">
        Entre em Contato
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Box RH */}
        <div className="bg-[#048f1a] w-[350px] md:w-[400px] h-[400px] rounded-2xl hover:scale-110 hover:bg-green-600 transition-all p-5 text-white flex flex-col justify-between">
          <div>
            <FaUserTie size={70} className="mb-5" />
            <h2 className="text-3xl font-bold mb-3">Departamento de RH</h2>
            <p className="text-lg">
              Fale com o RH para assuntos relacionados a recrutamento, benefícios e suporte interno.
            </p>
          </div>
          <a
            href="https://wa.me/5519991329700"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-bold px-4 py-2 mt-4 rounded hover:bg-green-100 flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2" />
            Falar com RH
          </a>
        </div>

        {/* Box Comercial */}
        <div className="bg-[#048f1a] w-[350px] md:w-[400px] h-[400px] rounded-2xl hover:scale-110 hover:bg-green-600 transition-all p-5 text-white flex flex-col justify-between">
          <div>
            <FaBriefcase size={70} className="mb-5" />
            <h2 className="text-3xl font-bold mb-3">Departamento Comercial</h2>
            <p className="text-lg">
              Entre em contato para orçamentos, parcerias ou dúvidas sobre nossos produtos.
            </p>
          </div>
          <a
            href="https://wa.me/5519971593235"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-bold px-4 py-2 mt-4 rounded hover:bg-green-100 flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2" />
            Falar com Comercial
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
