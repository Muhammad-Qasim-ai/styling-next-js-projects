

import './globals.css'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Earn from '../components/earn'
import Core from '../components/core'
import Special from '../components/special'


// const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
    <Navbar />
    <Main />
    <Earn />
    <Core />
    <Special />
    </>
  )
}

