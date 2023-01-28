'use client'

import { useRouter } from 'next/navigation'
import { Box, Button, ChakraProvider, HStack, Image, StackProps } from "@chakra-ui/react"
import Link from "next/link";
import React,{ ElementType } from 'react';

interface FeatureProps extends StackProps{
    href: any;
}

function Button2(props: FeatureProps) {
    const {href, children, ...rest} = props
    return (
      <Link href={href} passHref>
        <Button {...rest}>
          {children}
        </Button>
      </Link>
    );
  }

export default function Navbar(){
    const router = useRouter();
    return (
        <ChakraProvider>

        <Box 
        boxSizing="border-box"
        width={ '2674px'}
        height='96px'
        bg={'#CCCCCC'}
        boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        borderRadius={'0px 0px 10px 10px'}
        fontSize={'23px'}
        // fontFamily={'Hammersmith One'}
        fontStyle={'normal'}
        fontWeight={'500'}
        lineHeight={'29px'}
        >
            {/* Image Box */}
            <Box 
            position={'absolute'}
            width={'120px'}
            height={'72px'}
            top={'8px'}
            left={'50px'}
            
            ><Image src="https://www.panaverse.co/red-p-logo-text_dao_croped.png"></Image>
            </Box>


            <HStack position={'absolute'}
            width='517px'
            height={'23px'}
            left='202px'
            
            top={'39px'}
            
            
            // bgColor='#CCCCCC'
            >
                <Button2 href='https://google.com'
                _hover={{ bg: '#B4162D', color: '#000000'}}
                bgColor='#CCCCCC'
                color={'#B4162D'}
                fontSize={'23px'}
        // fontFamily={'Hammersmith One'}
        fontStyle={'normal'}
        fontWeight={'500'}
        lineHeight={'29px'}
                >Home</Button2>

                <Button2 href='https://google.com'
                _hover={{ bg: '#B4162D', color: '#000000'}}
                bgColor='#CCCCCC'
                color={'#B4162D'}
                fontSize={'23px'}
        // fontFamily={'Hammersmith One'}
        fontStyle={'normal'}
        fontWeight={'500'}
        lineHeight={'29px'}
                >Quarters</Button2>

                <Button2 href='https://google.com'
                _hover={{ bg: '#B4162D', color: '#000000'}}
                bgColor='#CCCCCC'
                color={'#B4162D'}
                fontSize={'23px'}
        // fontFamily={'Hammersmith One'}
        fontStyle={'normal'}
        fontWeight={'500'}
        lineHeight={'29px'}
                >Community</Button2>

                <Button2 href='https://google.com'
                _hover={{ bg: '#B4162D', color: '#000000'}}
                bgColor='#CCCCCC'
                color={'#B4162D'}
                fontSize={'23px'}
        // fontFamily={'Hammersmith One'}
        fontStyle={'normal'}
        fontWeight={'500'}
        lineHeight={'29px'}
                >About Us</Button2>
            </HStack>
            

            <HStack
            position={'absolute'}
            width={'221px'}
            height={'23px'}
            right={'-5px'}
            top={'39px'}
            
            >
            <Link href='https://github.com'
            
                // _hover={{ bg: '#B4162D', color: '#000000'}}
                font-weight={''}
                color={'#000000'}
                >Github</Link>

                <Button2 href='https://google.com'
                _hover={{ bg: '#CCCCCC', color: '#B4162D'}}
                bgColor='#B4162D'
                color={'#CCCCCC'}
                fontSize={'23px'}
        // fontFamily={'Hammersmith One'}
        fontStyle={'normal'}
        fontWeight={'500'}
        lineHeight={'29px'}
        textAlign={'center'}
                >Register</Button2>
            </HStack>
            
            
        </Box>
                </ChakraProvider>
        )

}