"use client";

// import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineClose } from "react-icons/ai";
import { RxOpenInNewWindow} from "react-icons/rx"
import { AiOutlineArrowRight } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TfiNewWindow } from "react-icons/tfi";


const Navbar = () => {


  const navItems = {
       Label: 'Core Courses',
       subLabel: 'Learn more'   ,
       Label2: 'Specialized Track',
       subLabel2: 'An exclusive list for contract work'
    }


  const [showDropdown, setShowDropdown] = useState(false);


  const toggleDropdown = () => setShowDropdown(prev => !prev)


  return(
    <>
    <div className="hidden w-full shadow-2lg rounded-2md 2md:flex justify-center h-24 fixed z-10 bg-color4  border">

    <div className="hidden lg:w-10/12 2md:w-full h-24  2md:flex  items-center  justify-between">
      <div className="flex">

      <Image width={140} height={'2'} src={"/logo.jpg"} alt={""} className="w-42 h-20 ml-10 mt-2" />
      
        <ul className="flex  justify-between w-80 lg:w-80 h-24 text-lg items-center text-black font-normal ml-10">
          
          <li className="max-w-2xs max-h-7">
            <button onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Courses</button> 
            <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              {showDropdown && (
                <div className=" flex flex-col  w-96 h-32 p-2 rounded-lg relative z-10 top-2 bg-white text-black shadow-2lg">
                        <a href="#" className=" h-3/5 flex flex-col pl-2 hover:bg-gray-300 rounded-lg ">
                          {navItems.Label}
                          <a href="" className=" text-xs">{navItems.subLabel}</a>
                        </a>
                        <a href="#" className=" h-3/5 flex flex-col pl-2">
                          {navItems.Label}
                          <a href="" className=" text-xs">{navItems.subLabel}</a>
                        </a>
                   </div>
              )}
            </div>
            
          </li>
          <li>Commmuntiy</li>
          <li>About Us</li>
          </ul>
      </div>

          <div className="flex justify-between sm:w-36 mr-14   items-center"> 
         <a className=" text-lg sm:block hidden mr-4 md:flex items-center">Github <RxOpenInNewWindow className="ml-1" /> </a>
         <button className=" bg-color5 text-white rounded-lg p-2 px-3 text-lg ">Register</button>
      </div>
    </div>
    </div>
    <MobileNav />
    </>
  )
}

const MobileNav = () => {

const [navbar, setnavbar] = useState(false)
const [showDropdown2, setShowDropdown2] = useState(false)

  return(
    <>

      <div className="2md:hidden flex  h-24 bg-color4  z-10 w-full shadow-2lg rounded-2md justify-between items-center fixed ">
        <button className="ml-4 my-auto" onClick={() => setnavbar(!navbar)}>
          {navbar ? (
            <AiOutlineClose className="sm:w-10 sm:h-10 w-8 h-8 " />
          ) : (

          <HiMenu className="sm:w-10 sm:h-10 w-8 h-8"/>
          )}

        </button>
        <Image width={'110'} height={'2'} src="/logos/red.png" alt="" className=" w-42 h-20 my-auto" />
      <div className="flex justify-between sm:w-36 mr-2 sm:mr-11"> 
      <a className=" text-lg  hidden mr-4 sm:flex items-center">Github <RxOpenInNewWindow className="ml-1" /> </a>
         <button className=" bg-black rounded-lg p-2 sm:px-3 text-lg text-white ">Register</button>
      </div>
      
        
      
      </div>
      {navbar && (
      <div className="h-auto bg-color3 text-lg shadow-2lg rounded-sm -mt-3 fixed w-full z-10 top-24">
          <ul>
            

            <button className="flex justify-between items-center w-full my-2" onClick={()=> setShowDropdown2(!showDropdown2)}>
             Courses
              <AiOutlineArrowDown className={`h-4 w-4  ${showDropdown2 && 'rotate-180'}`} />
            </button>
              {showDropdown2 && (
                <div className={`h-auto w-full flex flex-col ml-4`}>
                    <a href="#" onClick={() => setnavbar(!navbar)} >Core Courses</a>
                    <a href="#" onClick={() => setnavbar(!navbar)} >Specialized Tracks</a>
                </div>
              )}

            <li className="my-2"><button onClick={() => setnavbar(!navbar)}>Community</button></li>
            <li className="my-2"><button onClick={() => setnavbar(!navbar)}>About</button></li>
          </ul>
      </div>
    )}
      
    </>
  )
}


export default Navbar