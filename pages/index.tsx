import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/layout.js'
import siluet from '../public/siluet.png'
import ghost from '../public/ghost.svg'
import pokeball from '../public/pokeball.png'
import logo from '../public/logoPoke.svg'
import charizard from '../public/charizard.svg'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Footlayout from '../components/FootLayout'
export default function Home({dataUsers , styles }) {

  const router = useRouter();
  const [pokeArr,setPokerArr] = useState(dataUsers.slice(0, 20))
  const [pageno ,setPageno] = useState(0);
  useEffect(() => {
      setPokerArr(dataUsers.slice(pageno*20, (pageno*20)+20))

  }, [pageno] )

  const handlePrev=()=>{
      setPageno(c=>{return c-1})
  }
  const handleNext=()=>{
      setPageno(c=>{return c+1})
  }
  return (
    
    <>
    <Layout></Layout>
      {/* jumbotron */}
      <section id='home' className=' lg:h-[800px] h-[400px] relative bg-cover bg-fixed bg-wallpoke' >
          <div className='container'>
            <div className='text-center flex flex-wrap lg:h-[400px] h-[150px] z-10'>
                <h1 className='lg:text-[150px] text-6xl  font-pokemon text-secondary w-full font-bold lg:mt-40 mt-20'>POKEDEX</h1>
                 <p className='text-sm lg:text-3xl font-semibold text-secondary w-full lg:mt-10 mt-10'>weblist mengenai pokomen , gotta catch them all !</p>
            </div>
        </div>
        <Image src={siluet} alt="" className='w-full -bottom-2 mb-0 absolute z-30'/>
      </section>
      {/* jumbotron end */}

      {/* about */}
      <section id='about' className='pt-24  bg-third'>
        <div className='container'>
          <h1 className='text-center text-5xl text-four font-bold font-pokemon mb-10'>About</h1>
            <div className='flex flex-wrap text-center items-center justify-center'>
              <div className='w-full lg:w-1/2 px-4'>
                <p className='px-4 text-four text-left lg:text-base text-sm mb-10'>
                Pokémon (ポケモン Pokemon, pengucapan: /ˈpoʊkeɪmɒn) adalah salah satu waralaba media yang dimiliki oleh perusahaan permainan video Nintendo dan diciptakan oleh Satoshi Tajiri pada 1995. Pada mulanya, Pokémon adalah seri permainan video yang identik dengan konsol Game Boy. Pokémon merupakan permainan video tersukses kedua di dunia setelah serial Mario yang juga diciptakan oleh Nintendo. Sementara bila dibandingkan dengan yang lain, Pokémon merupakan serial waralaba terlaris ketiga di dunia setelah James Bond (karya Ian Fleming) dan Transformers (karya Hasbro), yang masih terus berjalan dan diperbaharui sesuai perjalanan zaman. Waralaba Pokémon sendiri muncul dalam beragam bentuk, yaitu permainan video, anime, manga, trading cards, buku, mainan, dan masih banyak lagi. Waralaba media ini merayakan ulang tahunnya yang ke sepuluh pada tanggal 27 Februari 2006. Dan pada 23 April 2008, omzet penjualan permainan video Pokémon telah mencapai 180 juta kopi,melebihi penjualan permainan video Transformers.
                </p>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                  <Image src={ghost} alt="" className='lg:w-96 w-60 grayscale-0 opacity-100 hover:grayscale hover:opacity-20 transition ease-in-out mx-auto' />
              </div>
            </div>
        </div>
      </section>
      {/* about end */}
      {/* pokepost */}
      <section id='pokepost' className='pt-24 pb-16'>
        <div className='container px-4'>
          <h1 className='text-center text-5xl text-third font-bold font-pokemon mb-10'>Pokepost</h1>
          <p className='text-center font-semibold'>update berita seputar pokemon</p>
            <div className='flex flex-wrap items-center justify-center'>
                <div className='w-full md:w-1/2 lg:w-1/4 p-8'>
                    <div className='mx-auto pt-10 px-4 shadow-lg rounded-lg h-[300px] lg:w-[300px] w-[350px] bg-gray-300 hover:bg-red-400 transition ease-in-out group'>
                        <Image src={pokeball} alt="" className='mx-auto mb-5 group-hover:scale-50 transition ease-in-out' />
                        <h1 className='font-bold text-xl'>Title</h1>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, optio!</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 p-8'>
                    <div className='mx-auto pt-10 px-4 shadow-lg rounded-lg h-[300px] lg:w-[300px] w-[350px] bg-gray-300 hover:bg-red-400 transition ease-in-out group'>
                        <Image src={pokeball} alt="" className='mx-auto mb-5 group-hover:scale-50 transition ease-in-out' />
                        <h1 className='font-bold text-xl'>Title</h1>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, optio!</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 p-8'>
                    <div className='mx-auto pt-10 px-4 shadow-lg rounded-lg h-[300px] lg:w-[300px] w-[350px] bg-gray-300 hover:bg-red-400 transition ease-in-out group'>
                        <Image src={pokeball} alt="" className='mx-auto mb-5 group-hover:scale-50 transition ease-in-out' />
                        <h1 className='font-bold text-xl'>Title</h1>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, optio!</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 p-8'>
                    <div className='mx-auto pt-10 px-4 shadow-lg rounded-lg h-[300px] lg:w-[300px] w-[350px] bg-gray-300 hover:bg-red-400 transition ease-in-out group'>
                        <Image src={pokeball} alt="" className='mx-auto mb-5 group-hover:scale-50 transition ease-in-out' />
                        <h1 className='font-bold text-xl'>Title</h1>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, optio!</p>
                    </div>
                </div>
                  
              
                
            </div>
        </div>
      </section>
      {/* pokepost end */}
      {/* pokedex */}
      <section id='pokedex' className='pb-16 bg-primary'>
      <div className='h-10 bg-third w-full'></div>
      <div className='w-1/3 bg-third px-4 rounded-br-2xl h-16 py-2'>
        <Image src={logo} alt="" className='w-14 -translate-y-5 grayscale-0 opacity-100 hover:grayscale hover:opacity-20'/>
      </div>
      {/* posisi lg */}
        <div className='container px-4 py-4 hidden lg:block'>
          <div className='flex flex-wrap'>
                {pokeArr.map((poke) => (
                 
                  <div key={poke.id} className='mb-5 w-1/4  px-2 py-2'>
                      <div   className='bg-white hover:bg-third shadow-lg rounded-lg' onClick={()=> router.push (`/pokemon/${poke.id}`)}>
                        <div className='flex justify-center items-center'>
                          <div className='mx-auto px-4 py-2'>
                              <img src={poke.image.thumbnail} alt=""  />
                             
                          </div>
                          <div className='px-4 py-2'> 
                                <p>{poke.name.english}</p>
                                <p>{poke.name.japanese}</p>
                                
                                <div className='mt-2'>
                                    {
                                        poke.type.map((type)=>{
                                            return (
                                                <span key={type} className="px-2.5 py-0.5 text-base text-white bg-blue-300 mr-2 font-semibold rounded" 
                                                style={{backgroundColor:styles[type.toLowerCase()]}}>
                                                    {type}
                                                </span>
                                            )
                                        }
                                        
                                        )
                                    }
                                </div>
                            </div>
                      </div>
                    </div>
                  </div>
                 
              ))}
          </div>
     
          <div className='flex justify-between px-4 mb-10'>
          <button onClick={handlePrev} disabled={pageno===0?true:false} className='rounded-lg bg-sky-600 text-white font-bold shadow-lg px-2 py-1'>Prev</button> 
          <button onClick={handleNext} disabled={dataUsers.length/20-pageno<1?true:false} className='text-white font-bold  rounded-lg bg-sky-600 shadow-lg px-2 py-1'>Next</button>
          </div>
        </div>
        {/* last posisi lg */}
        <div className='container px-4 py-4 lg:hidden'>
                    
        <div className='flex flex-wrap'>
                {pokeArr.map((poke) => (
                 
                  <div  key={poke.id} className='mb-5 w-1/2  px-2 py-2'>
                      <div  className='bg-white hover:bg-third shadow-lg rounded-lg' onClick={()=> router.push (`/pokemon/${poke.id}`)}>
                        <div className='flex self-center'>
                          <div className='mx-auto w-full px-4 py-2'>
                              <img src={poke.image.thumbnail} alt="" className='mx-auto'/>
                             <h1 className='font-bold text-lg text-center'>{poke.name.english}</h1>
                             <h1 className='font-semibold text-base text-center'>{poke.name.japanese}</h1>
                          </div>
                      </div>
                    </div>
                  </div>
                 
              ))}
          </div>
          <div className='flex justify-between px-4 mb-10'>
          <button onClick={handlePrev} disabled={pageno===0?true:false} className='rounded-lg bg-sky-600 text-white font-bold shadow-lg px-2 py-1'>Prev</button> 
          <button onClick={handleNext} disabled={dataUsers.length/20-pageno<1?true:false} className='text-white font-bold  rounded-lg bg-sky-600 shadow-lg px-2 py-1'>Next</button>
          </div>
        </div>
      </section>
      {/* pokedex end */}
      {/* game  download */}
      <section id='game' className=' pt-16 pb-10 bg-white'>
        <div className='container'>
          <div className='flex flex-wrap'>
              <div className='lg:w-1/6 w-full px-4 md:block hidden '>
              <Image src={logo} alt="" className='w-14 -translate-y-5 grayscale-0  opacity-100 hover:grayscale hover:opacity-20'/>
              </div>
              <div className='lg:w-4/6 w-full lg:px-28 px-4 '>
                  <p className='text-center lg:mb-5 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatem quisquam harum ipsum, eos repellendus amet magni omnis illum enim!</p>
                  <div className='flex justify-between items-center px-4'>
                   <Link href={'https://https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&hl=en.com'}>   <div className='w-36 rounded-xl py-2 bg-primary shadow-lg hover:bg-secondary hover:text-white text-center text-lg font-bold'> Download </div></Link>
                      <div className='text-center'>
                          <p className='text-xs lg:text-ms'>total download</p>
                          <h1 className='font-bold text-xl lg:text-2xl'>100+Juta</h1>
                      </div>
                  </div>
              </div>
              <div className='lg:w-1/6 w-full justify-center items-center md:block hidden'>
              <Image src={charizard} alt="" className='mx-auto grayscale-0 opacity-100 hover:grayscale hover:opacity-20'/>
              </div>
          </div>
        </div>
      </section>
      {/* game doanload end */}
      <Footlayout></Footlayout>
   </>
   
  )
}

export async function getStaticProps() {
  const res = await fetch ('https://api.pikaserve.xyz/pokemon/all')
  const dataUsers = await res.json()
  return {
      props :{
          dataUsers,
          styles:{  
              normal : "#A8A77A",
              fire : "#EE8130",
              water : "#6390F0",
              electric : "#F7D02C",
              grass : "#7AC74C",
              ice : "#96D9D6",
              fighting : "#C22E28",
              poison :  "#A33EA1",
              ground : "#E2BF65",
              flying : "#A98FF3",
              psychic : "#F95587",
              bug : "#A6B91A",
              rock : "#B6A136",
              ghost : "#735797",
              dragon : "#6F35FC",
              dark : "#705746",
              steel : "#B7B7CE",
              fairy : "#D685AD",
          }
      }
  }
}
