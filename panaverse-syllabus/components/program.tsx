'use client'
import styles from "./body.module.css"
import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Image,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
} from '@chakra-ui/react';

export default function Program() {
    return (
      <>
        {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <Stack 
      id={'main'}
      as={Box}
          // w={'1000px'}
          
          textAlign={'left'}
          spacing={{ base: 2, md: 4 }}
          py={{ base: 10, md: 20 }}
          // bgColor={'black'} 
          >
            
          <Heading
           ml={'20px'}
            fontWeight={600}
            textAlign={'center'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Program Of {''} 
            <Text as={'span'} color={'#B4162D'}>
            Studies
            </Text>
            <br />
          </Heading>
            <Heading as={'span'} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} py={'2rem'} fontWeight={600}
            textAlign={'center'} >Core Courses (Common in All Specializations)</Heading>
          <Flex minH={'23rem'} direction={'row'} justifyContent={'center'} flexWrap={'wrap'}>
          {/* <Flex h={'50vh'} my={'10px'} border={'1px'} m={'0px'}>
          <Stack>
              
          </Stack>

          </Flex> */}
          <Stack 
          cursor={'pointer'}
          as={'a'}
          href={'https://google.com'}
          w={'lg'} 
          h={'md'}  
          borderRadius={'30px'} 
          mx={'12px'} 
          my={'10px'} 
          bgColor={'#D9d9d9'}
          boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
          border={'px'}>
            <Stack my={'3rem'}>

              <Image src="./typescript.svg" 
              boxSize={'10rem'} 
              borderRadius={'30px'}
              mx={'auto'}
              ></Image>
              <Heading 
              fontSize={'5xl'} 
              color={'#121312'}
              p={'2px'} 
              textAlign={'center'}>Quarter 1</Heading>
              <br />
              <Text 
              fontSize={'xl'} 
              color={'#B4162D'} 
              as={'span'} 
              textAlign={'center'} 
              fontWeight={'medium'}>Object-Oriented Programming using TypeScript</Text>
            <Text 
              // as={'a'}
              fontSize={'lg'} 
              color={'#B4162D'} 
              // as={'span'}
              // href={'http://google.com'} 
              paddingX={''}
              textAlign={'center'} 
              fontWeight={'lighter'}>Click to learn more</Text>
            </Stack>
          </Stack>
          <Stack 
          w={'lg'} 
          cursor={'pointer'}
          as={'a'}
          href={'https://google.com'}
          h={'md'}  
          borderRadius={'30px'} 
          mx={'12px'} 
          my={'10px'} 
          bgColor={'#D9d9d9'}
          boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
          border={'px'}>
            <Stack
            my={'2rem'}
            >

              <Image src="./next.svg" 
              h={'9.5rem'} 
              w={'11rem'}
              borderRadius={'30px'}
              mx={'auto'}
              // my={'1rem'}
              ></Image>
              <Heading 
              fontSize={'5xl'} 
              // p={'2px'} 
              // mt={'-3rem'}
              pt={'-6px'}
              color={'#121312'}
              textAlign={'center'}>Quarter 2</Heading>
              <br />
              <Text 
              fontSize={'xl'} 
              color={'#B4162D'} 
              as={'span'} 
              textAlign={'center'} 
              fontWeight={'medium'}> Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13</Text>
              <Text 
              // as={'a'}
              fontSize={'lg'} 
              color={'#B4162D'} 
              // as={'span'}
              // href={'http://google.com'} 
              paddingX={''}
              textAlign={'center'} 
              fontWeight={'lighter'}>Click to learn more</Text>
            </Stack>
            
          </Stack>
          <Stack 
          cursor={'pointer'}
          as={'a'}
          href={'https://google.com'}
          w={'lg'} 
          h={'md'}  
          borderRadius={'30px'} 
          mx={'12px'} 
          my={'10px'} 
          bgColor={'#D9d9d9'}
          boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
          border={'px'}>
            <Stack my={'3rem'}>

              <Image src="./api.svg" 
              boxSize={'10rem'} 
              borderRadius={'30px'}
              mx={'auto'}
              ></Image>
              <Heading 
              fontSize={'5xl'} 
              color={'#121312'}
              p={'2px'} 
              textAlign={'center'}>Quarter 3</Heading>
              <Text 
              fontSize={'xl'} 
              color={'#B4162D'} 
              as={'span'} 
              textAlign={'center'} 
              fontWeight={'medium'}>Dollar Making Bootcamp-Full-Stack Template and API Product Development</Text>
              <Text 
              // as={'a'}
              fontSize={'lg'} 
              color={'#B4162D'} 
              // as={'span'}
              // href={'http://google.com'} 
              paddingX={''}
              textAlign={'center'} 
              fontWeight={'lighter'}>Click to learn more</Text>
            </Stack>

          </Stack>
          
        </Flex>
          
      </Stack>
      </>
    )
}
