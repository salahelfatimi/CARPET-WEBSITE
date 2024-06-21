"use client";
import { Instagram, Mail, MapPin, MousePointer2, PenTool, Phone } from "lucide-react";


export default function Home() {
    return (
        <main className="relative flex items-center  justify-center flex-col h-screen overflow-hidden">

            <div className="flex lg:flex-row flex-col gap-4 absolute">
                <button className="flex gap-2 items-center justify-center uppercase bg-[#f9f2e8] text-sm  lg:text-lg  font-mono z-30 p-3 duration-500 hover:py-4 lg:hover:py-4 lg:hover:px-8 border-2 border-[#644d41] text-[#644d41]">
                    <MousePointer2 size={20} />
                    our carpet
                </button>
                <button className="flex gap-2 items-center justify-center uppercase bg-[#f9f2e8]  text-sm lg:text-lg  font-mono z-30 p-3 duration-500 hover:py-4 lg:hover:py-4 lg:hover:px-8 border-2 border-[#644d41] text-[#644d41]">
                    <PenTool size={20} />
                    costume your carpet
                </button>
            </div>
            <video src="videos/video-market.mp4" className="absolute z-10 w-auto brightness-50 min-w-full min-h-full max-w-none" loop muted autoPlay preload="none"/>
           
                <footer className="   bg-[#f5f0ea]  border-t-2 border-[#644d41] z-10 bottom-0 right-0 left-0  p-4 absolute">
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
                    
                </footer>
         
        </main>
    );
}
