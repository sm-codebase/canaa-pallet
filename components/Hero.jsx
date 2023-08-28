import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import SlImgSm1 from "../public/assets/sl-img-sm-1.png";
import SlImgSm2 from "../public/assets/sl-img-sm-1.png";
import SlImg1 from "../public/assets/sl-img-1.png";
import SlImg2 from "../public/assets/sl-img-2.png";
import ProdutoImg from "../public/assets/pr-img-1.png";

import MainSlider from "./MainSlider";
import Certifications from "./Certifications";

const Main = () => {
  return (
    <div id="/" className="pt-10">
      <div className="md:hidden">
        <div className="">
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
          >
            <MainSlider sliderImg={SlImgSm1} />
            <MainSlider sliderImg={SlImgSm2} />
          </Carousel>
        </div>
      </div>
      <div className="hidden md:block sm:block">
        <div className="">
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
          >
            <MainSlider sliderImg={SlImg1} />
            <MainSlider sliderImg={SlImg2} />
          </Carousel>
        </div>
      </div>
      <div>
        <Certifications />
      </div>
    </div>
  );
};

export default Main;
