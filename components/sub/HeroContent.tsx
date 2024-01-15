"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop, slideInFromLeft,slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                    <h1 className='Welcome-text text-[13px]'>
                        Full Stack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                variants={slideInFromLeft(0.5)}
                className = 'flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                  <span>
                  Learner
                  <span className='text text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>{" "}
                   Freelancer 
                   {" "}
                   </span>
                  & a Tech enthusiast
                  </span>
                </motion.div>

                <motion.p
                variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                  I&apos;m a Full Stack Software Engineer with MERN stack and proficient in languages like Java, Python and JavaScript. I have been doing Web Development for the past 3 years now and am currently working as a freelancer. I am also and Aritficial Learning and Machine Learning/ Deep Learning enthusiast. I have worked as a research intern at NIT Jamshedpur in the field of Machine Learning and Deep Learning.
                </motion.p>
                <motion.a
                variants={slideInFromLeft(1)}
                href='/Resume Updated.pdf'
                download="Abhinandan resume"
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                  Download Resume
                </motion.a>
            </div>

            <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center'
            >
              <Image
              src="/heroicon.png"
              alt="work icons"
              height={450}
              width={450}
              />
            </motion.div>
      </motion.div>
  )
}

export default HeroContent
