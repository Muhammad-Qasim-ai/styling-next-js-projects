"use client";

// import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav  className="w-full  font-mono shadow-xl z-20 fixed top-0" >
        <div className="justify-between px-4 md:items-baseline md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              
              <a href="#home">
                <h2 className="text-2xl text-cyan-600 font-bold ">QASIM</h2>
              </a>
              
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none focus:border-gray-400 focus:border text-white"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose className="w-7 h-7"  />
                  ) : (
                    <HiMenu
                      className="focus:border-none active:border-none w-7 h-7"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
          <div
              className={`flex-1 relative justify-self-center pb-0 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block ' : 'hidden'
              }`}
            >           
              <ul className="h-72 md:h-auto items-baseline justify-center md:flex ">
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center nav1">
                  <a href="#about" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">01.</span> About
                  </a>
                </li>
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center nav2">
                  <a href="#blog" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">02.</span> Experience
                  </a>
                </li>
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center nav3">
                  <a href="#contact" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">03.</span> Work
                  </a>
                </li>
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center nav4">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">04.</span> Contact
                  </a>
                </li>
                <button className="bg-navy border text-white rounded w-20 h-10 text-center md:mx-0 flex items-center justify-center mx-auto nav5">
                Resume
              </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
