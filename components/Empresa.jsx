import React, { useState } from "react";
import ProdutoImg from "../public/assets/empresa-1.jpg";
import Image from "next/image";
import Contact from "./Contact";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

const defaultSummary = "  Compromisso com o Futuro Sustentável de Todos ";
const defaultDescription =
  "Nosso compromisso reside no cuidado com o futuro de todos. Priorizamos o respeito ao meio ambiente em todas as atividades de nossa indústria de embalagens. Mantemos nossas próprias áreas florestais, além de nos empenharmos na reciclagem e no aproveitamento máximo dos recursos naturais, garantindo a promoção da sustentabilidade em todas as fases de nossa produção.";

const Empresa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      src: ProdutoImg,
      alt: "Image 1",
      summary: defaultSummary,
      description: defaultDescription,
    },
  ];

  return (
    <div id="Empresa" className="container mx-auto text-black ">
      <div className="max-w-full h-[400px] md:h-[700px] w-full m-auto relative group">
        <div className="w-full h-full mt-24 bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
          <Image
            className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
            src={ProdutoImg}
            alt={"/"}
            layout="fill"
            objectFit="cover"
            priority // Add the priority property
          />

          <div className="absolute p-5 md:grid grid-cols-3 md:p-20 mt-16    animate-fade-in drop-shadow-lg h-full w-full">
            <div className="">
              <h1 className="text-3xl  md:text-4xl  bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-green-400 to-green-500 drop-shadow-2xl">
                {slides[currentIndex].summary}
              </h1>
              <p className="text-white py-4 text-base font-medium font-mono md:leading-8">
                {slides[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-20">
        <h2 className=" font-sans text-4xl">Quem somos</h2>
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

      <div className="container  bg-white text-white  w-full h-full md:h-[700px]">
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
          <div
            style={{ borderRadius: "20px", transition: "all 0.4s" }}
            className="bg-teal-500 w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-500"
          >
            <div className="p-5">
              <FaGear size={70} color="#00FE00" />
            </div>
            <h1 className="grid text-3xl font-bold text-white p-5">Visão</h1>
            <p className="grid text-xl font-medium p-5">
              Na <b>Canaã Pallets</b>, nossa visão é liderar o mercado de pallets com
              inovação e qualidade incomparáveis, atendendo às necessidades dos
              nossos clientes de forma eficiente e sustentável.
            </p>
          </div>

          <div
            style={{ borderRadius: "20px", transition: "all 0.4s" }}
            className="bg-teal-500 w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-500"
          >
            <div className="p-5">
              <PiPottedPlantFill size={80} color="#00FE00" />
            </div>
            <h1 className="grid text-3xl font-bold text-white p-5">
              Nossa Missão
            </h1>
            <p className="grid text-xl font-medium p-5">
              Nossa missão é fornecer produtos de alta qualidade que atendam às
              demandas específicas de cada cliente. Estamos empenhados em
              oferecer soluções personalizadas, promovendo a satisfação do
              cliente e o crescimento sustentável do nosso negócio.
            </p>
          </div>

          <div
            style={{ borderRadius: "20px", transition: "all 0.4s" }}
            className="bg-teal-500 w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-500"
          >
            <div className=" p-5">
              <FaHelmetSafety size={70} color="#00FE00" />
            </div>
            <h1 className="grid text-3xl font-bold text-white p-5">Valores</h1>
            <p className="grid text-xl font-medium p-5">
              Nossos valores fundamentais são a excelência, a integridade e o
              compromisso com a satisfação do cliente. Buscamos constantemente
              aprimorar nossos processos, promover relações transparentes e
              éticas, e priorizar a qualidade em tudo o que fazemos.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Empresa;
