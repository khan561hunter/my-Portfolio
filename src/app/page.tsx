"use client"
import React from 'react';
import About from './About/page';
import Contact from './Contact/page';
import localFont from "next/font/local";
import Image from "next/image";
import logo from "@/app/assets/logo.jpeg"
import {motion} from 'framer-motion'
import { scroll } from 'framer-motion';
import Project from './Projects/page';


export default function Home(){
  return(
    <div className='aspect-auto w-[1900px] h-[1140px] bg-[#020617]  md:w-screen '>
      <div className="  flex items-center justify-between lg:w-screen">
      <div className=" bg-[#022c22] w-[1600px] h-[900px] mx-[-25%] flex justify-between lg:w-[1120px] lg:mx-[110px] lg:h-[700px] lg:my-[5%]">
        
        <motion.div
        
        
        className=" border-[5px] border-[black] rounded-full lg:w-[440px] lg:h-[280px] lg:w-[300px] lg:h-[300px] lg:mx-[420px] lg:my-[33px] "
        initial ={{opacity:0}}
        
        
        whileInView={{opacity:1}}
        
        transition={{duration:2 , delay:0 , ease:"easeOut"}}
        
        >
          <div><Image className='rounded-full' src={logo} alt="logo"></Image></div>

        </motion.div>
        
        
        
        <div className='absolute left-[28%] bottom-[-55%]'>
          <motion.div 
            initial ={{opacity:0 , y:-50}}
            whileInView={{opacity:1}}
        
            transition={{duration:1 , delay:0 , ease:"easeOut"}}

            animate={{opacity:1,y:0}}
            
            >
            <div className=" text-white mx-[50px] w-[656px] h-[154px] lg:my-[50%] lg:mx-[-6%] text-center  ">
              <div className=''>
                <p className='text-[70px] font-bold leading-[77.45px] tracking-[-2%] my-[30px] lg:text-[40px]'>WANIA KHAN</p>
              </div>
              <h2 className="text-[30px] my-[3%] mx-1 font-bold lg:text-[20px]" >FrontEnd Developer / Web Developer</h2>
              <div className="w-[700px] h-[60px] font-bold text-[24px] leading-[30px] tracking-[-2%] my-[20px] text-[#65a30d] text-center mx-[-20px] px-[10px] text-left my-[20px] lg:text-[20px] ">
                  My name is Wania Khan and I am a student at GIAIC Program where I am learning about web Development and AI Development. I have completed my college in Computer science discipline.I am very excited to learn about AI toold and explore the depths of upcoming future advancements.
              </div>
            </div>
          </motion.div>

        </div>
        
      </div>

    </div>
    <About />
    <Project />
    <Contact />

    </div>
    
    
  )
      
}
