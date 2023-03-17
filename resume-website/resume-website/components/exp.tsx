import { useState } from "react";

export default function Exp(){
  const [tab, setTab] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
    return(
        <>
        <div id="blog"  className="  flex justify-center h-1/3 mt-28 ml-36">
        <div className=" 2md:max-w-4.5xl flex flex-col justify-left w-screen 2md:mx-0  mx-9">
          <div className=" flex w-full flex-row items-center my-auto mb-5 mt-2">
            <span  className=" text-lightest-slate text-2xl font-semibold">
              <span  className="font-mono text-white font-thin">02.</span> Where I've Worked
              
            </span>
            <div className=" w-4/12  h-0 flex mx-5 border-lightest-navy border border-t-0"></div>
          </div>
          <div className="flex">

          <div className="flex w-2/12 flex-col border-l-2 border-lightest-navy ">
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy py-2 -transition--transition border-l-2 ${tab ? 'border-l-4': ''} ${tab2 ? 'border-none' : ''}`} onClick={() => setTab(!tab)}>

                  Not any
                  </button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy py-2 -transition--transition`} onClick={() => setTab2(!tab2)}>
                  Not any</button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy py-2 -transition--transition`} onClick={() => setTab3(!tab3)}>
                  Not any</button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy py-2 -transition--transition`} onClick={() => setTab4(!tab4)}>
                  Not any</button>
                
                
          </div>
          <div className="border w-6/12 flex flex-col">
                <span className=" text-lightest-slate text-lg font-medium">Engineer <span className="text-white">@Upstatement</span></span>
                <span className="text-slate font-mono text-sm mt-1">May 2018-Present</span>
                <li className="text-slate text-sm mt-3">Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li className="text-slate text-sm mt-3">Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li className="text-slate text-sm mt-3">Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
          </div>
          </div>
        </div>
      </div>
        </>
    )
}