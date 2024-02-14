import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import primg1 from "../public/assets/carousel/pr-img-1.jpg";
import primg2 from "../public/assets/carousel/pr-img-2.jpg";
import Link from "next/link";

const defaultSummary = "Bem-vindo ao Novo Capítulo Digital!";
const defaultDescription =
  "Estamos empolgados em apresentar nosso novo site! Explore as inovações, descubra conteúdos exclusivos e mergulhe em uma experiência digital aprimorada.";

const slides = [
  {
    id: 1,
    src: primg1,
    alt: "Image 1",
    summary: defaultSummary,
    description: defaultDescription,
  },
 
  
  {
    id: 2,
    src: primg2,
    alt: "Image 4",
    summary: defaultSummary,
    description: defaultDescription,
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
    <div className="relative">
      <div
        className="max-w-full h-[920px] md:h-[900px] w-full m-auto relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full mt-24 bg-center bg-cover duration-500 relative transition-opacity bg-gradient-to-r from-black to-gray-900">
          <Image
            className="rounded-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-30"
            src={slides[currentIndex].src}
            alt={`Slide ${slides[currentIndex].id}`}
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
              <li className="grid justify-items-start">
                <Link href="/#missao">
                  <button className="md:w-1/2 w-full h-[40px] rounded-full mt-10 ">
                    Em Breve
                  </button>
                </Link>
              </li>
            </div>
          </div>
        </div>

        {/* Left Arrow*/}
        <div
          className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-40%] left-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow*/}
        <div
          className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-40%] right-5
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
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
