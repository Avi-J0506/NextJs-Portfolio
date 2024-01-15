"use client"

import React, { useState } from 'react'
import  Image  from 'next/image';
import { LinkedinShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, LinkedinIcon, WhatsappIcon, EmailIcon, TwitterIcon } from 'next-share';
import MenuIcon from "remixicon-react/MenuLineIcon";
import CloseIcon from "remixicon-react/CloseLineIcon";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className='w-full h-[65px] fixed top shadow-lg shadow-[#2A0e61]/50 bg-[#3001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className="h-auto w-auto flex flex-row items-center" >
            <Image
            src="/NavLogo.png"
            alt='logo'
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-left-[10px] md:block text-gray-300">
                Software Developer
            </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="#about-me" className="cursor-pointer">About Me</a>
                <a href="#skills" className="cursor-pointer">Skills</a>
                <a href="#projects" className="cursor-pointer">Projects</a>
            </div>
        </div>

        <div className="flex flex-row gap-5">
            <LinkedinShareButton
              url={'https://www.linkedin.com/in/abhinandan-jha-4477a9231'}
            >
              <LinkedinIcon size={32} round/>
            </LinkedinShareButton>

            <WhatsappShareButton
              url={'https://wa.me/+918676874867'}
            >
              <WhatsappIcon size={32} round/>
            </WhatsappShareButton>

            <EmailShareButton
              url={'jhaabhinandan55@gmail.com'}
            >
              <EmailIcon size={32} round/>
            </EmailShareButton>

            <TwitterShareButton
              url={'https://x.com/jhaabhinandan55?t=pcRRLoitf1ngRpEY-1JKOw&s=09'}
            >
              <TwitterIcon size={32} round/>
            </TwitterShareButton>
        </div>
      </div>
      
      <div className="flex lg:hidden relative">
        <div onClick={() => setNavbarOpen((prevState) => !prevState)}>
          <MenuIcon className='text-3xl'/>
        </div>
        <div className={`fixed top-0 bottom-0 right-0 left-0 bg-black transition-transform duration-300 transform ${
            navbarOpen ? "translate-y-0" : "-translate-y-full"
          } overflow-hidden z-50`}
        >
          <div className="w-full h-full px-[45px] flex flex-col justify-between py-[60px]">
          <div
              className="absolute right-5 top-6"
              onClick={() => setNavbarOpen((prevState) => !prevState)}
            >
              <CloseIcon className="text-3xl" />
            </div>
            <div className="w-fit h-fit flex flex-col gap-2">
              <div>
                <a href="" className='text-3xl font-semibold'>
                  About
                </a>
              </div>
              <div>
                <a href="" className='text-3xl font-semibold'>
                  Skills
                </a>
              </div>
              <div>
                <a href="" className='text-3xl font-semibold'>
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
