import React from "react";
import Image from "next/image";
import ProdutoImg from "../public/assets/pr-img-3.png";

const Embalagens = () => {
  return (
    <div id="focus" className="h-full mx-auto text-black">
      <h1 className="text-4xl font-bold text-left p-4 text-green-700">Embalagens</h1>

      <div className="relative flex justify-left p-2">
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
        fabricação de pallets e embalagens de madeira.{" "}
      </p>
      </div>
      <div className="flex flex-wrap items-center pt-4">
        <div className="rounded-md">
          <Image
            src={ProdutoImg}
            alt="/"
            width="344px"
            height="169px"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Embalagens;
