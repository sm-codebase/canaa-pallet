import React, { useState } from "react";
import Image from "next/image";
import ProdutoImg from "../public/assets/empresa-12.jpg";
import Link from "next/link";
import Contact from "./Contact";
import Cert11 from "../public/assets/cetifications/logo-22.png";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";
import { MdArrowRightAlt } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const defaultSummary = "  COMPROMISSO COM A  SUSTENTABILIDADE: ";
const defaultDescription =
  "Desde o início, na Canaã Pallets, priorizamos a preservação ambiental, utilizando apenas madeira de reflorestamento para nossos produtos. Para ampliar nosso compromisso sustentável, investimos em energia fotovoltaica, o que nos permite ter processos mais limpos. Essa iniciativa evita anualmente a emissão de 183,48 toneladas de CO², equivalente ao plantio de 10.480 árvores. Estamos olhando para o futuro de forma responsável.";

const Sustentabilidade = () => {
  const [isPara1Visible, setPara1Visible] = useState(false);
  const [isPara1Visible2, setPara1Visible2] = useState(false);

  const togglePara1Visibility = () => {
    setPara1Visible(!isPara1Visible);
  };
  const togglePara2Visibility = () => {
    setPara1Visible2(!isPara1Visible2);
  };
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
    <div id="sustentabilidade" className=" mx-auto text-black ">
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

      <div className="bg-gray-300 h-full ">
        <div
          style={{ borderRadius: "60px" }}
          className="bg-gradient-to-r from-[#048f1a] to-[#64ac6d] text-white  md:w-[1250px] md:h-[550px]  mx-auto relative -mt-32 "
        >
          <div className="grid justify-center p-10 mt-10 ">
            <div className="md:flex grid justify-center gap-5 ">
              <div className="">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={Cert11}
                  alt="iso-9001"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>

          <div className="grid text-center p-10  font-medium text-xl leading-loose">
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

        <div className="p-5 md:grid  gap-4 text-white">
          <div className="rounded-lg p-4 mt-4 md:w-[800px] mx-auto bg-gray-400">
            <div
              onClick={togglePara1Visibility}
              className="flex items-center cursor-pointer"
            >
              <IoIosArrowDown />
              <h2 className="p-2 font-bold text-2xl">
                Madeiras de reflorestamento
              </h2>
            </div>
            <p
              id="para1"
              className={`p-4 ${isPara1Visible ? "block" : "hidden"}`}
            >
              As madeiras de reflorestamento são fundamentais para a preservação
              ambiental e o desenvolvimento sustentável. Originadas de áreas
              replantadas, essas madeiras promovem a conservação de ecossistemas
              naturais e reduzem a pressão sobre florestas nativas. Além disso,
              contribuem para a economia local e global, oferecendo uma
              alternativa ecologicamente correta para a produção de diversos
              produtos. Investir em madeiras de reflorestamento é investir no
              futuro do nosso planeta, garantindo recursos renováveis e um
              ambiente equilibrado para as gerações futuras.
            </p>
          </div>

          <div className="rounded-lg p-4 mt-4 md:w-[800px] mx-auto bg-gray-400">
            <div
              onClick={togglePara2Visibility}
              className="flex items-center cursor-pointer"
            >
              <IoIosArrowDown />
              <h2 className="p-2 font-bold text-2xl">Energia renovavel</h2>
            </div>
            <p
              id="para1"
              className={`p-4 ${isPara1Visible2 ? "block" : "hidden"}`}
            >
              A energia renovável é uma fonte vital para o futuro sustentável do
              nosso planeta. Derivada de recursos naturais como sol, vento, água
              e biomassa, ela oferece uma alternativa limpa e inesgotável às
              fontes tradicionais de energia. Além de reduzir as emissões de
              gases de efeito estufa, a energia renovável promove a
              independência energética e estimula a inovação tecnológica.
              Investir em fontes renováveis não apenas impulsiona o
              desenvolvimento econômico, mas também preserva os ecossistemas e
              melhora a qualidade de vida das comunidades locais e globais.
            </p>
          </div>
        </div>

        <div>
          <div className=" text-white  w-full h-full md:h-[700px]">
            <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-10">
              <div
                style={{ borderRadius: "20px", transition: "all 0.4s" }}
                className="bg-[#048f1a] w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-600"
              >
                <div className="p-5">
                  <FaGear size={70} color="white" />
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
                className="bg-[#048f1a] w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-600 "
              >
                <div className="p-5">
                  <PiPottedPlantFill size={80} color="white" />
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
                className="bg-[#048f1a] w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-600"
              >
                <div className=" p-5">
                  <FaHelmetSafety size={70} color="white" />
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
    </div>
  );
};

export default Sustentabilidade;
