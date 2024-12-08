import { Button } from '@nextui-org/react'
import React from 'react'

function DrinkHero() {
  return (
   <section className='bg-[url("./eat-and-drink-hero-bg.png")] w-full h-[70vh] bg-no-repeat bg-top  md:bg-cover overflow-hidden mx-auto'> 
       <div className='flex flex-col justify-start items-center lg:items-start lg:py-[100px] p-4 pt-6 w-[80%] mx-auto'>
       <div className='bg-[#FBFCFF] container w-full max-w-[330px] md:max-w-[600px] rounded-lg p-[18px] md:py-[30px] md:px-8'>
       <h1 className='text-2xl lg:text-[42px] font-bold pb-3.5 lg:pb-6'>Our top pick for the week!</h1>
        <h4 className='font-bold text-lg lg:text-xl '>Nok by Alara</h4>
        <p className='text-lg w-[80%]'>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor .</p>

        <div className='flex justify-end items-center'>
        <Button color='primary'> Reserve Now</Button>
        </div>
       </div>
       </div>
   </section>
  )
}

export default DrinkHero