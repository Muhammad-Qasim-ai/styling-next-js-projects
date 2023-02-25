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

export default function Body() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <Flex maxW={'full'} borderBottom={'1px'} direction={{ base: 'column',md: 'column',lg:"row"}} mr={'0'} 
        >
        <Stack
          as={Box}
          ml={'20px'}
          // w={'1000px'}
          
          textAlign={'left'}
          spacing={{ base: 2, md: 4 }}
          py={{ base: 20, md: 40 }}
          // bgColor={'black'} 
          
         >
            
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Launch Your Dev Career<br />
            <Text as={'span'} color={'#B4162D'}>
            With Web 3 and Metaverse
            </Text>
          </Heading>
          <Text as={'span'} color={'gray.500'} mr={'250px'}>
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
Getting Ready for the Next Generation of the Internet
Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies

          </Text>
          
          <Stack
            direction={'row'}
            spacing={4}
            align={'left'}
            alignSelf={'left'}
            // position={'relative'}
            ml={'2px'}
            // ml={'5px'}
            >
            <Button
              color={'#B4162D'}
              bg={'#CCCCCC'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#CCCCCC',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            
        </Stack>
          </Stack>
                
                <Image
                
                  className="styles.image"
                  objectFit={'cover'}
                  src={"/program.png"}
                  // h={'full'}
                  boxSize={{ base: 'md',md: 'xl',lg:"lg"}}
                  h={{md: '46rem' }}
                  m={{ base: 'none',sm:'auto', md: 'auto', lg: '98px 50px 20px 40px' }}
                  // mr={'50px'}
                />
              
      </Flex>


    </>
  );
}