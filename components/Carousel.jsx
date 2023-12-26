import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import primg1 from "../public/assets/carousel/pr-img-1.jpg";
import primg2 from "../public/assets/carousel/pr-img-2.jpg";
import primg3 from "../public/assets/carousel/pr-img-3.jpg";
import primg4 from "../public/assets/carousel/pr-img-4.jpg";
import Logo from "../public/assets/carousel/logo.png";

const slides = [
  {
    id: 1,
    src: primg1,
    alt: "Image 1",
    summary: "Sustentabilidade e qualidade caminham lado a lado",
    description:
      "Fabricamos produtos e embalagens de madeira com a certificação ISO, garantindo que cada peça seja ecologicamente responsável e ideal para necessidades industriais. ",
  },
  {
    id: 2,
    src: primg2,
    alt: "Image 2",
    summary: "Embalagens sob medida",
    description:
      "Nossa abordagem personalizada assegura que cada embalagem seja projetada com precisão, garantindo a proteção ideal para seus produtos durante o transporte e armazenamento. Ao optar por nossas embalagens sob medida, você está escolhendo a excelência em design e funcionalidade para atender aos requisitos únicos do seu setor.",
  },
  {
    id: 3,
    src: primg3,
    alt: "Image 3",
    summary: "Estamos comprometidos com um futuro sustentável",
    description:
      "Utilizando 100% de energia proveniente do sol. Ao nos escolher, você apoia um futuro mais limpo e sustentável.",
  },
  {
    id: 4,
    src: primg4,
    alt: "Image 4",
    summary:
      "Compromisso com o futuro! Todas as nossas embalagens e produtos de madeira vêm de fontes de reflorestamento.",
    description:
      "Canaã Pallets, cada produto conta uma história de responsabilidade ambiental. Nossas embalagens e pallets são frutos de florestas geridas de forma sustentável, garantindo o equilíbrio do nosso ecossistema. Escolha parceiros que, como nós, colocam o planeta em primeiro lugar.",
  },
];
function Carousel() {
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
    <div
      className="max-w-[1200px] h-[560px] w-full m-auto py- px-2  relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full mt-24 bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-green-900 to-green-700">
        <Image
          className="rounded-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-30"
          src={slides[currentIndex].src}
          alt={`Slide ${slides[currentIndex].id}`}
          layout="fill"
          objectFit="cover"
          priority // Add the priority property
        />

        <div className="absolute px-4 flex items-center justify-center font-bold text-center animate-fade-in drop-shadow-lg h-full w-full">
          <div>
            <h1 className="text-3xl uppercase bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-400 to-green-500 drop-shadow-2xl">
              {slides[currentIndex].summary}
            </h1>
            <p className="text-white py-4">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-5 grid justify-items-center w-full">
          <Image src={Logo} alt="logo-branco" height={38.5} width={116.6} />
        </div>
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
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slide.id - 1)}
            className="text-lg cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
