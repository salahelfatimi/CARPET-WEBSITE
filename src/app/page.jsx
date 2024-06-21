"use client";
import { MousePointer2, PenTool } from "lucide-react";


export default function Home() {
    return (
        <main className="relative flex items-center justify-center h-screen overflow-hidden">

            <div className="flex lg:flex-row flex-col gap-4 relative">
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
        </main>
    );
}
