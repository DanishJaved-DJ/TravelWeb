import React from 'react'
import mainVideo from '../assets/video/main.mp4'
import Hero from '../Components/Hero/Hero'
import Places from '../Components/Places/Places'
import BannerPic from '../Components/BannerPic/BannerPic'
import BannerIMG from '../assets/cover-women.jpg'
import BannerIMG2 from '../assets/travel-cover2.jpg'
import Blogs from './Blogs'
import Banner from '../Components/Banner/Banner'

const Home = () => {
  return (
    <>
    <div>
    <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1] filter contrast- :"
          >
            <source src={mainVideo} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places/>
        <BannerPic img={BannerIMG} />
        <Blogs/>
        <Banner/>
        <BannerPic img={BannerIMG2} />
    </div> 
    </>
  )
}

export default Home;