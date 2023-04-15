'use client'

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";



export default function Main(){
    return(
        <>

        
        <div className="w-full flex justify-center ">

        <div className="flex justify-between border-4 top-24 absolute items-center 2md:full lg:w-10/12 ">
            <div className="2md:max-w-5/12 w-full border mt-14 my-autoflex item-center flex-col">
                <h1 className="my-2 font-normal text-gray-500">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h1>
                <h2 className="my-4 font-extrabold text-5xl ">Certified Web 3.0 and<span className="text-color5"> Metaverse Developer</span> </h2>
                <p className="my-4 font-medium text-xl">A One and Quarter Years Panaverse DAO Earn as you Learn Program</p>
                <p className="my-4 font-medium text-xl">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>
                <button>Learn More</button>
            </div>
            <img src="/Metaverse3.png" alt="asd" className="w-4/12 h-4/5 rounded-md" />
        </div>
        </div>
        
        </>
    )
}