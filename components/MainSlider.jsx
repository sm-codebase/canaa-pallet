import Image from "next/image";
import React from "react";
import { FaShoePrints } from "react-icons/fa";

const MainSlider = ({ sliderImg }) => {
  return (
    <div>
      <div>
        <div className="carousel-slide">
          <Image
            src={sliderImg}
            alt=""
            width={600} // Defina o tamanho da imagem conforme necessário
            height={800} // Defina o tamanho da imagem conforme necessário
            style={{ borderRadius: "15px" }} // Adicione o estilo de borda arredondada
          />
        </div>
        {/* Overlay */}
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
          <p className="text-gray-300 hidden group-hover:block">
            <FaShoePrints size={30} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
