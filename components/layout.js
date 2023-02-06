import React,{useState} from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import {Link} from  "react-scroll";
import logo from '../public/logoPoke.svg'
function Layout(){

    const [isOpen, setIsOpen] = useState(false);
  return(
    <div>
            <nav className="z-20 bg-primary w-full">
                <div className="container ">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 pt-5 px-4">
                                
                               <Image src={logo} alt="" className='w-14 -translate-y-5 grayscale-0 opacity-100 hover:grayscale hover:opacity-20 mt-5'/>
                                 
                            </div>
                            
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="#home" activeClass='home' to="home" smooth={true} offset={50} duration={500} className="cursor-pointer font-lato font-bold text-dark1 hover:text-white px-3 py-2 text-lg">Home</Link>
                                    <Link href="#about" activeClass='about' to="about" smooth={true} offset={50} duration={500} className="cursor-pointer text-dark1 hover:text-white font-lato font-bold px-3 py-2 text-lg">About</Link>
                                    <Link href="#pokepost" activeClass='pokepost' to="pokepost" smooth={true} offset={50} duration={500} className="cursor-pointer text-dark1 hover:text-white px-3 py-2 text-lg font-lato font-bold">Poke-Post</Link>
                                    <Link href="#pokedex" activeClass='pokedex' to="pokedex" smooth={true} offset={50} duration={500} className="cursor-pointer text-dark1 hover:text-white px-3 py-2 text-lg font-lato font-bold">Pokedex</Link>
                                    <Link href="#game" activeClass='game' to="game" smooth={true} offset={50} duration={500} className="cursor-pointer text-dark1 hover:text-white px-3 py-2 text-lg font-lato font-bold">Game</Link>
                                </div>
                            </div>

                            <div className="flex justify-center items-center flex-shrink-0">
                                
                            </div>
                            <div className="mr-4 flex md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-dark1 hover:bg-black inline-flex items-center justify-center p-2 rounded-md text-white " >
                                    <span className="sr-only ">Open Main Menu</span>
                                   {!isOpen ? ( 
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />

                                    </svg> ) : 
                                    (
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />

                                    </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                             {(ref) => (
                                    <div className="md:hidden " id="mobile-menu">
                                        <div ref={ref} className="bg-white mx-4 mr-4 pt-4 pb-4 space-y-1 rounded-lg">
                                            <Link href="#home" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                            <Link href="#about" activeClass="about" to="about" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                                            <Link href="#pokepost" activeClass="pokepost" to="pokepost" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Poke-Post</Link>
                                            <Link href="#pokedex" activeClass="pokedex" to="pokedex" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pokedex</Link>
                                            <Link href="#game" activeClass="game" to="game" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Game</Link>
                                        </div>
                                    </div>
                                )
                             }           
                </Transition>
            </nav>
        </div>
  )
}

export default Layout