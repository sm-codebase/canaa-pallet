import React from "react";
import Image from "next/image";
import Logo from "../public/assets/carousel/logo.png";

const Box = () => {
  return (
    <div className="">
      <div
        style={{ borderRadius: "60px" }}
        className="bg-slate-300  md:w-[1400px] md:h-[600px]  mx-auto relative  md:-mt-40 -mt-24 "
      >
      
        <div className="grid justify-center p-20 mt-10 ">
          <Image src={Logo} alt="logo-branco" height={38.5} width={120} />
        </div>

        <div className="grid text-center p-10 font-sans font-semibold text-lg leading-loose">
          <p>
            A Ripack possui nas suas unidades industriais uma estrutura moderna,
            com mais de 20.000m2 de área fabril, equipamentos automatizados, com
            fluxo de processos nos moldes da manufatura enxuta. Com um ambiente
            saudável, limpo, organizado, a empresa proporciona aos seus
            colaboradores conforto e segurança nas suas operações, atingindo
            altos níveis de produtividade. Nossos reflorestamentos próprios
            permitem abastecimento continuo de nossas matérias primas em
            qualquer época do ano, e são certificados com rígidos processos de
            controle, incluindo o certificado FSC. Tudo isso com o compromisso
            de manter o equilíbrio do meio ambiente, protegendo matas nativas,
            nascentes e cuidando com responsabilidade da fauna e da flora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
