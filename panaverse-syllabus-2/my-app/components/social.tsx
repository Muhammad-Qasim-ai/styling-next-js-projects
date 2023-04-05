

import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";

export default function Social(){
    return(
        <>
        <div className=" hidden lg:flex social duration-500">

        <div className=" w-10 h-96 fixed bottom-0 left-4 text-lightest-slate z-10 bg-transparent">
            <ul className="hidden 2md:flex flex-col ">
               <a href="https://github.com/Muhammad-Qasim-ai"><FiGithub className=" h-9 w-9 p-auto duration-100 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
               <a href="https://www.instagram.com/qasimrafiq69/"><AiOutlineInstagram className=" h-9 w-9 my-4 delay-75 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
               <a href="https://www.linkedin.com/in/mohammad-qasim-3639381bb/"><FaLinkedinIn className=" h-9 w-9 delay-75 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
               <a href="https://twitter.com/Qasim280204"><FiTwitter className=" h-9 w-9 my-4 delay-75 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
               
               <div className="w-0 h-44 border mx-auto mt-5"></div>
            </ul>
        </div>
        <div className=" w-10 h-96 fixed bottom-0 right-4 text-lightest-slate">
            <ul className="hidden 2md:flex flex-col">
               <a href="#" className="  h-10 w-9 items-center justify-start flex rotate-90 m-auto">qasimrafiq2019@gmail.com</a>
               <div className="w-0 h-44 border mx-auto mt-44 mr-5"></div>
            </ul>
        </div>
        </div>
        </>
    )
}