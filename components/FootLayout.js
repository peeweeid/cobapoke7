import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logoPoke.svg'
function FootLayout(){
    return(
<div className=" pt-16 pb-16 bg-primary">
 <div className="container px-4 flex flex-wrap">
        <div className="lg:w-1/3 w-full px-4 flex justify-center items-center">
        <Image src={logo} alt="" className='w-14 -translate-y-5 grayscale-0 opacity-100 hover:grayscale hover:opacity-20 mt-5'/>
        <h1 className="text-6xl py-2 px-2 font-bold text-center text-secondary">POKEDEX</h1>
        </div>
        <div className="lg:w-1/3 w-full px-4 flex flex-wrap justify-center items-center">
            <h1 className="mt-5 font-bold text-lg w-full text-center">Main Menu</h1>
            <Link href={'#home'} className='mt-2 font-semibold hover:text-white w-full text-center top-0'>Home</Link>
            <Link href={'#about'} className='mt-2 font-semibold hover:text-white w-full text-center'>About</Link>
            <Link href={'#pokepost'} className='mt-2 font-semibold hover:text-white w-full text-center'>PokePost</Link>
            <Link href={'#pokedex'} className='mt-2 font-semibold hover:text-white w-full text-center'>Pokedex</Link>
            <Link href={'#game'} className='mt-2 font-semibold hover:text-white w-full text-center'>Game</Link>
        </div>
        <div className="lg:w-1/3 w-full px-4 flex flex-wrap justify-center items-center">
        <h1 className="mt-5 font-bold text-lg w-full text-center top-0">Game Pokemon</h1>
        <Link href={'https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&hl=en'} className='rounded-lg mt-5 bg-secondary px-4 py-2 text-lg font-bold text-white hover:bg-third'>Download</Link>

        </div>
    </div>
</div>
)
}

export default FootLayout