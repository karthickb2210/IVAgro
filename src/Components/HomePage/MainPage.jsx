import React from 'react'
import Carousel from "./Carousel/Carousel"
import HighlightedProducts from "./HighlightedProducts/HighlightedProducts"
import Featured from "./Featured/Featured"
import Popup from './Popup'
import VideoPlayer from './VideoComponent/VideoPlayer'


export default function MainPage() {
  return (
    <>
    <Popup />
    <Carousel/>
    <HighlightedProducts />
    <VideoPlayer />
    <Featured />
    </>
  )
}
