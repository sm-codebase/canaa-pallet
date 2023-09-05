import React from "react";
import Image from "next/image";
import ProdutoImg from "../public/assets/goal.png";

const Missao = () => {
  return (
    <div id="missao" className="container mx-auto text-black p-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-5">
          <Image
            src={ProdutoImg}
            alt="/"
            height={300}
            width={500}
            className="cursor-pointer"
            style={{ borderRadius: "15px" }}
          />
        </div>
        <div className="md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              Nossa Missão
            </h1>
          </div>
          <div className="text-justify">
            <p>
              Nossa missão é superar as expectativas dos clientes, oferecendo
              produtos de alta qualidade e atendimento excepcional na fabricação
              de paletes e caixas de madeira. Mantemos uma cultura de valores
              compartilhados com nossos colaboradores, buscando constantemente a
              melhoria de nossos processos e produtos.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Missao;
