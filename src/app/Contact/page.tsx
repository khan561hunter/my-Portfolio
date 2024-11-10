import Image from "next/image"
import tel from "@/app/assets/phone.jpeg"
import phone from "@/app/assets/phone 2.png"
import add from "@/app/assets/address.jpeg"
import logo from "@/app/assets/7ed33019-36c8-488c-ac30-5b9f63657323.jpeg"



export default function Contact(){
    return(
        <div className="w-[1900px] h-[1140px] bg-[#431407] flex items-center ">
            <div className="w-[1400px] h-[829px] bg-[#ca8a04] mx-[9%] ">
                <div><Image  className="rounded-full mx-[35%] my-[5%] h-[400px] w-[400px] border-[black] border-[4px]" src={logo} alt="logo"></Image></div>
                <div>
                <Image className="rounded-full mx-[5%] w-[100px] h-[100px]" src={tel} alt="telephone"></Image>
                <div className="mx-[200px] my-[-6%] font-extrabold text-[20px]">Technical Support<p className="text-[white] font-normal">waniakhan561@gmail.com</p></div>
                </div>
                <div><Image className="rounded-full w-[100px] h-[100px] my-[10%] mx-[70px]" src={phone} alt="contact"></Image></div>
                <div className="mx-[200px] my-[-16%] font-extrabold text-[20px]">WhatsApp<p className="text-[white] font-normal">0332-1968651</p></div>

                <div><Image className="rounded-full w-[100px] h-[100px] mx-[60%] my-[1%]"  src={add} alt="address"></Image></div>
                <div className="mx-[200px] my-[-7%] mx-[70%] font-extrabold text-[20px]">Address<p className="text-[white] font-normal">Pakistan,Karachi</p></div>
            </div>
            

        </div>
    )
}