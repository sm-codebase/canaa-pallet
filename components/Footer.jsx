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
    <>
      <div className="bg-green-700 h-1/2 w-full sm:mt-52 flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
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
            <div className="flex justify-center gap-6 pb-5">
              <Link href="https://www.instagram.com/">
                <FaInstagram className="text-2xl text-white cursor-pointer hover:text-gray-300" />
              </Link>
              <FaFacebook className="text-2xl text-white cursor-pointer hover:text-gray-300" />
              <FaWhatsapp className="text-2xl text-white cursor-pointer hover:text-gray-300" />
              <Link href="https://www.linkedin.com/company/canaapallets">
                <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-gray-300" />
              </Link>
              <Link href="https://www.wikipedia.org">
                <a target="_blank" rel="noopener noreferrer">
                  Open Wikipedia in a new tab
                </a>
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Empresa</p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              História
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              Missão
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Sobre nós</p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#empresa">Quem Somos </Link>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#valores">Nossos Valores</Link>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#projects">Clientes</Link>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#fale-agora">Fale Agora </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h3 className=" text-gray-800 font-semibold">
          © 2023 Todos os direitos reservados | Desenvolvido ❤ pela{" "}
          <span className="hover:text-red-600 font-semibold cursor-pointer">
            Sousas Midia{" "}
          </span>
        </h3>
      </div>
    </>
  );
}
export default Footer;
