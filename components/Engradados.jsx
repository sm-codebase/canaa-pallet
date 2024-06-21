import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import primg1 from "../public/assets/engradados/img-1.jpg";
import primg2 from "../public/assets/engradados/img-2.jpg";
import primg3 from "../public/assets/engradados/img-3.jpg";
import primg4 from "../public/assets/engradados/img-4.jpg";
import primg5 from "../public/assets/engradados/img-5.jpg";
import ProdutoImg from "../public/assets/engradados/image-eng.jpg";
import ProdutoImg1 from "../public/assets/empresa-13.jpg";
import Tratamento from "../public/assets/engradados/tratamento.jpg";
import Link from "next/link";
import Contact from "./Contact";
import Logo from "../public/assets/logo.png";

const defaultSummary = "Pallets";
const defaultDescription = "";

const slides = [
  {
    id: 1,
    src: primg1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: primg2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: primg3,
    alt: "Image 3",
  },
  {
    id: 4,
    src: primg4,
    alt: "Image 4",
  },
  {
    id: 5,
    src: primg5,
    alt: "Image 5",
  },
];

const images = [
  {
    id: 1,
    src: ProdutoImg,
    alt: "Image 1",
    summary: "Engradados e caixas",
    description: "",
  },

  {
    id: 2,
    src: Tratamento,
    alt: "Image 1",
    summary: "Tratamento fitossanitário",
    description:
      "O que é? O tratamento fitossanitário de pallets é um conjunto de práticas para prevenir, controlar e erradicar pragas e doenças na madeira utilizada em pallets. Esse tratamento é essencial para garantir a segurança e a qualidade dos pallets, evitando a disseminação de pragas entre diferentes regiões e países.",
    description2: "IMPORTÂNCIA! Proteção contra Pragas: Evita a proliferação de insetos e outros organismos que podem danificar a madeira. Conformidade Legal: Atende às normas internacionais, como a ISPM 15, permitindo o uso de pallets em exportações.Segurança e Qualidade: Garante que os pallets sejam seguros e duráveis para o transporte e armazenamento de mercadorias.",
  },
];

function Pallets() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      // Auto-scroll every 5 seconds (adjust the interval as needed)
      intervalId = setInterval(() => {
        nextSlide();
      }, 10000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered, currentIndex]);

  return (
    <div id="engradados">
      <div className="max-w-full h-[400px] md:h-[450px] w-full m-auto ">
        <div className="w-full h-full mt-24 bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
          <Image
            className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
            src={ProdutoImg}
            alt={"/"}
            layout="fill"
            objectFit="cover"
            priority // Add the priority property
          />

          <div className="absolute p-5 md:grid grid-cols-3 md:p-20 mt-16  animate-fade-in drop-shadow-lg h-full w-full">
            <div className="">
              <h1 className="text-4xl  md:text-5xl  bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-green-400 to-green-500 drop-shadow-2xl">
                {images[currentIndex % images.length].summary}
              </h1>
              <p className="text-white py-4 text-base font-medium font-mono md:leading-8">
                {images.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div
          className="max-w-full h-[400px] md:h-[500px] md:w-[800px] m-auto relative group -mt-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-full  bg-center bg-cover duration-500 relative transition-opacity ">
            <Image
              className="rounded-2xl "
              src={slides[currentIndex].src}
              alt={`Slide ${slides[currentIndex].id}`}
              layout="fill"
              objectFit="cover"
              priority // Add the priority property
            />
          </div>

          {/* Left Arrow*/}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow*/}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:m-20 p-5 font-medium text-xl text-gray-900 leading-8 ">
          <p className="">
            A Canna Pallets é uma empresa reconhecida por fornecer uma ampla
            variedade de soluções de pallets adequadas para atender às demandas
            de diversos setores, tanto no mercado doméstico quanto nas
            exportações. Nosso compromisso com a excelência e a inovação nos
            torna uma escolha confiável para uma ampla gama de indústrias,
            incluindo automotiva, alimentícia, papelaria, farmacêutica, química,
            petroquímica, eletroeletrônica, bens de consumo e outros. Para cada
            um desses setores, a Canna Pallets desenvolveu pallets específicos
            que atendem aos mais altos padrões de qualidade e segurança.
          </p>{" "}
          <p>
            Nossos pallets são projetados para garantir a integridade dos
            produtos durante o transporte, armazenamento e manuseio, além de
            estarem em conformidade com as regulamentações e normas exigidas por
            cada mercado.
          </p>
          <p>
            {" "}
            No segmento automotivo, por exemplo, a Canna Pallets oferece
            soluções robustas e duráveis para proteger peças e componentes,
            garantindo que cheguem ao destino final em condições ideais. No
            setor alimentício, nossos pallets são desenvolvidos com materiais
            seguros e higiênicos para preservar a qualidade dos alimentos. Da
            mesma forma, no mercado farmacêutico, dedicamos esforços para criar
            pallets que atendam aos mais rigorosos padrões de segurança e
            regulamentação.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-5 bg-gray-200 w-full h-full p-5 md:h-[700px]">
        <div
          style={{ borderRadius: "20px" }}
          className="bg-gradient-to-r from-[#048f1a] to-[#64ac6d] text-white  h-[500px] md:w-[600px] mx-auto"
        >
          <div className="grid justify-center p-10">
            <Image src={Logo} alt="logo-branco" height={38.5} width={120} />
          </div>

          <div className="grid text-left  font-sans font-medium text-lg leading-loose mx-10">
            <h1 className="font-semibold text-xl p-4">Diferencias:</h1>
            <ul className="list-disc">
              <li className="p-4">Pallets de Madeira</li>
              <li className="p-4"> Origem da Madeira</li>
              <li className="p-4">Pallets Fumigados</li>
              <li className="p-4">
                Conformidade com Padrões de Qualidade e Segurança
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="max-w-full h-[500px] md:h-[500px] md:w-[600px] mx-auto">
            <div className="w-full h-full  bg-center bg-cover duration-500 relative transition-opacity">
              <Image
                className="rounded-xl"
                src={ProdutoImg1}
                alt={"/"}
                layout="fill"
                objectFit="cover"
                priority // Add the priority property
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-full h-[400px] md:h-[800px] w-full m-auto">
          <div className="w-full h-full  bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
            <Image
              className="opacity-30 transition-opacity duration-500 group-hover:opacity-30"
              src={Tratamento}
              alt={"/"}
              layout="fill"
              objectFit="cover"
            />

            <div className="absolute p-5 md:grid grid-cols-3 md:p-20 mt-16  animate-fade-in drop-shadow-lg h-full w-full">
              <div className="">
                <h1 className="text-4xl  md:text-5xl  bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-green-400 to-green-500 drop-shadow-2xl">
                  {images[1].summary}
                </h1>
                <p className="text-white py-4 text-base font-medium font-mono md:leading-8">
                  {images[1].description}
                </p>
                <p className="text-white py-4 text-base font-medium font-mono md:leading-8">
                  {images[1].description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pallets;
