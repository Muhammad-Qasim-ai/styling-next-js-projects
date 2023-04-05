"use client";

// import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";




// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <a href="/">
//               <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
//             </a>
//             <a href="/about">
//               <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
//             </a>
//             <div className="relative">
//               <button
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 Services
//                 {isOpen ? (
//                   <AiOutlineClose className="h-5 w-5 inline-block ml-1" aria-hidden="true" />
//                 ) : (
//                   <HiMenu className="h-5 w-5 inline-block ml-1" aria-hidden="true" />
//                 )}
//               </button>
//               <div className={`${isOpen ? '' : 'hidden'} absolute z-50 bg-gray-800 mt-1 rounded-md shadow-lg`}>
//                 <a href="/services/web-development">
//                   <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Web Development</a>
//                 </a>
//                 <a href="/services/mobile-development">
//                   <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Mobile Development</a>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from 'react';

// const NavbarButton = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => setShowDropdown(prev => !prev);

//   return (
//     <div className="relative">
//       <button
//         className="px-3 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring"
//         onMouseEnter={toggleDropdown}
//         onMouseLeave={toggleDropdown}
//         onFocus={toggleDropdown}
//         onBlur={toggleDropdown}
//       >
//         Menu
//       </button>

//       {showDropdown && (
//         <div className="absolute z-10 top-full left-0 w-48 py-1 mt-2 bg-white rounded shadow-lg">
//           <a
//             href="#"
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
//           >
//             Link 1
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
//           >
//             Link 2
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
//           >
//             Link 3
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavbarButton;



// import React, { useState } from "react";
import {  HiX } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const dropdownClass = isOpen ? "block" : "hidden";

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>

                <div className="relative">
                  <button onClick={toggleNavbar} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    <span>Dropdown</span>
                    <BsChevronDown className="ml-1 inline-block" />
                  </button>
                  <div className={`${dropdownClass} absolute z-50 bg-gray-800 text-white right-0 mt-2 py-2 w-48 rounded-md shadow-lg`}>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
                      Link 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
                      Link 2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
                      Link 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${dropdownClass} md:hidden bg-gray-800 text-white`}>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Home
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Link 1
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Link 2
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Link 3
        </a>
      </div>
    </nav>
  );
};

export default Navbar;





