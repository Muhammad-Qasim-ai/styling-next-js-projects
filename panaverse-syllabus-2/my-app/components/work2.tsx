'use client'

import Image from "next/image";
import { FiFolder } from "react-icons/fi";
import { TfiNewWindow } from "react-icons/tfi";
import { motion, Variants } from "framer-motion";

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
      <div className="  opacity-0 mb-52"></div>
      <motion.div   className="  flex justify-center h-1/3 2md:mb-60 items-center " >
        <div className=" 2md:max-w-6xl flex flex-col justify-center w-screen 2md:mx-0  mx-9  items-center">
          <div className=" flex w-full flex-row items-center my-auto mb-5 mt-2 justify-center">
            <span  className=" text-lightest-slate text-2xl font-semibold text-center">
            Other Networthy Projects<br/>
              <span  className="font-mono text-white font-thin text-sm">view the archive</span>
            </span>
            
          </div>
          <div className="flex flex-wrap justify-around w-11/12">
            <div className="hover:-translate-y-1">
            <motion.div className="w-80 h-72  shadow-xl rounded-md p-5 bg-light-navy cursor-pointer  duration-100 my-3" initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
                  <div className="text-white w-full  flex  justify-between mb-5 bg-transparent"><FiFolder className="w-10 h-10 stroke-1 bg-transparent"/><TfiNewWindow className="w-5 h-5 text-light-slate bg-transparent" /></div>
                  <div className=" text-lightest-slate w-full font-bold text-xl bg-transparent hover:text-white">Lorem ipsum dolor sit amet consectetur.</div>
                  <div className=" text-light-slate w-full font-light text-md bg-transparent mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, earum laboriosam.</div>
                  <ul className="flex  mt-6 text-slate space-x-2 text-sm font-mono  bg-transparent">
                    <li className="bg-transparent">HTML</li>
                    <li className="bg-transparent">TailwindCSS</li>
                    <li className="bg-transparent">Next.JS</li>
                  </ul>
            </motion.div>

            </div>



            <div className="hover:-translate-y-1">

            <motion.div className="w-80 h-72  shadow-xl rounded-md p-5 bg-light-navy cursor-pointer hover:-translate-y-1 duration-100 my-3" initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
                  <div className="text-white w-full  flex  justify-between mb-5 bg-transparent"><FiFolder className="w-10 h-10 stroke-1 bg-transparent"/><TfiNewWindow className="w-5 h-5 text-light-slate bg-transparent" /></div>
                  <div className=" text-lightest-slate w-full font-bold text-xl bg-transparent hover:text-white">Lorem ipsum dolor sit amet consectetur.</div>
                  <div className=" text-light-slate w-full font-light text-md bg-transparent mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, earum laboriosam. Est aut .</div>
                  <ul className="flex  mt-6 text-slate space-x-2 text-sm font-mono  bg-transparent">
                    <li className="bg-transparent">HTML</li>
                    <li className="bg-transparent">TailwindCSS</li>
                    <li className="bg-transparent">Next.JS</li>
                  </ul>
            </motion.div>
            </div>

            <div className="hover:-translate-y-1">

            <motion.div className="w-80 h-72  shadow-xl rounded-md p-5 bg-light-navy cursor-pointer hover:-translate-y-1 duration-100 my-3" initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
                  <div className="text-white w-full  flex  justify-between mb-5 bg-transparent"><FiFolder className="w-10 h-10 stroke-1 bg-transparent"/><TfiNewWindow className="w-5 h-5 text-light-slate bg-transparent" /></div>
                  <div className=" text-lightest-slate w-full font-bold text-xl bg-transparent hover:text-white">Lorem ipsum dolor sit amet consectetur.</div>
                  <div className=" text-light-slate w-full font-light text-md bg-transparent mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, earum laboriosam. Est aut .</div>
                  <ul className="flex  mt-6 text-slate space-x-2 text-sm font-mono  bg-transparent">
                    <li className="bg-transparent">HTML</li>
                    <li className="bg-transparent">TailwindCSS</li>
                    <li className="bg-transparent">Next.JS</li>
                  </ul>
            </motion.div>
            </div>
            <div className="hover:-translate-y-1">

            <motion.div className="w-80 h-72  shadow-xl rounded-md p-5 bg-light-navy cursor-pointer hover:-translate-y-1 duration-100 my-3" initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
                  <div className="text-white w-full  flex  justify-between mb-5 bg-transparent"><FiFolder className="w-10 h-10 stroke-1 bg-transparent"/><TfiNewWindow className="w-5 h-5 text-light-slate bg-transparent" /></div>
                  <div className=" text-lightest-slate w-full font-bold text-xl bg-transparent hover:text-white">Lorem ipsum dolor sit amet consectetur.</div>
                  <div className=" text-light-slate w-full font-light text-md bg-transparent mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, earum laboriosam. Est aut .</div>
                  <ul className="flex  mt-6 text-slate space-x-2 text-sm font-mono  bg-transparent">
                    <li className="bg-transparent">HTML</li>
                    <li className="bg-transparent">TailwindCSS</li>
                    <li className="bg-transparent">Next.JS</li>
                  </ul>
            </motion.div>
            </div>
            <div className="hover:-translate-y-1">

            <motion.div className="w-80 h-72  shadow-xl rounded-md p-5 bg-light-navy cursor-pointer hover:-translate-y-1 duration-100 my-3" initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
                  <div className="text-white w-full  flex  justify-between mb-5 bg-transparent"><FiFolder className="w-10 h-10 stroke-1 bg-transparent"/><TfiNewWindow className="w-5 h-5 text-light-slate bg-transparent" /></div>
                  <div className=" text-lightest-slate w-full font-bold text-xl bg-transparent hover:text-white">Lorem ipsum dolor sit amet consectetur.</div>
                  <div className=" text-light-slate w-full font-light text-md bg-transparent mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, earum laboriosam. Est aut .</div>
                  <ul className="flex  mt-6 text-slate space-x-2 text-sm font-mono  bg-transparent">
                    <li className="bg-transparent">HTML</li>
                    <li className="bg-transparent">TailwindCSS</li>
                    <li className="bg-transparent">Next.JS</li>
                  </ul>
            </motion.div>
            </div>
            <div className="hover:-translate-y-1">

            <motion.div className="w-80 h-72  shadow-xl rounded-md p-5 bg-light-navy cursor-pointer hover:-translate-y-1 duration-100 my-3" initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}>
                  <div className="text-white w-full  flex  justify-between mb-5 bg-transparent"><FiFolder className="w-10 h-10 stroke-1 bg-transparent"/><TfiNewWindow className="w-5 h-5 text-light-slate bg-transparent" /></div>
                  <div className=" text-lightest-slate w-full font-bold text-xl bg-transparent hover:text-white">Lorem ipsum dolor sit amet consectetur.</div>
                  <div className=" text-light-slate w-full font-light text-md bg-transparent mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, earum laboriosam. Est aut .</div>
                  <ul className="flex  mt-6 text-slate space-x-2 text-sm font-mono  bg-transparent">
                    <li className="bg-transparent">HTML</li>
                    <li className="bg-transparent">TailwindCSS</li>
                    <li className="bg-transparent">Next.JS</li>
                  </ul>
            </motion.div>
            </div>
            
            
          </div>
        </div>
      </motion.div>
    </>
  );
}
