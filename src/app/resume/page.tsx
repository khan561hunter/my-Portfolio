import Link from "next/link";
import Image from "next/image";
import resume1 from "@/app/assets/resume 1.png"
import resume3 from "@/app/assets/resume 3.png"
import resume4 from "@/app/assets/resume 4.png"

export default function Resume(){
    return(
        <div className="w-[1900px] h-[800px] bg-[#020617] lg:w-screen flex ">
            <div className="w-[1400px] h-[829px] bg-[#075985] lg:w-[1100px] lg:h-[650px] lg:mx-[9.5%] lg:my-[7%] flex justify-around">
                
                <div className="lg:text-[20px] lg:text-white lg:my-[10%]">
                    Resume Builder 01 / 02
                    <div><Link href="https://my-resume-milestone-01.vercel.app/" ><Image className="lg:w-[240px] lg:py-[10%]" src={resume1} alt="resume1"></Image></Link></div>
                    

                </div>
                <div className="lg:text-[20px] lg:text-white lg:my-[10%]">
                    Resume Builder 03
                    <div><Link href="https://resume-builder-three-rose.vercel.app/" ><Image className="lg:w-[240px] lg:py-[10%]" src={resume3} alt="resume1"></Image></Link></div>

                </div>
                <div className="lg:text-[20px] lg:text-white lg:my-[10%]">
                    Resume Builder 04
                    <div><Link href="https://resume-04.vercel.app/" ><Image className="lg:w-[240px] lg:py-[10%]" src={resume4} alt="resume1"></Image></Link></div>

                </div>

            </div>

        </div>
    )
}