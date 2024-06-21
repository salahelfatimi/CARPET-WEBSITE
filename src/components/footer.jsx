import {  Instagram, Mail, MapPin, MousePointer2, PenTool, Phone } from "lucide-react";

export default function Footer(){
    return(
        <footer>
            <div className="z-20 fixed    bottom-0     bg-[#f5f0ea]  border-t-2 border-[#644d41]  left-0 right-0 p-4 ">
                <div className=" container justify-between items-center flex flex-col-reverse gap-2 lg:flex-row">
                <span className={` flex gap-4 flex-col  text-sm lg:text-base   items-center font-semibold capitalize text-center md:text-start text-[#644d41] `}>
                    Copyright &copy; {new Date().getFullYear()} . All Rights Are Reserved by cooperative taska sarghini 
                </span>
                    <div className="flex gap-1">
                        <a href="#" className=" rounded-full p-2"><Phone size={23} className=" stroke-[#644d41]" /></a>
                        <a href="https://www.instagram.com/cooperative_taska_sarghini/" target="_blank" className=" rounded-full p-2"><Instagram size={23}  className=" stroke-[#644d41]" /></a>
                        <a href="#" className=" rounded-full p-2"><MapPin size={23}  className=" stroke-[#644d41]" /></a>
                        <a href="#" className=" rounded-full p-2"><Mail size={23}  className=" stroke-[#644d41]" /></a>

                    </div>
                </div>
                   
            </div>
        </footer>
    )
}