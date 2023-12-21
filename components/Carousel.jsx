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
    summary:
      "Os pallets são versáteis, sendo usados na logística e no design de móveis sustentáveis.",
    description:
      "Sua estrutura simples permite reutilização criativa, promovendo soluções econômicas e ecológicas.",
  },
  {
    id: 2,
    src: primg2,
    alt: "Image 2",
    summary: "Os pallets, feitos com madeira ou plástico",
    description:
      "Peças fundamentais na cadeia de suprimentos, facilitando o transporte e armazenamento de cargas de forma eficiente.",
  },
  {
    id: 3,
    src: primg3,
    alt: "Image 3",
    summary:
      "Além de seu uso tradicional na indústria, os pallets ganharam popularidade como base para criação de móveis",
    description:
      "Estimulando a criatividade e a sustentabilidade no design de interiores.",
  },
  {
    id: 4,
    src: primg4,
    alt: "Image 4",
    summary:
      "A reutilização de pallets em projetos DIY (faça você mesmo) oferece uma oportunidade única de criar objetos únicos e personalizados",
    description: "agregando valor estético e ambiental às criações.",
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
      className="max-w-[1200px] h-[560px] w-full m-auto py- px-4  relative group"
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

        <div className="absolute py-40 px-3 font-bold text-center animate-fade-in drop-shadow-lg">
          
          <h1 className="text-3xl uppercase bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-100 to-green-100 drop-shadow-2xl">
            {slides[currentIndex].summary}
          </h1>
          <p className="text-white py-4">{slides[currentIndex].description}</p>
        </div>
        <div className="absolute bottom-5 grid justify-items-center w-full">
          <Image
          src={Logo}
          alt="logo-branco"
          height={38.5}
          width={116.6}
          />
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
            className="test-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
