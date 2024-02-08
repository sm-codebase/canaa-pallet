import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLogo from "../public/logo.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("white");
        setTextColor("#000000");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);
  return (
    <div
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
        <div className="px-10 md:text-base text-lg font-thin leading-4 hidden sm:flex text-green-700">
          <p>Especialista fabricação de pallets e embalagens de madeira</p>
        </div>
        {/* Mobile button */}
        <div onClick={handleNav} className="block z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile menu */}
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green-700 text-center ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green-700 text-center ease-in duration-300"
          }
        >
          <div className="flex flex-col sm:flex-row justify-around items-center w-full p-4 sm:p-20 text-white text-left">
            <div className="prod" style={{ margin: "0 20px" }}>
              <ul>
                <h1 className="p-4 text-2xl" style={{ borderBottom: "2px solid white", paddingBottom: "10px" }}>Canaã</h1>
                <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
                  <Link href="/">Quem Somos</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
                  <Link href="/">Sustentabilidade</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
                  <Link href="/">Contatos</Link>
                </li>
                {/* Outros itens da lista */}
              </ul>
            </div>
            <div className="prod" style={{ margin: "0 20px" }}>
              <ul>
                <h1 className="p-4 text-2xl" style={{ borderBottom: "2px solid white", paddingBottom: "10px" }}>Produtos</h1>
                <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
                  <Link href="/">Produto 1</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
                  <Link href="/">Home</Link>
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