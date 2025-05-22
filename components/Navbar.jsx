import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavLogo from "../public/logo.svg";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
      } else {
        setColor("white");
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      id="navbar"
      style={{ backgroundColor: `${color}` }}
      className="fixed h-[95px] left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="Logo"
              width="170"
              height="50"
              className="cursor-pointer"
            />
          </a>
        </Link>

        <p className="text-black hidden sm:block">
          Nosso produto é a base para os seus negócios
        </p>
        
        {/* Botão de menu hamburger */}
        <div onClick={handleNav} className="block z-10">
          <Hamburger color="gray" toggled={nav} toggle={setNav} />
        </div>

        {/* Menu mobile */}
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center w-full h-screen bg-green-700 text-center ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col items-center justify-center w-full h-screen bg-green-700 text-center ease-in duration-300"
          }
        >
          <div className="w-full max-w-md text-white text-2xl space-y-8">
            {/* Seção Canaã */}
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-4 border-b-2 border-white inline-block pb-2">
                Canaã
              </h1>
              <ul className="mt-4 space-y-4">
                <li onClick={handleNav} className="hover:text-gray-300">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={handleNav} className="hover:text-gray-300">
                  <Link href="/empresa">Quem Somos</Link>
                </li>
                <li onClick={handleNav} className="hover:text-gray-300">
                  <Link href="/sustentabilidade">Sustentabilidade</Link>
                </li>
                <li onClick={handleNav} className="hover:text-gray-300">
                  <Link href="/trabalheconosco">Trabalhe Conosco</Link>
                </li>
              </ul>
            </div>

            {/* Seção Produtos */}
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-4 border-b-2 border-white inline-block pb-2">
                Produtos
              </h1>
              <ul className="mt-4 space-y-4">
                <li onClick={handleNav} className="hover:text-gray-300">
                  <Link href="/engradados">Caixas e Engradados</Link>
                </li>
                <li onClick={handleNav} className="hover:text-gray-300">
                  <Link href="/pallets">Pallet</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
