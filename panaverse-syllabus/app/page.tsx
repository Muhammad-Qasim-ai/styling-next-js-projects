'use client'

import { Box, ChakraProvider } from "@chakra-ui/react"
import  Navbar  from "../components/navbar";



export default function Home() {
    return (
      <ChakraProvider>
          <Navbar />
      </ChakraProvider>
    )
}
