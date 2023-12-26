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
      <div className="bg-green-700 h-1/2 w-full sm:mt- flex md:flex-row flex-col justify-around items-start p-20">
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
              <Link href="https://www.instagram.com/canaapallets/tagged/">
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
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Sobre nós</p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#empresa">Quem Somos </Link>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/#valores">Nossos valores</Link>
            </li>

            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <Link href="/contact">Contato </Link>
            </li>
          </ul>
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
