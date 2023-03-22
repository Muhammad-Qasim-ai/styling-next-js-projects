import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";



export default function Main(){
    return(
        <>
        <div id="home" className="border w-96 z-30 opacity-0"></div>
        <div className=" flex justify-center h-auto 2md:mt-80 mt-28 lg:mx-auto mx-9 2md:mb-96 bg-transparent">
        <div className=" w-full lg:w-8/12 flex flex-col justify-left ">
            <span className=" text-white font-mono h-6 w-auto main1 bg-transparent delay-75">Hi, my name is</span>
            <span className=" text-lightest-slate text-5xl sm:text-7xl mt-4 font-semibold main2 delay-100">Muhammad Qasim;</span>
            <span className=" text-slate text-5xl sm:text-7xl mt-4 font-medium w-auto main3 delay-150">I Build Things for the web;</span>
            <span className=" text-slate mt-4 font-normal sm:w-96 main4 delay-200">I’m a Web Developer specializing in building (and occasionally designing) exceptional digital experiences.</span>
            <div className="flex h-6 items-center text-lightest-slate mt-4 main5 delay-300"><FiPhoneCall className=" text-slate font-normal mr-5"/> +923222288303</div>
            <div className="flex h-6 items-center text-lightest-slate mt-4 main6 delay-700"><MdOutlineLocationOn className=" text-slate font-normal mr-5"/>Gulshan-e-Iqbal, Karachi</div>
            <button className="bg-navy border text-white rounded mt-6 w-24 h-10 text-center flex items-center justify-center main8 delay-1000 font-mono">
                About me
              </button>
        </div>

        </div>
        </>
    )
}