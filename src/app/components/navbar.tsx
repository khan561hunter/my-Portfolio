import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/Untitled (4).png"
import log from "@/app/assets/Untitled (5).png"


export default function Navbar(){
    return(
        <div className="w-[1900px] h-[90px] px-[220px] py-[16px] bg-[#052e16] flex justify-between items-center text-white ">
            <div className="w-[500px] h-[90px] mx-[-70px] ">
                <Link href="/"><Image src={logo} alt="image"></Image></Link>
        
            </div>
           
            <div className="w-[737.5px] h-[60px] flex justify-between items-center ">
                <div className="w-[549px] h-[23px] mx-[-20%] ">
                    <ul className="flex flex-row gap-[70px]   ">
                        <div className="hover:bg-[#14532d] hover:scale-[110px] w-[70px] h-[30px] text-nowrap py-[-10px] hover:text-center hover:rounded-[10px] hover:p-[2px] ">
                            <li className="font-bold text-[18px]"><Link href="/">Home</Link></li>
                        </div>
                        <div className="hover:bg-[#14532d] hover:scale-[110px] w-[70px] h-[30px] text-nowrap py-[-10px] hover:text-center hover:rounded-[10px] hover:p-[2px] ">
                            <li className="font-bold text-[18px]"><Link href="/About">About</Link></li>
                        </div>
                        <div className="hover:bg-[#14532d] hover:scale-[110px] w-[70px] h-[30px] text-nowrap py-[-10px] hover:text-center hover:rounded-[10px] hover:p-[2px] ">
                            <li className="font-bold text-[18px]"><Link href="/Contact">Contact</Link></li>
                        </div>
                    
                    
                    </ul>
                </div>
                
            </div>

        </div>
    )
}