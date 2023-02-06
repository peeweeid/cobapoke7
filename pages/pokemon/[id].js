
import React from 'react'
import Layout from '../../components/layout_side'
import Footlayout2 from '../../components/FootLayout_side'
const Pokeid= ({pokeman , styles}) => {
    console.log(pokeman)
  return (  
    <>
      <Layout></Layout>
        <div className='bg-white'>
            <div className='container'>
            <img src={pokeman.image.hires} alt="" className='w-72 mx-auto pt-16 pb-0 -mb-48 lg:hidden block'/>
                <div className='  flex flex-warp  min-h-screen  items-center justify-center '> 
                    <div className='lg:w-1/3 w-full lg:block hidden'>
                        <img src={pokeman.image.hires} alt="" />
                    </div> 
                             
                    <div className='lg:w-2/3 w-full'>
                        <div className='bg-primary px-4 py-2 rounded-lg'>
                        <h1 className='font-bold text-2xl'>{pokeman.name.english} </h1>
                        <h1 className='font-bold text-2xl mb-10'>{pokeman.name.japanese} </h1>
                        <p>{pokeman.species}</p>
                        <p><span className='mr-4'>{pokeman.profile.height}</span><span>{pokeman.profile.weight}</span></p>
                        <p>{pokeman.description}</p>
                        <div className='my-2'>
                            {
                                pokeman.type.map((type)=>{
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
                        <div>
                            {
                                Object.keys(pokeman.base).map((stat,i)=>{
                                    let statPercentFactor = 0
                                    let statColor
                                    switch(stat){
                                        case "HP" :
                                            statPercentFactor = 2.55;
                                            statColor = "#da4343";
                                            break;
                                        case "Attack" :
                                            statPercentFactor = 1.81;
                                            statColor = "#F6A562";
                                            break;
                                        case "Defense" :
                                            statPercentFactor = 2.33;
                                            statColor = "#EAD342";
                                            break;
                                        case "Sp. Attack" :
                                            statPercentFactor = 1.73;
                                            statColor = "#8AA9F0";
                                            break;
                                        case "Sp. Defense" :
                                            statPercentFactor = 2.3;
                                            statColor = "#8CE15D";
                                            break;
                                        case "Speed" :
                                            statPercentFactor = 2.0;
                                            statColor = "#F780A3";
                                            break;
                                                                    }
                                        return (
                                            <div key={stat}>
                                                <div className='flex justify-between '>
                                                    <span>{stat.toUpperCase()}</span>
                                                    <span>{pokeman.base[stat]}</span>
                                                </div>
                                                <div className='h-4 w-full bg-slate-800 rounded-full'>
                                                    <div className='h-4 rounded-full' style={{backgroundColor:statColor,width:statPercentFactor*100}}>

                                                    </div>
                                                </div>
                                            </div>
                                            )
                                    }
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  
        </div>
        <Footlayout2></Footlayout2>
    </>
  )
}


export async function getServerSideProps({ query }) {
    try {
        const res = await fetch(`https://api.pikaserve.xyz/pokemon/${query.id}`);
        const data = await res.json();
        
        return {
            props: { 
                pokeman:data ,
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
    } catch (err) {
        console.error(err);
    }
}

export default Pokeid