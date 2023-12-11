import React from 'react'
import Image from 'next/image'
import Cert1 from '../public/assets/cetifications/iso-9001.png'
import Cert2 from '../public/assets/cetifications/bureau-veritas.png'

const Certifications = () => {
  return (
          <div className="h-full bg-green-700 p-2 mt-4">
            <div className="mx-auto">
              <h1 className="text-center text-2xl font-semibold leading- text-white">
                Nossas certificações
              </h1>
              <div className="mx-auto grid max-w-lg grid-cols-2 justify-items-center gap-x-2 gap-y-2 sm:max-w-xl sm:grid-cols-2 sm:gap-x-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 p-4">
                <Image
                  className="rounded-full col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={Cert1}
                  alt="iso-9001"
                  width={100}
                  height={100}
                />
                <Image
                  className="rounded-full col-span-2 max-h-2 w-full object-contain lg:col-span-1"
                  src={Cert2}
                  alt="bureau-veritas"
                  width={100}
                  height={100}
                />
                
              </div>
            </div>
          </div>
        )
      }

export default Certifications