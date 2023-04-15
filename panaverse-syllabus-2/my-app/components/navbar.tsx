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
    <div className=" w-full shadow-2lg rounded-2md flex justify-center">

    <div className="hidden lg:w-10/12 2md:w-full h-24  2md:flex  items-center fixed">
      <img src={"/logo.jpg"} alt={""} className="w-42 h-20 ml-10"></img>
      
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
          <div className="flex justify-between sm:w-36 mr-3 absolute right-10 items-center"> 
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
    
      <div className="2md:hidden flex  h-24 bg-white w-full shadow-2lg rounded-2md justify-between items-center ">
        <button className="ml-4 my-auto" onClick={() => setnavbar(!navbar)}>
          {navbar ? (
            <AiOutlineClose className="sm:w-10 sm:h-10 w-8 h-8 " />
          ) : (

          <HiMenu className="sm:w-10 sm:h-10 w-8 h-8"/>
          )}

        </button>
        <img src="./logos/red.png" alt="" className=" w-42 h-20 my-auto" />
      <div className="flex justify-between sm:w-36 mr-2 sm:mr-11"> 
      <a className=" text-lg  hidden mr-4 sm:flex items-center">Github <RxOpenInNewWindow className="ml-1" /> </a>
         <button className=" bg-black rounded-lg p-2 sm:px-3 text-lg text-white ">Register</button>
      </div>
      
        
      
      </div>
      {navbar && (
      <div className="h-auto bg-color3 text-lg shadow-2lg rounded-sm -mt-3">
          <ul>
            <li className="my-2">Home</li>

            <button className="flex justify-between items-center w-full my-2" onClick={()=> setShowDropdown2(!showDropdown2)}>
             Courses
              <AiOutlineArrowDown className={`h-4 w-4  ${showDropdown2 && 'rotate-180'}`} />
            </button>
              {showDropdown2 && (
                <div className={`h-auto w-full flex flex-col ml-4`}>
                    <a href="#">Core Courses</a>
                    <a href="#">Specialized Tracks</a>
                </div>
              )}

            <li className="my-2">Community</li>
            <li className="my-2">About</li>
          </ul>
      </div>
    )}
      
    </>
  )
}


export default Navbar