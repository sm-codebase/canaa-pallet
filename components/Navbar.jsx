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
      <div className="max-w-[1240p] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="170"
              height="50"
              className="cursor-pointer"
            />
          </a>
        </Link>

        <p className="text-black hidden sm:block">
          Nosso produto é a base para os seus negócios
        </p>
        {/* Mobile button */}
        <div onClick={handleNav} className="block z-10">
          <Hamburger color="gray" toggled={nav} toggle={setNav} />
        </div>
        {/* Mobile menu */}
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green-700 text-center ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green-700 text-center ease-in duration-300"
          }
        >
          <div className="flex flex-col sm:flex-row justify-around justify-items-center w-full p-4 sm:p-20 text-white text-start">
            <div className="prod" style={{ margin: "0 20px" }}>
              <ul>
                <h1
                  className="p-4 text-1xl"
                  style={{
                    borderBottom: "2px solid white",
                    paddingBottom: "10px",
                  }}
                >
                  Canaã
                </h1>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/empresa">Quem Somos</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/sustentabilidade">Sustentabilidade</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/trabalheconosco">Trabalhe conosco</Link>
                </li>
                {/* Outros itens da lista */}
              </ul>
            </div>
            <div className="prod " style={{ margin: "0 20px" }}>
              <ul>
                <h1
                  className="p-4 mt-5 text-1xl"
                  style={{
                    borderBottom: "2px solid white",
                    paddingBottom: "10px",
                  }}
                >
                  Produtos
                </h1>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/engradados">Caixas e engradados</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-2 text-2xl hover:text-gray-500"
                >
                  <Link href="/pallets">Pallet</Link>
                </li>
                {/* Outros itens da lista */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
