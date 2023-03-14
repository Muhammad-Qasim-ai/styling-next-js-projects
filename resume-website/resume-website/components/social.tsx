import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";

export default function Social(){
    return(
        <>
        <div className="delay-100">

        <div className="w-10 h-96 fixed bottom-0 left-7 text-lightest-slate">
            <ul className="hidden md:flex flex-col ">
               <a href="#"><FiGithub className=" h-9 w-9 p-auto" /></a>
               <a href=""><AiOutlineInstagram className=" h-9 w-9 my-4" /></a>
               <a href=""><FaLinkedinIn className=" h-9 w-9 " /></a>
               <a href=""><FiTwitter className=" h-9 w-9 my-4" /></a>
               
               <div className="w-0 h-44 border mx-auto mt-5"></div>
            </ul>
        </div>
        <div className=" w-10 h-96 fixed bottom-0 right-7 text-lightest-slate">
            <ul className="hidden md:flex flex-col">
               <a href="#" className="  h-10 w-9 items-center justify-start flex rotate-90 m-auto">qasimrafiq2019@gmail.com</a>
               <div className="w-0 h-44 border mx-auto mt-44 mr-5"></div>
            </ul>
        </div>
        </div>
        </>
    )
}