'use client'
import Image from "next/image";
import { FiFolder, FiGithub, FiTwitter } from "react-icons/fi";
import { TfiNewWindow } from "react-icons/tfi";
import { motion, Variants } from "framer-motion";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};
  return (
    <>
      <div id="projects" className="  opacity-1 "></div>
      <motion.div   className="  flex justify-center h-1/3 items-center " initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
        <div className=" 2md:max-w-6xl flex flex-col justify-center w-screen 2md:mx-0  mx-9  items-center">
        <div className=" flex w-full flex-row items-center  mb-5 mt-2">
            <span  className=" text-green-50  sm:text-xl font-thin text-lg font-mono mx-auto">
              <span  className="font-mono text-white font-thin text-lg">04.</span> What's Next?
            </span>
            
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className=" text-lightest-slate font-bold text-4xl 2md:text-6xl">Get In Touch</span>
            <p className="w-80 2md:w-5/12 mt-6 text-center text-lg text-light-slate">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <a href={'#home'} className="bg-navy border text-white rounded mt-6 w-28 h-10 text-center flex items-center justify-center main8 delay-1000 font-mono">
                Contact me
              </a>
            <div className=" text-light-slate font-mono text-md mt-64 2md:mb-5">Built By Muhammad Qasim</div>
            <ul className="2md:hidden flex justify-center items-center px-20 space-x-7 text-lightest-slate">
               <a href="https://github.com/Muhammad-Qasim-ai"><FiGithub className=" h-9 w-9 p-auto duration-100 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
               <a href="https://www.instagram.com/qasimrafiq69/"><AiOutlineInstagram className=" h-9 w-9 my-4 delay-75 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
               <a href="https://www.linkedin.com/in/mohammad-qasim-3639381bb/"><FaLinkedinIn className=" h-9 w-9 delay-75 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
               <a href="https://twitter.com/Qasim280204"><FiTwitter className=" h-9 w-9 my-4 delay-75 hover:text-white hover:-translate-y-1 hover:scale-100" /></a>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
