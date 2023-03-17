'use client'

import './globals.css'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Social from '../components/social'
import About from '../components/about'
import Exp from '../components/exp'

// const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
    <Navbar />
    <Main />
    <About />
    <Exp />
    <Social />
    </>
  )
}

