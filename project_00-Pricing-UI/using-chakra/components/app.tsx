'use client'
import { Features } from './features';
// import './App.css'
import { Header } from './header'
import { Pricing } from "./pricing";

export default function Home() {
  return (
    <div className='App'>
      <Header />
      <Pricing />  
      <Features />
    </div>
  )
}