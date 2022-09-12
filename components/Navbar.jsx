import Link from 'next/link'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import NavLogo from '../public/rubi.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('red')

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#000000');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);



  return (
    <div style={{backgroundColor: `${color}`}}className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-red-600'>
            <Link href='/'>
                <a>
                    <Image
                        src={NavLogo}
                        alt='/'
                        width='170'
                        height='70'
                        className='cursor-pointer'
                    />
                </a>
            </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#focus'>Nosso Foco</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/facilities'>Facilidades</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='https://www.rubihospitalar.com.br'>Loja Online</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact'>Contatos</Link>
                    </li>
                </ul>   

                {/*Mobile button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>
                {/*Mobile menu */}
                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 botton-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 botton-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'}>
                    <ul>
                        <li onClick={handleNav}  className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#focus'>Nosso Foco</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/facilities'>Facilidades</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/store'>Loja Online</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/contact'>Contatos</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Navbar