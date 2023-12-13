import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import primg5 from "../public/assets/carousel/pr-img-5.jpg";
import primg6 from "../public/assets/carousel/pr-img-6.jpg";
import primg7 from "../public/assets/carousel/pr-img-7.jpg";
import primg8 from "../public/assets/carousel/pr-img-8.jpg";

const slides = [
  { id: 1, src: primg5, alt: "Image 1", text: "Os pallets são versáteis, sendo usados na logística e no design de móveis sustentáveis. Sua estrutura simples permite reutilização criativa, promovendo soluções econômicas e ecológicas." },
  { id: 2, src: primg6, alt: "Image 2", text: "Os pallets, feitos com madeira ou plástico, são peças fundamentais na cadeia de suprimentos, facilitando o transporte e armazenamento de cargas de forma eficiente." },
  { id: 3, src: primg7, alt: "Image 3", text: "Além de seu uso tradicional na indústria, os pallets ganharam popularidade como base para criação de móveis, estimulando a criatividade e a sustentabilidade no design de interiores." },
  { id: 4, src: primg8, alt: "Image 4", text: "A reutilização de pallets em projetos DIY (faça você mesmo) oferece uma oportunidade única de criar objetos únicos e personalizados, agregando valor estético e ambiental às criações." },
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
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered, currentIndex]);

  return (
    <div
      className="max-w-[1080px] h-[560px] w-full m-auto  py- px-4  relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <div className="w-full h-full mt-24 bg-center bg-cover duration-500">
        <Image className="rounded-2xl"
          src={slides[currentIndex].src}
          alt={`Slide ${slides[currentIndex].id}`}
          layout="fill"
          objectFit="cover"
          priority // Add the priority property
        />
        
        <div className="absolute inset-10 flex items-center justify-center text-white text-2xl font-bold">
          {slides[currentIndex].text}
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
