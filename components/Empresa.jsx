import React from "react";
import ProdutoImg from "../public/assets/empresa-1.jpg";
import Image from "next/image";

export default function Empresa() {
  return (
    <div id="quemsomos" className="mt-24">

      
      <div className="">
        <Image
         src={ProdutoImg} 
         alt="/" 
         width={0} 
         height={1500} 
         className="cursor-pointer"  
         style={{ borderRadius: "15px" }}
         />
      </div>

      

      <div className="p-5 md:p-20">
        <h2 className=" font-sans text-4xl">Empresa</h2>
        <div className="text-lg font-sans mt-5">
          Há 15 anos, a Canaã Pallets é referência na fabricação de pallets e
          embalagens de madeira, situada em Mogi Guaçu, São Paulo. Comprometida
          com a excelência e qualidade, buscamos constantemente superar as
          expectativas dos clientes. Nossa trajetória é marcada por
          investimentos em tecnologia e uma equipe altamente qualificada,
          permitindo oferecer soluções personalizadas e produtos duráveis.
          Reconhecidos pela resistência, nossos pallets utilizam madeira de
          fontes sustentáveis, reforçando nosso compromisso ambiental. A
          conformidade com normas e regulamentações, aliada à atenção às
          demandas do mercado, assegura a qualidade e segurança de nossos
          produtos. Priorizando a satisfação do cliente, a Canaã Pallets
          constrói parcerias duradouras, destacando-se pelo atendimento
          personalizado e compreensão das necessidades individuais. Nosso
          compromisso não se limita à produção, estendendo-se à responsabilidade
          social. Participamos ativamente de iniciativas comunitárias,
          contribuindo para o desenvolvimento sustentável da região. Em 15 anos,
          superamos desafios, celebramos conquistas e construímos uma história
          de crescimento. A Canaã Pallets é mais que uma empresa, é um símbolo
          de comprometimento, qualidade e confiança. Agradecemos a clientes,
          colaboradores e parceiros, reafirmando nosso compromisso de continuar
          oferecendo produtos que superem expectativas.
        </div>
      </div>
    </div>
  );
}
