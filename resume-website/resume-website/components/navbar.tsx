"use client";

// import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <>
//       <header className="">
//             <div className="flex w-full bg-navy h-52 md:h-24 text-md font-mono md:justify-end md:items-center border">
//           <div className="md:hidden flex float-right justify-self-end border h-11 ">
//             <button
//               // className={"h-10 w-10 md:hidden"}
//               onClick={() => setNavbar(!navbar)}
//             >
//               {navbar ? (
//                 <AiOutlineClose className="h-10 w-10" />
//               ) : (
//                 <HiMenu className="w-10 h-10" />
//               )}
//             </button>
//         </div>
//           <div
//               className={` ${
//                 navbar ? '' : 'hidden'
//               }`}
//             >
//           <div className=" flex w-7/12 md:w-10/12 md:h-11 md:float-right md:mr-7 border md:pt-0 pt-2">
//             <div className="flex m-auto md:space-x-4 md:mr-6 md:items-baseline text-lightest-slate md:flex-row flex-col">
//               <a
//                 href="https://google.com"
//                 className="hover:underline"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 <span className="text-white">01.</span> About
//               </a>
//               <a
//                 href="https://google.com"
//                 className="hover:underline"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 <span className="text-white">02.</span> Experience
//               </a>
//               <a
//                 href="https://google.com"
//                 className="hover:underline"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 <span className="text-white">03.</span> Work
//               </a>
//               <a
//                 href="https://google.com"
//                 className="hover:underline"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 <span className="text-white">04.</span> Contact
//               </a>
//               <button className="bg-navy border text-white rounded w-20 h-10 md:mt-0 mt-4 md:m-0 m-auto">
//                 Resume
//               </button>
//             </div>
//           </div>
//         </div>
//         </div>
//       </header>
//     </>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full 2md:fixed top-0 font-mono shadow-xl" >
        <div className="justify-between px-4 md:items-baseline md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
              </Link>
              
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
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center">
                  <a href="#about" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">01.</span> About
                  </a>
                </li>
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center">
                  <a href="#blog" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">02.</span> Experience
                  </a>
                </li>
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center">
                  <a href="#contact" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">03.</span> Work
                  </a>
                </li>
                <li className="pb-6 text-sm text-lightest-slate py-2 md:px-6 text-center">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                  <span className="text-white">04.</span> Contact
                  </a>
                </li>
                <button className="bg-navy border text-white rounded w-20 h-10 text-center md:mx-0 flex items-center justify-center mx-auto  transition-all delay-500">
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
