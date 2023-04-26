'use client'


import { useState } from "react"
import Image  from "next/image"

export default function Special() {
    const web3 = {
        h0: 'Web 3.0 (Blockchain) and Metaverse Specialization',
        desc: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences',
        h1: 'Quarter IV',
        h1desc: 'W3-351: Developing Advanced Smart Contracts and Oracles and Planet-Scale Web 3.0 DApps',
        h2: 'Quarter V',
        h2desc: 'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences'
    }   
    const ai = {
        h0: 'Artificial Intelligence (AI) and Deep Learning Specialization',
        desc: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
        h1: 'Quarter IV',
        h1desc: 'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
        h2: 'Quarter V',
        h2desc: 'AI-361: Deep Learning and MLOps'
    }   
    const cc = {
        h0: 'Cloud-Native Computing Specialization',
        desc: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes',
        h1: 'Quarter IV',
        h1desc: 'CN-351: Certified Kubernetes Application Developer (CKAD)',
        h2: 'Quarter V',
        h2desc: 'CN-361: Developing Multi-Cloud APIs using CDK for Terraform'
    }   
    const ac = {
        h0: 'Ambient Computing and IoT Specialization',
        desc: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.',
        h1: 'Quarter IV',
        h1desc: 'AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices',
        h2: 'Quarter V',
        h2desc: 'AC-361: Embedded Programming using C and Rust'
    }   
    const bs = {
        h0: 'Genomics and Bioinformatics Specialization',
        desc: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.',
        h1: 'Quarter IV',
        h1desc: 'Bio-351: Python for Biologists',
        h2: 'Quarter V',
        h2desc: 'Bio-361: Bioinformatics with Python'
    }   
    const am = {
        h0: 'Network Programmability and Automation Specialization',
        desc: 'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile.',
        h1: 'Quarter IV',
        h1desc: 'NPA-351: CCNA 200-301 Certification',
        h2: 'Quarter V',
        h2desc: 'NPA-361: Network Programmability and Automation'
    }   


    const [tab, setTab] = useState(web3)

    return(

        <>
        <div className="w-full flex  mt-24   border-black justify-center mb-20">
        <div className="    border-black w-full  xl:max-w-10/12 2md:mx-0 mx-auto">
            <div className="ml-10  border-black w-full">

            <h1 className="text-4xl bold mb-20">Specialized Tracks</h1>
            <div className="flex 2md:flex-row flex-col mt-2 2md:h-110 ">

                <div className=" max-w-110 min-w-105  space-y-4 overflow-y-scroll shadow-md rounded-md border">
                    <button className={`py-2 flex cursor-pointer focus:bg-color2 focus:border-l-2 rounded-lg`} onClick={() => setTab(web3)}>
                        <Image width={'250'} height={'2'}  src="/meta7.png" alt="" className={` w-44 h-24 rounded-lg ${web3 ? 'border-2 border-black' : 'border-0'}`} />
                        

                        <h1 className="ml-2 text-xl font-bold my-auto">Web 3.0 <span className="text-color5">(Blockchain)</span> and <span className="text-color5">Metaverse </span> Specialization</h1>
                        
                        
                    </button>
                    <button className="py-2 flex cursor-pointer focus:bg-color2  rounded-lg" onClick={() => setTab(ai)}>
                        <Image width={'250'} height={'2'}  src="/ai.jpg" alt="" className=" w-44 h-24 rounded-lg" />
                        

                        <h1 className="ml-2 text-xl font-bold  my-auto">Artificial Intelligence <span className="text-color5">(AI)</span> and Deep Learning Specialization</h1>
                        
                        
                    </button>
                    <button className="py-2 flex cursor-pointer focus:bg-color2 rounded-lg" onClick={() => setTab(cc)}>
                        <Image width={'250'} height={'2'}  src="/cc5.jpg" alt="" className=" w-44 h-24 rounded-lg" />
                        

                        <h1 className="ml-2 text-xl font-bold my-auto">Cloud-Native <span className="text-color5"> Computing</span>  Specialization</h1>
                        
                        
                    </button>
                    <button className="py-2 flex cursor-pointer focus:bg-color2 rounded-lg" onClick={() => setTab(ac)}>
                        <Image width={'250'} height={'2'}  src="/ac4.jpg" alt="" className=" w-44 h-24 rounded-lg" />
                        

                        <h1 className="ml-2 text-xl font-bold my-auto">Ambient Computing and <span className="text-color5">IoT</span> Specialization</h1>
                        
                        
                    </button>
                    <button className="py-2 flex cursor-pointer focus:bg-color2 rounded-lg" onClick={() => setTab(bs)}>
                        <Image width={'250'} height={'2'}  src="/bs4.jpg" alt="" className=" w-44 h-24 rounded-lg" />
                        

                        <h1 className="ml-2 text-xl font-bold my-auto">Genomics and <span className="text-color5">Bioinformatics</span>  Specialization</h1>
                        
                        
                    </button>
                    <button className="py-2 flex cursor-pointer focus:bg-color2 rounded-lg"  onClick={() => setTab(am)}>
                        <Image width={'250'} height={'2'}  src="/am2.jpg" alt="" className=" w-44 h-24 rounded-lg" />
                        

                        <h1 className="ml-2 text-xl font-bold my-auto">Network Programmability and <span className="text-color5">Automation</span> Specialization</h1>
                        
                        
                    </button>
                    
                    
                </div>
                <div className="   flex flex-col items-start  p-8 w-7/12  border shadow-md overflow-y-scroll">
                    <h1 className="text-color1 mb-1 mt-2">Specialized Tracks</h1>
                    <h1 className="text-2xl font-bold mb-4 ">{tab.h0}</h1>
                    <p className="text-lg font-medium mb-4">{tab.desc}</p>
                    <button className=" bg-color5 text-white rounded-lg p-1 text-lg mb-4">Learn More</button>
                    <div className="flex">
                    <div className="  w-5/12 p-2 shadow-lg">

                    <h1 className="text-xl font-bold">{tab.h1}</h1>
                    <p className="text-lg font-medium">{tab.h1desc}</p>
                    </div>
                    <div className="  w-5/12 p-2 shadow-lg">

                    <h1 className="text-xl font-bold">{tab.h2}</h1>
                    <p className="text-lg font-medium">{tab.h2desc}</p>
                    </div>
                    </div>

                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )

    
}