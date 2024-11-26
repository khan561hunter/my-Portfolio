import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import resume from "@/app/assets/Untitled (8).png"
import Link from 'next/link'
import Resume from '../resume/page'

export default function Project(){
    return(
        <div className="w-[1900px] h-[1140px] bg-[#020617]  flex  lg:w-screen lg:h-[900px] ">
            <div className="bg-[#4c0519] w-[1300px] h-[829px] mx-[9%] lg:my-[64px]  lg:h-[600px] mx-[13%] lg:py-[10%]">
                <div className='lg:w-[300px] lg:h-[100px] lg:text-[34px] lg:font-bold text-nowrap lg:mx-[35%] text-white'>
                    My Resume Builder
                </div>
                <div className='lg:w-[200px] lg:h-[250px] lg:mx-[40%]'>
                    <div>
                        <Link href="/resume"><Image src={resume} alt='resume'></Image></Link>
                        
                    </div>
                </div>
                
                

            </div>

        </div>
    )
}