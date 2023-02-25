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
  SimpleGrid,
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
      <Stack as={Box}
          // w={'1000px'}
          
          textAlign={'left'}
          spacing={{ base: 2, md: 4 }}
          py={{ base: 10, md: 20 }}
          // bgColor={'black'} 
          >
            
          <Heading
           ml={'20px'}
            fontWeight={700}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            textAlign={'center'}
            lineHeight={'110%'}>
            <Text as={'span'} fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }} >Specialized Tracks</Text>
          </Heading>

          <SimpleGrid gridTemplateColumns={'repeat(2, 1fr)'} >
          <Flex border={'1px'} width={'lg'} h={'10rem'} borderRadius={'xl'} my={'20px'} mx={'auto'} flexDirection={'row'}>

          </Flex>
          <Flex border={'1px'} width={'lg'} h={'10rem'} borderRadius={'xl'} my={'20px'} m={'auto'} flexDirection={'row'}>

          </Flex>
          <Flex border={'1px'} width={'lg'} h={'10rem'} borderRadius={'xl'} m={'auto'} flexDirection={'row'}>

          </Flex>
          <Flex border={'1px'} width={'lg'} h={'10rem'} borderRadius={'xl'} m={'auto'} flexDirection={'row'}>

          </Flex>
          <Flex border={'1px'} width={'lg'} h={'10rem'} borderRadius={'xl'} mt={'20px'} m={'auto'} flexDirection={'row'}>

          </Flex>
          <Flex border={'1px'} width={'lg'} h={'10rem'} borderRadius={'xl'} mt={'20px'} m={'auto'} flexDirection={'row'}>

          </Flex>
            
          </SimpleGrid>
          
          
        
          
      </Stack>
      </>
    )
}
