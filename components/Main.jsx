import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import SlImgSm1 from "../public/assets/sl-img-sm-1.png";
import SlImg1 from "../public/assets/sl-img-1.png";
import MainSlider from "./MainSlider";
import Certifications from "./Certifications";

const Main = () => {
  return (
    <div id="/" className="pt-10">
      <div className="lg:hidden md:hidden">
        <Carousel
          autoPlay={true}
          showArrows={false}
          infiniteLoop={true}
          interval={8000}
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={false}
        >
          <MainSlider sliderImg={SlImgSm1} />
        </Carousel>
      </div>

      <div className="sm:hidden">
        <Carousel
          autoPlay={true}
          showArrows={false}
          infiniteLoop={true}
          interval={8000}
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={false}
        >
          <MainSlider sliderImg={SlImg1} />
        </Carousel>
      </div>
      <div className="mb-10">
        <Certifications />
      </div>
    </div>
  );
};

export default Main;
