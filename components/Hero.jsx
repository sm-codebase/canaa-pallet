import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import SlImgSm1 from "../public/assets/sl-img-sm-1.png";
import SlImg1 from "../public/assets/sl-img-1.jpg";
import ProdutoImg from "../public/assets/pr-img-1.png";

import MainSlider from "./MainSlider";

const Main = () => {
  return (
    <div id="/" style={{ paddingTop: '80px' }}>
      <div className="md:hidden">
        <div className="pt-10">
          <Carousel
            autoPlay={true}
            showArrows={false}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable={false}
            className="carousel-container" // Adicione a classe aqui
          >
            <MainSlider sliderImg={SlImgSm1} />
            <MainSlider sliderImg={SlImgSm1} />
          </Carousel>
        </div>
      </div>
      <div className="hidden md:block sm:block">
        <div className="pt-10">
          <Carousel autoPlay infiniteLoop={true}>
            <MainSlider sliderImg={SlImgSm1} />
            <MainSlider sliderImg={SlImg1} />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="md:px-4 p-4">
          <Image
            src={ProdutoImg}
            alt="/"
            width={344}
            height={163}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
