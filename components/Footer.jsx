import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import NavLogo from "../public/white-logo.svg";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="bg-green-700 h-[200px] w-full flex md:flex-row flex-col justify-around items-center  p-10">
        <div>
          <ul>
            <a>
              <Image
                src={NavLogo}
                alt="/"
                width="170"
                height="70"
                className="cursor-pointer"
              />
            </a>
          </ul>
        </div>

        <div className="flex  gap-6 ">
          <Link href="https://www.instagram.com/canaa.pallets">
            <a target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-white cursor-pointer hover:text-gray-300" />
            </a>
          </Link>

          <Link href="https://www.facebook.com/p/Cana%C3%A3-Pallets-100054272239989/?locale=pt_BR">
            <a target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-white cursor-pointer hover:text-gray-300" />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/company/canaapallets">
            <a target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-gray-300" />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h3 className=" text-gray-800 font-semibold">
          © 2023 Todos os direitos reservados | Desenvolvido ❤ pela{" "}
          <span className="hover:text-red-600 font-semibold cursor-pointer">
            <Link href="https://www.sousasmidia.com.br/">
              <a target="_blank" rel="noopener noreferrer">
                Sousas Midia
              </a>
            </Link>
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
