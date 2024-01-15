import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video
      autoPlay
      muted
      loop
      className='rotate-180 absolute left-0 z-[1] h-full w-full object-cover'
      >
        <source src='/herobg.mp4' type='video/webm'/>
      </video>
      <HeroContent/>
    </div>
  )
}

export default Hero
