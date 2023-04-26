'use client'

import Image from "next/image";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";



export default function Main(){
    return(
        <>

        
        <div className="w-full flex justify-center ">

        <div className="flex justify-between mt-28 items-center 2md:w-full xl:max-w-10/12  border-black 2md:flex-row flex-col">
            <div className="2md:max-w-5/12 w-11/12 mt-14 space-y-8 2md:ml-10 border-black ">
                <h1 className=" font-normal text-gray-500">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h1>
                <h2 className=" font-extrabold text-5xl ">Certified Web 3.0 and<span className="text-color5"> Metaverse Developer</span> </h2>
                <p className=" font-medium text-xl">A One and Quarter Years Panaverse DAO Earn as you Learn Program</p>
                <p className=" font-medium text-xl">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>
                <button className=" bg-color5 text-white rounded-lg p-2 px-3 text-lg ">Learn More</button>
            </div>
            <Image width={'500'} height={'0'} src="/meta5.png" alt="asd" className="xl:w-110 2sm:w-102 w-72 rounded-md lg:mr-10 xl:mr-20 lg:mt-16 border-black 2md:mt-0 mt-10" />
        </div>
        </div>
        
        </>
    )
}