import React from "react";
import Image from "next/image";
import Cert1 from "../public/assets/cetifications/iso-9001.png";
import Cert2 from "../public/assets/cetifications/bureau-veritas.png";

const Certifications = () => {
  return (
    <div className="container mx-auto  p-5">
      <div className="md:flex grid justify-center gap-5 ">
        <div className="">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Cert1}
            alt="iso-9001"
            width={150}
            height={200}
          />
        </div>
        <div className="">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Cert2}
            alt="bureau-veritas"
            width={150}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
