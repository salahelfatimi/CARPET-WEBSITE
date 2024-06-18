"use client";
import { AudioLines, MousePointer2, PenTool } from "lucide-react";
import {  useRef, useState } from "react";

export default function Home() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <main className="relative flex items-center justify-center h-screen overflow-hidden">
            
            <div className="flex lg:flex-row flex-col gap-4 relative">
                <button className="flex gap-2 items-center justify-center uppercase bg-[#f9f2e8] font-medium  lg:text-lg font-serif z-30 p-3 duration-500 hover:py-4 lg:hover:py-4 lg:hover:px-8 border-2 border-[#644d41] text-[#644d41]">
                    <MousePointer2 size={25} />
                    our carpet
                </button>
                <button className="flex gap-2 items-center justify-center uppercase bg-[#f9f2e8] font-medium  lg:text-lg font-serif z-30 p-3 duration-500 hover:py-4 lg:hover:py-4 lg:hover:px-8 border-2 border-[#644d41] text-[#644d41]">
                    <PenTool size={25} />
                    costume your carpet
                </button>
            </div>
            <video className="absolute z-10 w-auto brightness-90 min-w-full min-h-full max-w-none" loop muted autoPlay>
                <source src="video-market.mp4" type="video/mp4" />
            </video>
            <audio className="z-40" ref={audioRef} loop autoPlay={true}>
                <source src="/music.mp3" type="audio/mp3" />
            </audio>
            <div
                className={`absolute rounded-full flex items-center justify-center p-2 lg:p-3 z-10 bottom-32 lg:bottom-24 right-4 lg:right-8 cursor-pointer ${isPlaying ? 'bg-green-500 ' : 'bg-red-500 '}`}
                onClick={toggleAudio}
            >
                <AudioLines size={40} className={` ${isPlaying ? 'animate-pulse stroke-white' : 'stroke-white'}`} />
            </div>
        </main>
    );
}
