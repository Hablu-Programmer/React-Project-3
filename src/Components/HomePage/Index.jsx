import React from 'react'
import HeroArea from './HeroArea'
import ImgSection from './ImgSection'
import ThingsCard from './ThingsToDo'
import Chillsbay from './Chillsbay'
import Carousel from './Carousel'
import GALARY from './GALARY'

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