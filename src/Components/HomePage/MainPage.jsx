import React from 'react'

import Carousel from "./Carousel/Carousel"
import HighlightedProducts from "./HighlightedProducts/HighlightedProducts"
import Featured from "./Featured/Featured"
import Process from "./Process/Process"
import Footer from "./Footer/Footer"
import Popup from './Popup'
import NavBar from './NavBar/NavBar'
import VideoPlayer from './VideoComponent/VideoPlayer'


export default function MainPage() {
  return (
    <>
    <Popup />
        <NavBar />
    <Carousel/>
    {/* <AeroponicsFarming /> */}
    <HighlightedProducts />
    <VideoPlayer />
    <Featured />
    {/* <div className=' sm:invisible xl:visible md:visible'>
    <Process />
    </div> */}
  
    </>
  )
}
