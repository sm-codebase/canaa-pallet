import React, { useState } from "react";
import Image from "next/image";
import ProdutoImg from "../public/assets/empresa.png";
import Link from "next/link";
import Contact from "./Contact";
import Cert1 from "../public/assets/cetifications/iso-9001.png";
import Cert2 from "../public/assets/cetifications/bureau-veritas.png";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

const defaultSummary = "  Compromisso com o Futuro Sustentável de Todos ";
const defaultDescription =
  "Nosso compromisso reside no cuidado com o futuro de todos. Priorizamos o respeito ao meio ambiente em todas as atividades de nossa indústria de embalagens. Mantemos nossas próprias áreas florestais, além de nos empenharmos na reciclagem e no aproveitamento máximo dos recursos naturais, garantindo a promoção da sustentabilidade em todas as fases de nossa produção.";

const Sustentabilidade = () => {
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
    <div id="sustentabilidade" className="container mx-auto text-black ">
      <div className="max-w-full h-[700px] md:h-[700px] w-full m-auto relative group">
        <div className="w-full h-full mt-24 bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
          <Image
            className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
            src={ProdutoImg}
            alt={"/"}
            layout="fill"
            objectFit="cover"
            priority // Add the priority property
          />

          <div className="absolute p-5 md:grid grid-cols-3 md:p-20 mt-    animate-fade-in drop-shadow-lg h-full w-full">
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

      <div className="bg-gray-300 h-full">
        <div
          style={{ borderRadius: "60px" }}
          className="bg-gray-800 text-white  md:w-[1250px] md:h-[550px]  mx-auto relative -mt-32 "
        >
          <div className="grid justify-center p-10 mt-10 ">
            <div className="md:flex grid justify-center gap-5 ">
              <div className="">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={Cert1}
                  alt="iso-9001"
                  width={150}
                  height={150}
                  style={{ borderRadius: "100px" }}
                />
              </div>
              <div className="">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={Cert2}
                  alt="bureau-veritas"
                  width={150}
                  height={150}
                  style={{ borderRadius: "100px" }}
                />
              </div>
            </div>
          </div>

          <div className="grid text-center p-10  font-bold text-xl leading-loose">
            <p>
              Nossa estratégia ambiental inclui controlar e reduzir a emissão de
              gases do efeito estufa em todos os nossos processos. Conforme
              nossas florestas vão se desenvolvendo, sequestram e estocam
              toneladas de CO2 da atmosfera e contribuem para diminuir os
              efeitos dos gases estufa, contribuindo na melhoria das mudanças
              climáticas em nosso planeta.
            </p>
          </div>
        </div>

        <div>
          <div className="container   text-white  w-full h-full md:h-[700px]">
            <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
              <div
                style={{ borderRadius: "20px", transition: "all 0.4s" }}
                className="bg-teal-500 w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-500"
              >
                <div className="p-5">
                  <FaGear size={70} color="#00FE00" />
                </div>
                <h1 className="grid text-3xl font-bold text-white p-5">
                  Visão
                </h1>
                <p className="grid text-xl font-medium p-5">
                  Na Canaã Pallets, nossa visão é liderar o mercado de pallets
                  com inovação e qualidade incomparáveis, atendendo às
                  necessidades dos nossos clientes de forma eficiente e
                  sustentável.
                </p>
              </div>

              <div
                style={{ borderRadius: "20px", transition: "all 0.4s" }}
                className="bg-teal-500 w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-500 "
              >
                <div className="p-5">
                  <PiPottedPlantFill size={80} color="#00FE00" />
                </div>
                <h1 className="grid text-3xl font-bold text-white p-5">
                  Nossa Missão
                </h1>
                <p className="grid text-xl font-medium p-5">
                  Nossa missão é fornecer produtos de alta qualidade que atendam
                  às demandas específicas de cada cliente. Estamos empenhados em
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
                <h1 className="grid text-3xl font-bold text-white p-5">
                  Valores
                </h1>
                <p className="grid text-xl font-medium p-5">
                  Nossos valores fundamentais são a excelência, a integridade e
                  o compromisso com a satisfação do cliente. Buscamos
                  constantemente aprimorar nossos processos, promover relações
                  transparentes e éticas, e priorizar a qualidade em tudo o que
                  fazemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Sustentabilidade;
