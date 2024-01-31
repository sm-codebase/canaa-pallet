import React from "react";
import ProdutoImg from "../public/assets/empresa-3.jpg";
import Image from "next/image";

export default function NossosValores() {
  return (
    <div id="quemsomos" className="mt-24 ">
      <div className="duration-500 relative transition-opacity bg-gradient-to-r from-green-900 to-green-700 rounded-xl">
        <Image
        src={ProdutoImg} 
        alt="/" 
        width={0} 
        height={900} 
        className="cursor-pointer opacity-30 transition-opacity duration-500 group-hover:opacity-30"    
        style={{ borderRadius: "15px" }}
       
        />
      </div>

      <div className="p-5 md:p-20">
        <h2 className=" font-sans text-4xl">Valores</h2>
        <div className="text-base mt-5">
          Os valores fundamentais que norteiam a Canaã Pallets são integridade,
          colaboração, empenho, perspectiva, melhoria contínua, inovação e
          flexibilidade. Comprometemo-nos com a honestidade e justiça,
          valorizamos o trabalho em equipe e demonstramos uma forte determinação
          para vencer. Buscamos equilíbrio em todas as ações, considerando
          diversas perspectivas. A constante busca por soluções inovadoras está
          enraizada em nossa filosofia de melhoria contínua, refletindo-se em
          processos aprimorados e produtos de qualidade. Adotamos uma abordagem
          flexível e inovadora para superar as expectativas dos clientes,
          promovendo sustentabilidade e inovação em nossas embalagens de
          madeira. Esses valores não são apenas parte de nossa cultura
          organizacional, mas também orientam nossas práticas diárias. A Canaã
          Pallets, além de fabricar embalagens de madeira, compromete-se a viver
          e aplicar diariamente os princípios de integridade, colaboração,
          empenho, perspectiva, melhoria contínua, inovação e flexibilidade.
          Esses são os alicerces que impulsionam a busca constante pela
          excelência em nossas operações.
        </div>
      </div>
    </div>
  );
}
