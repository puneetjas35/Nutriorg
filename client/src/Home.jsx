import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import DetoxSection from './DetoxSection'
import ShopCategory from './ShopCategory'
import WatchShop from './WatchShop'
import SkinHair from './SkinHair'
import Circle from './Circle'
import ColdPressed from './ColdPressed'
import Gallery from './Gallery'
import NewsBlog from './NewsBlog'
import Footer from './Footer'



function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Slider/>
    <DetoxSection/>
    <ShopCategory/>
    <WatchShop/>
    <SkinHair />
    <Circle/>
    <ColdPressed/>
    <Gallery/>
    <NewsBlog/>
    
    </>
  )
}

export default Home
