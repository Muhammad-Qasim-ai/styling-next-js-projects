'use client'

import { Box, ChakraProvider } from "@chakra-ui/react"
import  WithSubnavigation  from "../components/navbar";
import  Body  from "../components/body";
import  LargeWithNewsletter  from "../components/footer";
import  Program  from "../components/program";
import  Special  from "../components/special";


export default function Home() {
    return (
      <ChakraProvider>
          <WithSubnavigation />
          <Body  />
          <Program />
          <Special />
          <LargeWithNewsletter />
      </ChakraProvider>
    )
}
