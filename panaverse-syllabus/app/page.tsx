'use client'

import { Box, ChakraProvider } from "@chakra-ui/react"
import  WithSubnavigation  from "../components/navbar";
import  Body  from "../components/body";
import  LargeWithNewsletter  from "../components/footer";



export default function Home() {
    return (
      <ChakraProvider>
          <WithSubnavigation />
          <Body  />
          <LargeWithNewsletter />
      </ChakraProvider>
    )
}
