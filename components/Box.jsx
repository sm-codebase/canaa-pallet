import React from "react";
import Image from "next/image";
import Logo from "../public/white-logo.svg";

const Box = () => {
  return (
    <div className="">
      <div
        style={{ borderRadius: "60px" }}
        className="bg-gradient-to-r from-[#048f1a] to-[#64ac6d] text-white  md:w-[1250px] md:h-[550px]   mx-auto relative  -mt-40"
      >
        <div className="grid justify-center p-10 mt-10 ">
          <Image src={Logo} alt="logo-branco" height={100} width={120} />
        </div>

        <div className="grid text-center p-10 font-sans font-medium text-lg leading-loose">
          <p>
            Há quase duas décadas no mercado a <b>Canaã Pallets</b> é uma
            empresa especializada na fabricação de pallets e embalagens de
            madeira. Desde o seu início, a empresa tem se destacado não apenas
            pela qualidade de seus produtos, mas também por seu compromisso com
            a ética e sustentabilidade.
          </p>
          <p className="mt-8">
            {" "}
            Em franco crescimento, a Canaã Pallets conta com um amplo espaço
            fabril e se destaca no mercado por oferecer soluções personalizadas.
            A empresa trabalha em estreita colaboração com seus clientes, para
            fornecer produtos que atendam perfeitamente às exigências
            específicas de cada negócio, garantindo eficiência, qualidade e
            satisfação em cada entrega.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
