import React from "react";
import Image from "next/image";
import Cert11 from "../public/assets/cetifications/logo-11.jpg";

const Certifications = () => {
  return (
    <div className="container mx-auto  p-5">
      <div className="grid justify-items-center gap-5 ">
      <div>
      <h1 className="text-2xl font-bold">Somos certificados pela ISO 9001/2015</h1>
      </div>
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
