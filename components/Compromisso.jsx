import React from "react";
import ProdutoImg from "../public/assets/empresa-2.jpg";
import Image from "next/image";

export default function Compromisso() {
  return (
    <div id="quemsomos" className="mt-24">
      <div className="duration-500 relative transition-opacity bg-gradient-to-r from-green-900 to-green-700 rounded-xl">
        <Image
          src={ProdutoImg}
          alt="/"
          width={0}
          height={500}
          className="cursor-pointer opacity-30 transition-opacity duration-500 group-hover:opacity-30"
          layout="responsive"
          style={{ borderRadius: "15px" }}
        />
      </div>

      <div className="p-5 md:p-20">
        <h2 className=" font-sans text-4xl">Compromisso</h2>
        <div className="text-base font-sans mt-5">
          Nossa missão é superar as expectativas dos clientes, oferecendo
          produtos de alta qualidade e atendimento excepcional na fabricação de
          paletes e caixas de madeira. Localizada em Mogi Guaçu, São Paulo, a
          Canaã Pallets segue um compromisso sólido com a excelência, refletido
          em nossa cultura de valores compartilhados com os colaboradores.
          Buscamos continuamente aprimorar nossos processos e produtos,
          investindo em tecnologia e mantendo uma equipe altamente qualificada.
          Acreditamos que a inovação é fundamental para proporcionar soluções
          personalizadas e garantir a durabilidade de nossos paletes. Ao adotar
          normas rigorosas de qualidade e segurança, asseguramos a conformidade
          de nossos produtos com padrões do setor. A satisfação do cliente é
          central em nossa atuação, destacando-nos pelo atendimento
          personalizado e pela capacidade de entender as necessidades
          específicas de cada cliente. Além de nossa dedicação comercial, a
          Canaã Pallets abraça a responsabilidade social, participando
          ativamente de iniciativas comunitárias e projetos sociais para
          contribuir para o desenvolvimento sustentável da região. Em suma,
          nossa missão vai além da fabricação de paletes e caixas de madeira; é
          sobre construir parcerias duradouras, promover a inovação e a
          responsabilidade social, e continuar a história de crescimento e
          dedicação ao longo dos anos. Agradecemos a todos que fazem parte dessa
          jornada, reafirmando nosso compromisso de excelência e superação de
          expectativas.
        </div>
      </div>
    </div>
  );
}
