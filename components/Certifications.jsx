import React from 'react'
import Image from 'next/image'
import Cert1 from '../public/assets/cetifications/iso-9001.png'

const Certifications = () => {
  return (
          <div className="p-2">
            <div className="mx-auto">
              <h1 className="text-center text-2xl font-semibold leading-8 text-green-700">
                Nossas certificações
              </h1>
              <div className="mx-auto mt-2 grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-2 sm:max-w-xl sm:grid-cols-4 sm:gap-x-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-2"
                  src={Cert1}
                  alt="Transistor"
                  width={200}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={Cert1}
                  alt="Reform"
                  width={200}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={Cert1}
                  alt="Tuple"
                  width={200}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src={Cert1}
                  alt="SavvyCal"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        )
      }

export default Certifications