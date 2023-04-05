'use client'

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
            duration: 2,
        },

    },
    
};
  return (
    <>
      <div id="about" className=" border opacity-0 mb-28 "></div>
      <motion.div   className="  flex justify-center h-1/3 mb-14 bg-color2 " 
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introHeaderVariants}>
        <div className=" 2md:max-w-4.5xl flex flex-col justify-left w-screen 2md:mx-0  mx-9">
          <div className=" flex w-full flex-row items-center my-auto mb-5 mt-2">
            <span  className=" text-lightest-slate sm:text-2xl font-semibold text-xl">
              <span  className="font-mono text-white font-thin">01.</span> About
              Me
            </span>
            <div className=" w-4/12  h-0 mx-5 border-lightest-navy border border-t-0  sm:flex hidden"></div>
          </div>
          <div className="  lg:grid lg:grid-cols-14 lg:gap-12 block">
            <div className="mt-1  ">
              <p className=" text-lightest-slate static">
                Hello! My name is Muhammad Qasim. As a student I have completed the FIA-ACCA program and is currently working on the skills module, as well as studying front-end development, I have a strong foundation in both finance and technology. I am passionate about utilizing my skills to contribute to the ever-changing landscape of the tech industry
              </p>
              <p className=" text-lightest-slate   mt-3">
              With my FIA-ACCA certification, I have gained knowledge and experience in financial accounting, auditing, and taxation. These skills have provided me with a well-rounded understanding of financial management and decision-making.
              </p>
              <p className=" text-lightest-slate   mt-3">
              In addition, my studies in front-end development have allowed me to develop technical skills in HTML, CSS, JavaScript, and other programming languages. I am continuously learning and improving my knowledge of software development, which I believe will be a valuable asset in the current digital age.
              </p>
              <p className=" text-lightest-slate   mt-3">
                Here are a few technologies I’ve been working with recently as a front-end developer:
              </p>
              <ul className="grid gap-2 grid-cols-2 grid-rows-3 text-lightest-slate mt-4">
                <li className="  mt-3 list-disc mx-5">TypeScript</li>
                <li className="  mt-3 list-disc mx-5">JavaScript</li>
                <li className="  mt-3 list-disc mx-5">React</li>
                <li className="  mt-3 list-disc mx-5">Node.js</li>
                <li className="  mt-3 list-disc mx-5">Chat-gpt</li>
                <li className="   mt-3 list-disc mx-5">TypeScript</li>
              </ul>
            </div>
            
            <div className=" flex justify-center">
            <div className="relative lg:block max-w-2sm mt-9  ">
              <Image
                src="/pic3.jpeg"
                alt="pic"
                width={'16'}
                height={'20'}
                className=" before:top-0 before:left-0 absolute rounded-2xl w-64 h-80  hover:translate-x-1.5  hover:translate-y-1.5 duration-1000 saturate-50 hover:saturate-100"
              />
              <div className=" lg:ml-4 lg:m-4 border-2 w-64 h-80  rounded-md ml-4 m-4 "></div>
            </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </>
  );
}
