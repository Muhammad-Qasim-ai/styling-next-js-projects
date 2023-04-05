
'use client'

import Image from "next/image";
import { TfiNewWindow } from "react-icons/tfi";
import { motion, Variants } from "framer-motion";
import { FiGithub, FiTwitter } from "react-icons/fi";


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
  const introHeaderVariants2: Variants = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5,
        },
    },
};
  const introHeaderVariants3: Variants = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1,
        },
    },
};
  return (
    
    <>
    <div id="contact" className=" opacity-1 mb-1"></div>
      <div   className="  flex justify-center h-1/3 sm:mt-20 mt-16">
        <div className=" 2md:max-w-4xl flex flex-col justify-left w-screen 2md:mx-0  mx-9">
          <div className=" flex w-full flex-row items-center my-auto mb-5 mt-2">
            <span  className=" text-lightest-slate text-2xl font-semibold">
              <span  className="font-mono text-white font-thin">03.</span> Some Things I've Built
            </span>
            <div className=" w-4/12  h-0 mx-5 border-lightest-navy border border-t-0 sm:flex hidden"></div>
          </div>
            <motion.div className="flex text-right mx-auto w-full mt-5" initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
             
                
                <Image 
                          src={'/panaverse2.avif'}
                          width={'80'}
                          height={'64'} alt={"panaverse"} 
                          className={'w-full 2md:block hidden 2md:h-80 h-62 saturate-50 hover:saturate-100 rounded-xl'}               
                />
              

              
                <div className="flex flex-col 2md:w-4/12 overflow-visible w-full  bg-panaverse2 2md:bg-none bg-cover ">
                    <span className="text-white font-mono text-right  text-sm mt-2 px-4 bg-transparent">Featured Project</span>
                    <span className=" text-lightest-slate font-bold text-right text-2xl mt-2 px-4 bg-transparent">Panaverse Dao</span>
                    <div className="rotate-180 mt-2 bg-transparent">
                    <p className="rotate-180 p-5 text-light-slate shadow-lg bg-light-navy w-111 2md:w-110 rounded-xl">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <ul className=" text-light-slate flex  justify-end px-4 bg-transparent mt-3">
                        <li className="px-2 text-right bg-transparent">Next.js</li>
                        <li className="px-2 text-right bg-transparent">Tailwind</li>
                        <li className="px-2 text-right bg-transparent">HTML</li>
                        <li className=" text-right bg-transparent">CSS</li>
                        
                    </ul>
                    <div className="flex justify-end px-5 items-center  bg-transparent mt-2">
                    <a href="https://github.com/Muhammad-Qasim-ai?tab=repositories "  className="bg-transparent"><FiGithub className=" text-lightest-slate w-6 h-6 bg-transparent "/></a>
                    <a href="https://panaverse-syllabus-qasimrafiq2019-gmailcom.vercel.app/ " className="bg-transparent"><TfiNewWindow className=" text-light-slate w-6 h-7 mx-2 mb-2 bg-transparent" /></a>
                    </div>
                </div>
                
            </motion.div>
            <motion.div initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants2} className="flex text-left mx-auto w-full mt-20 ">
             
                
                
              

              
                <div className="flex flex-col 2md:w-4/12 overflow-visible w-full  bg-pricingui 2md:bg-none bg-cover ">
                    <span className="text-white font-mono text-left  text-sm mt-2 px-4 bg-transparent">Featured Project</span>
                    <span className=" text-lightest-slate font-bold text-left text-2xl mt-2 px-4 bg-transparent">Panaverse Dao</span>
                    <div className=" mt-2 bg-transparent z-10">
                    <p className="p-5  text-light-slate shadow-lg bg-light-navy w-111 2md:w-110 rounded-xl">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <ul className=" text-light-slate flex  justify-start px-4 bg-transparent mt-3">
                        <li className="px-2 text-left bg-transparent">Next.js</li>
                        <li className="px-2 text-left bg-transparent">Tailwind</li>
                        <li className="px-2 text-left bg-transparent">HTML</li>
                        <li className=" text-left bg-transparent">CSS</li>
                        
                    </ul>
                    <div className="flex justify-start   px-5 items-center  bg-transparent mt-2">
                    <a href="https://github.com/Muhammad-Qasim-ai?tab=repositories" className="bg-transparent"><FiGithub className=" text-lightest-slate w-6 h-6 bg-transparent "/></a>
                    <a href="https://panaverse-syllabus-qasimrafiq2019-gmailcom.vercel.app/ " className="bg-transparent"><TfiNewWindow className=" text-light-slate w-6 h-7 mx-2 mb-2 bg-transparent" /></a>
                    </div>
                </div>
                <Image 
                          src={'/pricingui.avif'}
                          width={'80'}
                          height={'64'} alt={"panaverse"} 
                          className={'w-8/12 2md:block hidden 2md:h-72 h-62 saturate-50 hover:saturate-100 rounded-xl'}               
                />
            </motion.div>
            <motion.div initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants3} className="flex text-right mx-auto w-full mt-20 ">
             
                
                <Image 
                          src={'/panaverse2.avif'}
                          width={'80'}
                          height={'64'} alt={"panaverse"} 
                          className={'w-full 2md:block hidden 2md:h-80 h-62 saturate-50 hover:saturate-100 rounded-xl'}               
                />
              

              
                <div className="flex flex-col 2md:w-4/12 overflow-visible w-full  bg-panaverse2 2md:bg-none bg-cover ">
                    <span className="text-white font-mono text-right  text-sm mt-2 px-4 bg-transparent">Featured Project</span>
                    <span className=" text-lightest-slate font-bold text-right text-2xl mt-2 px-4 bg-transparent">Panaverse Dao</span>
                    <div className="rotate-180 mt-2 bg-transparent">
                    <p className="rotate-180 p-5 text-light-slate shadow-lg bg-light-navy w-111 2md:w-110 rounded-xl">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <ul className=" text-light-slate flex  justify-end px-4 bg-transparent mt-3">
                        <li className="px-2 text-right bg-transparent">Next.js</li>
                        <li className="px-2 text-right bg-transparent">Tailwind</li>
                        <li className="px-2 text-right bg-transparent">HTML</li>
                        <li className=" text-right bg-transparent">CSS</li>
                        
                    </ul>
                    <div className="flex justify-end px-5 items-center  bg-transparent mt-2">
                    <a href="https://github.com/Muhammad-Qasim-ai?tab=repositories" className="bg-transparent"><FiGithub className=" text-lightest-slate w-6 h-6 bg-transparent "/></a>
                    <a href="https://panaverse-syllabus-qasimrafiq2019-gmailcom.vercel.app/" className="bg-transparent"><TfiNewWindow className=" text-light-slate w-6 h-7 mx-2 mb-2 bg-transparent" /></a>
                    </div>
                </div>
                
            </motion.div>
            
        </div>
      </div>
    </>
  );
}
