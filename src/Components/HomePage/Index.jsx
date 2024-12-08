import React from 'react'
import HeroArea from './HeroArea'
import ImgSection from './ImgSection'
import ThingsCard from './ThingsToDo'
import Chillsbay from './Chillsbay'
import GALARY from './GALARY'
import Carousel from './Carousel'


function HomePage() {
  return (
    <>
        <HeroArea />
        <ImgSection />
        <ThingsCard />
        <Chillsbay />
       <Carousel />
        <GALARY />
    </>
  )
}

export default HomePage