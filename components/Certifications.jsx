import React from "react";
import Image from "next/image";
import Cert11 from "../public/assets/cetifications/logo-11.jpg";

const Certifications = () => {
  return (
    <div className="container mx-auto  p-5">
      <div className="md:flex grid justify-center gap-5 ">
        <div className="">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Cert11}
            alt="iso-9001"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
