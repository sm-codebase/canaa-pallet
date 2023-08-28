import React from "react";
import Image from "next/image";
import ProdutoImg from "../public/assets/pr-img-2.png";

const Empresa = () => {
  return (
    <div id="focus" className="h-full mx-auto text-black p-5">

      <div className= "">
      <h1 className="text-3xl font-bold text-green-700 mb-2">Empresa</h1>

      <div className="text-justify">
      <p>
        Especialista fabricação de pallets e embalagens de madeira, Especialista
        fabricação de pallets e embalagens de madeira, Especialista fabricação
        de pallets e embalagens de madeira, Especialista fabricação de pallets e
        embalagens de madeira, Especialista fabricação de pallets e embalagens
        de madeira, Especialista fabricação de pallets e embalagens de madeira,
        Especialista fabricação de pallets e embalagens de madeira. Especialista
        fabricação de pallets e embalagens de madeira, Especialista fabricação
        de pallets e embalagens de madeira, Especialista fabricação de pallets e
        embalagens de madeira, Especialista fabricação de pallets e embalagens
        de madeira, Especialista fabricação de pallets e embalagens de madeira,
        Especialista fabricação de pallets e embalagens de madeira, Especialista
        fabricação de pallets e embalagens de madeira.
      </p>
      </div>
      </div>
      <div className="flex flex-wrap items-center pt-4">
        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
          <Image
            src={ProdutoImg}
            alt="/"
            width="1239"
            height="960"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Empresa;
