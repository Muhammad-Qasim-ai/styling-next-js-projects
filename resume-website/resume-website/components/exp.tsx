import { useState } from "react";

export default function Exp(){
    const exp = 'Not any'
    const expdesc = {
      head: 'Lorem ipsum 1',
      subhead: '@Lorem',
      Date: 'May 2018-Present',
      one: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      two: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      three: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
    }
    const exp2 = 'Not any'
    const expdesc2 = {
      head: 'Lorem ipsum 2',
      subhead: '@Lorem',
      Date: 'May 2018-Present',
      one: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      two: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      three: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
    }
    const exp3 = 'Not any'
    const expdesc3 = {
      head: 'Lorem ipsum 3',
      subhead: '@Lorem',
      Date: 'May 2018-Present',
      one: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      two: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      three: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
    }
    const exp4 = 'Not any'
    const expdesc4 = {
      head: 'Lorem ipsum 4',
      subhead: '@Lorem',
      Date: 'May 2018-Present',
      one: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      two: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
      three: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis fugit exercitationem nihil dolore.',
    }
    const [tab, setTab]: any = useState(expdesc);

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
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2 px-2 2md:focus:border-l-2 focus:border-t-2`}  onClick={() => setTab(expdesc)}>
                  {exp}
                  </button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2  px-2 2md:focus:border-l-2 focus:border-t-2`}  onClick={() => setTab(expdesc2)}>
                  Not any</button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2 px-2 2md:focus:border-l-2 focus:border-t-2`}  onClick={() => setTab(expdesc3)}>
                  Not any</button>
                <button className={`text-left text-slate pl-4 font-mono hover:text-white hover:bg-light-navy sm:py-2  px-2 2md:focus:border-l-2 focus:border-t-2` }  onClick={() => setTab(expdesc4)}>
                  Not any</button>
                
                
          </div>
          <div className="sm:w-6/12 flex flex-col sm:my-0 my-5 w-full">
                <span className=" text-lightest-slate text-lg font-medium">{tab.head}<span className="text-white">{tab.subhead}</span></span>
                <span className="text-slate font-mono text-sm mt-1">{tab.Date}</span>
                <li className="text-slate text-sm mt-3">{tab.one}</li>
                <li className="text-slate text-sm mt-3">{tab.two}</li>
                <li className="text-slate text-sm mt-3">{tab.three}</li>
          </div>
          </div>
        </div>
      </div>
        </>
    )
}

function Facebook(){
  return(
    <>
    <div className="w-96 h-96 border">
      
    </div>
    </>

  )
}