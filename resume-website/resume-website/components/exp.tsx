import { useState } from "react";

export default function Exp(){
    return(
        <>
        <div id="blog" className="  opacity-0  mb-40"></div>
        <div  className="  flex justify-center h-1/3 mt-28 2md:ml-36 2md:my-96">
        <div className=" 2md:max-w-4.5xl flex flex-col sm:justify-left w-screen 2md:mx-0  mx-9  ">
          <div className=" flex w-full flex-row items-center my-auto mb-5 mt-2 justify-center ">
            <span  className=" text-lightest-slate text-2xl font-semibold">
              <span  className="font-mono text-white font-thin">02.</span> Where I've Worked
              
            </span>
            <div className=" w-4/12  h-0 flex mx-5 border-lightest-navy border-t-0"></div>
          </div>
          <div className="flex sm:flex-row flex-col">

          <div className="flex sm:w-2/12 sm:flex-col sm:border-l-2 border-lightest-navy sm:border-t-0 border-t-2 w-full sm:justify-start justify-between">
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2 px-2 `}>

                  Not any
                  </button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2  px-2`}>
                  Not any</button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2 px-2 `}>
                  Not any</button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2  px-2` } >
                  Not any</button>
                
                
          </div>
          <div className="sm:w-6/12 flex flex-col sm:my-0 my-5 w-full">
                <span className=" text-lightest-slate text-lg font-medium">Lorem ipsum <span className="text-white">@Lorem</span></span>
                <span className="text-slate font-mono text-sm mt-1">May 2018-Present</span>
                <li className="text-slate text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.</li>
                <li className="text-slate text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.</li>
                <li className="text-slate text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.</li>
          </div>
          </div>
        </div>
      </div>
        </>
    )
}