'use client'
import { useState } from "react";
import Image from "next/image";
import { BsArrowBarRight, BsArrowBarLeft, BsArrowBarDown} from "react-icons/bs";



export default function Core() {

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)


  return (
    <>
      <div className="w-full flex  mt-24  border-black justify-center">
        <div className="    border-black w-full  xl:max-w-10/12 2md:mx-0 mx-auto">
          <h1 className="text-4xl font-extrabold ml-14 mb-5">Core Courses</h1>

        <div className=" space-y-8">

            

            <div className="flex  border-black items-center 3md:ml-10 lg:flex-row flex-col z-5">
          <div className={`3md:w-113 3sm:w-96 w-80  shadow-md h-64 ${one && '2md:border-r-4 border-color5 border-b-4 '}`}>
            <h1 className=" ml-4 text-xl 1lg:text-2xl font-semibold">
              <span className="text-color5">CS-101:</span> Object-Oriented Programming using TypeScript
            </h1>
            <div className="flex justify-between items-end">
              <Image width={'500'} height={'0'} src="/typescript.svg" alt="" className="w-40" />
              <div className="text-9xl font-bold opacity-10">Q1</div>
            </div>
                </div>
                {one && (
                 

                    <div className={`shadow-md border-black w-72 3sm:w-80 3md:w-112 pl-3  main1  duration-1000`}>
                        <h1 className="font-semibold text-2xl">Course Description:</h1>
                        <p>We will start the program by learning the fundamentals of Object-Oriented programming using <span className="text-color5 font-medium">JavaScript and TypeScript</span> .</p>
                        
                            <li>HTML and CSS (Homework) </li>
                            <li>Web 3.0 and Metaverse Theory</li>
                            <li>Fundamentals of Typescript</li>
                            <li>Object-Oriented Programming with TypeScript</li>
                        
                        <button className="ml-6 mt-3 mb-2 bg-color5 text-white rounded-lg 
                        p-1 px-3 text-lg ">Learn More</button>
                    </div>
                    
                 
                )}
                <button><BsArrowBarRight onClick={() => setOne(!one)} className={`2md:block hidden ${one && 'rotate-180'} `} /></button>
                <button><BsArrowBarDown onClick={() => setOne(!one)} className={`2md:hidden block ${one && 'rotate-180  '} `} /></button>

                
            </div>


            <div className="flex  border-black items-center 3md:ml-10 1lg:flex-row-reverse lg:flex-row flex-col mr-10">
            <div className={`3md:w-113 3sm:w-96 w-80  shadow-md h-64 ${two && 'lg:border-r-4 lg:border-color5 border-b-4 border-color5'}`}>
            <h1 className=" ml-4 text-xl 1lg:text-2xl font-semibold border-l-4  pl-2">
              <span className="text-color5">W2-201:</span> Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13
            </h1>
            <div className="flex justify-between ml-4 my-2">
              <Image width={'2'} height={'2'}  src="/next.svg" alt="" className="w-28 3sm:w-40 ml-4 " />
              <div className="text-9xl font-bold opacity-10 mb-7">Q2</div>
            </div>
                </div>
                {two && (
                  

                          
                  <div className={`shadow-md border-black w-72 3sm:w-80 3md:w-112 pl-3  main3 2md:main2 duration-300`}>
                  <h1 className="font-semibold text-2xl">Course Description:</h1>
                  <p>We will start the program by learning the fundamentals of Object-Oriented programming using <span className="text-color5 font-medium">JavaScript and TypeScript</span> .</p>
                  
                      <li>HTML and CSS (Homework) </li>
                      <li>Web 3.0 and Metaverse Theory</li>
                      <li>Fundamentals of Typescript</li>
                      <li>Object-Oriented Programming with TypeScript</li>
                  
                  <button className="ml-6 mt-3 mb-2 bg-color5 text-white rounded-lg 
                  p-1 px-3 text-lg ">Learn More</button>
              </div>
                  
                )}
                <button><BsArrowBarLeft onClick={() => setTwo(!two)} className={`1lg:block hidden ${two && 'rotate-180'} `} /></button>
                <button><BsArrowBarRight onClick={() => setTwo(!two)} className={`1lg:hidden 2md:block hidden  ${two && 'rotate-180'} `} /></button>
                <button><BsArrowBarDown onClick={() => setTwo(!two)} className={`2md:hidden block ${two && 'rotate-180  '} `} /></button>

               
            </div>


            <div className="flex  border-black items-center 3md:ml-10 lg:flex-row flex-col">
          
          <div className={`3md:w-113 3sm:w-96 w-80  shadow-md 1lg:64 h-72 ${three && 'lg:border-r-4 lg:border-color5 border-b-4 border-color5'}`}>
            <h1 className=" ml-4 text-xl 1lg:text-2xl font-semibold">
              <span className="text-color5">$-101:</span> Dollar Making Bootcamp - Full-Stack Template and API Product Development

            </h1>
            <div className="flex justify-between">
              <Image width={'2'} height={'2'} src="/api.svg" alt="" className="w-40" />
              <div className="text-9xl font-bold opacity-10">Q3</div>
            </div>
                </div>
                {three && (
                  
                    
                    <div className={`shadow-md border-black w-72 3sm:w-80 3md:w-112 pl-3  main3 2md:main1 duration-300`}>
                        <h1 className="font-semibold text-2xl">Course Description:</h1>
                        <p>We will start the program by learning the fundamentals of Object-Oriented programming using <span className="text-color5 font-medium">JavaScript and TypeScript</span> .</p>
                        
                            <li>HTML and CSS (Homework) </li>
                            <li>Web 3.0 and Metaverse Theory</li>
                            <li>Fundamentals of Typescript</li>
                            <li>Object-Oriented Programming with TypeScript</li>
                        
                        <button className="ml-6 mt-3 mb-2 bg-color5 text-white rounded-lg 
                        p-1 px-3 text-lg ">Learn More</button>
                    </div>
                
                 
                )}
                <button><BsArrowBarRight onClick={() => setThree(!three)} className={`2md:block hidden ${three && 'rotate-180'} `} /></button>
                <button><BsArrowBarDown onClick={() => setThree(!three)} className={`2md:hidden block ${three && 'rotate-180  '} `} /></button>

            </div>


        </div>
        </div>
      </div>
    </>
  );
}
