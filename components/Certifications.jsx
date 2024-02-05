import React from "react";
import Image from "next/image";
import Cert1 from "../public/assets/cetifications/iso-9001.png";
import Cert2 from "../public/assets/cetifications/bureau-veritas.png";

const Certifications = () => {
  return (
    <div className="w-full h-full bg-green-700 p-2 mt-10 rounded-xl">
      <div className=" justify-items-center ">
        <h1 className="text-center text-2xl font-semibold leading- text-white">
          Nossas certificações
        </h1>
        
        <div className="md:flex grid justify-center gap-5 ">
          <div className="">
            <Image
              className="rounded-full col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Cert1}
              alt="iso-9001"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image
              className="rounded-full col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Cert2}
              alt="bureau-veritas"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
