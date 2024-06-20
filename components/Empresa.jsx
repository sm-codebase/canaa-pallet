import React, { useState } from "react";
import ProdutoImg from "../public/assets/quemsomos.jpg";
import ProdutoImg1 from "../public/assets/empresa-33.jpg";
import ProdutoImg2 from "../public/assets/empresa-22.jpg";
import ProdutoImg3 from "../public/assets/empresa-23.jpg";
import Image from "next/image";
import { FaGear, FaHelmetSafety } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";

const defaultSummary = "Quem somos";
const defaultDescription =
  "Nosso compromisso reside no cuidado com o futuro de todos. Priorizamos o respeito ao meio ambiente em todas as atividades de nossa indústria de embalagens. Mantemos nossas próprias áreas florestais, além de nos empenharmos na reciclagem e no aproveitamento máximo dos recursos naturais, garantindo a promoção da sustentabilidade em todas as fases de nossa produção.";
const endereço = "Mogi guaçu ";
const rua1 = "Rua Joaquim de Seabra, 515/525 - Jd. Nova Canaã";
const rua2 = "Rua Waldomiro Garcia de Oliveira, 87 - Jd. Nova Canaã";
const rua3 = "Rua Joaquim de Seabra, 19 - LT 19 QD B - Jd. Nova Canaã";

const Empresa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: ProdutoImg,
      alt: "Image 1",
      summary: defaultSummary,
      description: "",
    },
  ];
  const images1 = [
    {
      id: 1,
      src: ProdutoImg1,
      alt: "Image 1",
      summary: endereço,
      description: "Rua Joaquim de Seabra, 515/525 - Jd. Nova Canaã | Cep: 13.848-622",
    },
  ];
    const images2 = [
    {
      id: 2,
      src: ProdutoImg2,
      alt: "Image 2",
      summary: endereço,
      description: "Rua Waldomiro Garcia de Oliveira, 87 - Jd. Nova Canaã | Cep:  13.848-650",
    },
  ];
    const images3 = [
    {
      id: 3,
      src: ProdutoImg3,
      alt: "Image 3",
      summary: endereço,
      description: "Rua Joaquim de Seabra, 19 - LT 19 QD B - Jd. Nova Canaã | Cep: 13.848-622",
    },
  ];

  return (
    <div id="Empresa" className="   ">
      <div className="max-w-full h-[100px] md:h-[300px] w-full m-auto relative group">
        <div className="w-full h-full mt-24 bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
          <Image
            className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
            src={ProdutoImg}
            alt={"/"}
            layout="fill"
            objectFit="cover"
            priority // Add the priority property
          />

          <div className=" p-5 md:grid grid-cols-3 md:p-20 mt-16 flex items-end  animate-fade-in drop-shadow-lg h-full w-full">
            <div className="">
              <h1 className="text-4xl  md:text-5xl  bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-green-400 to-green-500 drop-shadow-2xl">
                {images[currentIndex].summary}
              </h1>
              <p className="text-white py-4 text-base font-medium font-mono md:leading-8">
                {images[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-10 md:mx-10">
        <div className="text-xl font-medium  mt-5 leading-8">
          Há quase duas décadas, a Canaã Pallets se destaca na fabricação de
          pallets e embalagens de madeira, buscando sempre superar as
          expectativas dos clientes. Investimos em automação e contamos com uma
          equipe altamente qualificada para oferecer soluções personalizadas.
          Nossos produtos são reconhecidos pela qualidade e utilizam madeira de
          fontes sustentáveis, reforçando nosso compromisso ambiental. Atuamos
          em diversos segmentos da indústria e buscamos ser reconhecidos pelo
          comprometimento, qualidade e confiança.
        </div>
      </div>

      <div className="bg-white text-white  w-full">
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 p-5 ">
          <div
            style={{ borderRadius: "20px", transition: "all 0.4s" }}
            className="bg-[#048f1a] w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-600"
          >
            <div className="p-5">
              <FaGear size={70} color="white" />
            </div>
            <h1 className="grid text-3xl font-bold text-white p-5">Visão</h1>
            <p className=" text-xl font-medium p-5">
              Na <b>Canaã Pallets</b>, nossa visão é liderar o mercado de
              pallets com inovação e qualidade incomparáveis, atendendo às
              necessidades dos nossos clientes de forma eficiente e sustentável.
            </p>
          </div>

          <div
            style={{ borderRadius: "20px", transition: "all 0.4s" }}
            className="bg-[#048f1a] w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-600"
          >
            <div className="p-5">
              <PiPottedPlantFill size={80} color="white" />
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
            className="bg-[#048f1a] w-[350px] md:w-[400px] h-[500px] hover:scale-110 hover:bg-green-600"
          >
            <div className=" p-5">
              <FaHelmetSafety size={70} color="white" />
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

      <div className="md:grid grid-cols-3 mt-10">
        <div className="max-w-full h-[240px] md:h-[400px] w-full m-auto hidden">
          <div className="w-full h-full  bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
            <Image
              className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
              src={ProdutoImg1}
              alt={"/"}
              layout="fill"
              objectFit="cover"
              priority // Add the priority property
            />

            <div className="    flex items-end  animate-fade-in drop-shadow-lg h-full w-full">
            <div className="bg-gray-400 w-full md:h-[100px]  p-4">
            <div className="flex items-center">
              <FaMapMarkerAlt color="green" />
              <h1 className=" mx-2 text-xl  bg-clip-text font-bold text-transparent bg-white drop-shadow-2xl">
                {images1[currentIndex].summary}
              </h1>
              </div>
              <p className="text-white  text-base font-medium font-mono md:leading-">
                {images1[currentIndex].description}
              </p>
            </div>
          </div>
          </div>
        </div>

        <div className="max-w-full h-[240px] md:h-[400px] w-full m-auto relative group hidden">
          <div className="w-full h-full  bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
            <Image
              className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
              src={ProdutoImg2}
              alt={"/"}
              layout="fill"
              objectFit="cover"
              priority // Add the priority property
            />

            <div className="flex items-end  animate-fade-in drop-shadow-lg h-full w-full">
              <div className="bg-gray-400 w-full md:h-[100px]  p-4">
              <div className="flex items-center">
                <FaMapMarkerAlt color="green" />
                <h1 className=" mx-2 text-xl  bg-clip-text font-bold text-transparent bg-white drop-shadow-2xl">
                  {images2[currentIndex].summary}
                </h1>
                </div>
                <p className="text-white  text-base font-medium font-mono md:leading-">
                  {images2[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-full h-[240px] md:h-[400px] w-full m-auto relative group hidden">
          <div className="w-full h-full bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
            <Image
              className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
              src={ProdutoImg3}
              alt={"/"}
              layout="fill"
              objectFit="cover"
              priority // Add the priority property
            />

            <div className="flex items-end  animate-fade-in drop-shadow-lg h-full w-full ">
              <div className="bg-gray-400 w-full md:h-[100px] p-4  ">
              <div className="flex items-center">
                <FaMapMarkerAlt color="green" />
                <h1 className=" mx-2 text-xl  bg-clip-text font-bold text-transparent bg-white drop-shadow-2xl">
                  {images3[currentIndex].summary}
                </h1>
                </div>
                <p className="text-white  text-base font-medium font-mono md:leading-">
                  {images3[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
