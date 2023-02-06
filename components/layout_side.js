import React,{useState} from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import logo from '../public/logoPoke.svg'
function Layout(){
    const [isOpen, setIsOpen] = useState(false);
  return(
    <div>
            <nav className="z-20 bg-primary w-full">
                <div className="container ">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-bold text-xl cursor-pointer mx-8 mt-5">
                                <Link href="/" ><Image src={logo} alt="" className='w-14 mt-4 -translate-y-5 grayscale-0 opacity-100 hover:grayscale hover:opacity-20'/></Link>
                                </h1>  
                            </div>
                        </div>    
                    </div>
                </div>    
            </nav>
        </div>
  )
}

export default Layout