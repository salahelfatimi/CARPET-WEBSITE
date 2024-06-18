import Image from "next/image";

export default function Navbar(){
    return(
        <nav>
            <div className=" fixed items-center   justify-center z-40 flex  bg-[#f5f0ea]   left-0 right-0 p-4 ">
                <Image src={'/logo.png'} className=" rotate-90" width={50} height={50}/>
                <h1 className="flex flex-col font-semibold  text-xs uppercase text-[#644d41]" >cooperative <span>taska sarghini</span></h1>
            </div>
        </nav>
    )
}