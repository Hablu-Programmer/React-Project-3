

import './App.css'
import Carousel from './Components/Carousel'
import Chillsbay from './Components/Chillsbay'
import Footer from './Components/Footer'
import GALARY from './Components/GALARY.JSX'
import HeroArea from './Components/HeroArea'
import MyModal from './Components/HomePage/Modal'
import ImageCardSection from './Components/ImgSection'
import MyNavbar from './Components/Navbar'
import ThingsCard from './Components/ThingsToDo'
function App() {

  return (
    <>
    <MyNavbar />
    <HeroArea />
    <ImageCardSection /> 
    <ThingsCard />
    <Chillsbay />
    <Carousel />
    <GALARY />
    <Footer />
    <MyModal />
  
    </>
  )
}

export default App
