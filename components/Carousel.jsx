import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import primg1 from "../public/assets/carousel/pr-img-1.jpg";
import primg2 from "../public/assets/carousel/pr-img-2.jpg";
import primg3 from "../public/assets/carousel/pr-img-3.jpg";
import primg4 from "../public/assets/carousel/pr-img-4.jpg";

const slides = [
  { id: 1, src: primg1, alt: "Image 1", text: "Procurando por soluções sustentáveis em embalagens e pallets?" },
  { id: 2, src: primg2, alt: "Image 2", text: "Na Canaã Pallets, comprometemo-nos a oferecer embalagens e pallets provenientes de fontes de reflorestamento, promovendo a sustentabilidade e a preservação do nosso planeta." },
  { id: 3, src: primg3, alt: "Image 3", text: "Na Canaã Pallets, sustentabilidade e qualidade andam juntas, oferecendo soluções de madeira certificada pela ISO, sob medida para suas necessidades industriais." },
  { id: 4, src: primg4, alt: "Image 4", text: "Na Canaã Pallets, optamos pela energia solar, reduzindo emissões de gases de efeito estufa, contribuindo para um futuro mais sustentável." },
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
      className="max-w-[1200px] h-[560px] w-full m-auto py- px-4  relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <div className="w-full h-full mt-24 bg-center bg-cover duration-500">
        <Image className="rounded-2xl opacity-50"
          src={slides[currentIndex].src}
          alt={`Slide ${slides[currentIndex].id}`}
          layout="fill"
          objectFit="cover"
          priority // Add the priority property
        />
        
        <div className="absolute inset-10 flex items-end justify-center text-green-800 text-2xl font-serif text-center font-bold">
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
