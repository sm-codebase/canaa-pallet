import React from "react";
import Image from "next/image";
import ProdutoImg from "../public/assets/empresa.png";

const Empresa = () => {
  return (
    <div id="empresa" className="container mx-auto text-black p-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div>
            <h1 className="text-2xl font-bold text-green-700 mb-2">
              Quem Somos
            </h1>
          </div>
          <div className="text-justify">
            <p>
              Há 15 anos, a Canaã Pallets tem sido uma referência na fabricação
              de pallets e embalagens de madeira. Localizada em Mogi Guaçu, São
              Paulo, nossa empresa está comprometida com a excelência e
              qualidade de nossos produtos, sempre visando superar as
              expectativas de nossos clientes.
            </p>
          </div>
        </div>
        <div className="py-2 px-10 md:w-1/2 md:pr-5">
          <Image
            src={ProdutoImg}
            alt="/"
            height={300}
            width={500}
            className="cursor-pointer"
            style={{ borderRadius: "15px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Empresa;
