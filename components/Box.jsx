import React from "react";
import Image from "next/image";
import Logo from "../public/assets/carousel/logo.png";

const Box = () => {
  return (
    <div className="">
      <div
        style={{ borderRadius: "60px" }}
        className="bg-gradient-to-r from-[#048f1a] to-[#64ac6d] text-white  md:w-[1250px] md:h-[550px]  mx-auto relative  -mt-40"
      >
        <div className="grid justify-center p-10 mt-10 ">
          <Image src={Logo} alt="logo-branco" height={38.5} width={120} />
        </div>

        <div className="grid text-center p-10 font-sans font-medium text-lg leading-loose">
          <p>
            A <b>Canaã Pallets</b> destaca-se por suas unidades industriais que possuem
            uma estrutura moderna. Equipadas com tecnologia de ponta e processos
            automatizados, seguimos os princípios da manufatura enxuta para
            garantir eficiência em cada etapa. Priorizamos um ambiente de
            trabalho saudável, limpo e organizado, proporcionando conforto e
            segurança aos nossos colaboradores, o que se reflete em altos níveis
            de produtividade.
          </p>
          <p className="mt-8">
            {" "}
            Além disso, investimos em reflorestamentos próprios que garantem o
            abastecimento contínuo de nossas matérias-primas durante todo o ano.
            Todos os nossos reflorestamentos são certificados com rigorosos
            processos de controle, incluindo a certificação FSC, reforçando
            nosso compromisso com a sustentabilidade. Preservamos o equilíbrio
            ambiental, protegendo matas nativas, nascentes e zelando
            responsavelmente pela fauna e flora em todas as nossas atividades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
