"use client";
import styles from "./body.module.css";
import Head from "next/head";
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
} from "@chakra-ui/react";

const mobile = function (){
  return(
    <>
    <Text>Hello world</Text>
    </>
  )
}



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
        as={Box}
        // w={'1000px'}

        textAlign={"left"}
        spacing={{ base: 2, md: 4 }}
        py={{ base: 10, md: 20 }}
        // bgColor={'black'}
      >
        <Heading
          ml={"20px"}
          fontWeight={500}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          textAlign={"center"}
          lineHeight={"110%"}
        >
          <Text as={"span"} fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}>
            Specialized Tracks
          </Text>
        </Heading>

        <SimpleGrid gridTemplateColumns={{base:"repeat(6, 1fr)", sm:"repeat(6, 1fr)", lg: "repeat(2, 1fr)"}} spacing={"5"} overflowY={'initial'} overflowX={{base:'scroll', sm:'scroll', lg:'initial'}} py={'1rem'} >
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={{base:"2xs", sm:'xs', lg:'lg'}}
            h={{base:"27rem", sm:'26rem', lg:'11rem'}}
            
            borderRadius={"xl"}
            mx={{base:"2rem", sm:'2rem', lg:'auto'}}
            flexDirection={{base:"column", sm:'column', lg:'row'}}
          >
            <Image
              src={"/web3.jpeg"}
              alt={"qwe"}
              w={{base:"11rem", sm:'11rem', lg:'11rem'}}
              
              mx={{base:'auto', sm:'auto', lg:'none'}}
              borderRadius={"xl"}
              borderRightRadius={{base:'xl', sm:'xl', lg:'0px'}}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={{base: '5px', sm:'2rem',lg:"5px"}} textAlign={{base:"center", sm:'center', lg:'initial'}}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
                Web 3.0 (Blockchain) and Metaverse Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0
              </Text>
              <Stack>

              <Button
              mx={{base:'auto', sm:'auto', lg:'0px'}}
              mt={{base:'2px', sm:'1rem', lg:'0px'}}
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"white"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "white",
                }}
              >
                Apply
              </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={{base:"2xs", sm:'xs', lg:'lg'}}
            h={{base:"27rem", sm:'26rem', lg:'11rem'}}
            
            borderRadius={"xl"}
            mx={{base:"2rem", sm:'2rem', lg:'auto'}}
            flexDirection={{base:"column", sm:'column', lg:'row'}}
          >
            <Image
              src={"/ai2.jpg"}
              alt={"qwe"}
              w={{base:"11rem", sm:'11rem', lg:'11rem'}}
              
              mx={{base:'auto', sm:'auto', lg:'none'}}
              borderRadius={"xl"}
              borderRightRadius={{base:'xl', sm:'xl', lg:'0px'}}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={{base: '5px', sm:'2rem',lg:"5px"}} textAlign={{base:"center", sm:'center', lg:'initial'}}>
              <Heading fontWeight={"500"} fontSize={"xl"}>
              Artificial Intelligence (AI) and Deep Learning Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
              The AI and Deep Learning specialization focuses on building and deploying intelligent APIs
              </Text>
              <Stack>

              <Button
              mx={{base:'auto', sm:'auto', lg:'0px'}}
              mt={{base:'2px', sm:'2px', lg:'0px'}}
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"white"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "white",
                }}
              >
                Apply
              </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={{base:"2xs", sm:'xs', lg:'lg'}}
            h={{base:"27rem", sm:'26rem', lg:'11rem'}}
            
            borderRadius={"xl"}
            mx={{base:"2rem", sm:'2rem', lg:'auto'}}
            flexDirection={{base:"column", sm:'column', lg:'row'}}
          >
            <Image
              src={"/cc2.png"}
              alt={"qwe"}
              w={{base:"11rem", sm:'11rem', lg:'11rem'}}
              
              mx={{base:'auto', sm:'auto', lg:'none'}}
              borderRadius={"xl"}
              borderRightRadius={{base:'xl', sm:'xl', lg:'0px'}}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={{base: '5px', sm:'2rem',lg:"5px"}} textAlign={{base:"center", sm:'center', lg:'initial'}}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Cloud-Native Computing Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
              The Cloud-Native Computing Specialization focuses on Containers, Kubernetes.
              </Text>
              <Stack>

              <Button
              mx={{base:'auto', sm:'auto', lg:'0px'}}
              mt={{base:'2px', sm:'1rem', lg:'0px'}}
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"white"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "white",
                }}
              >
                Apply
              </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={{base:"2xs", sm:'xs', lg:'lg'}}
            h={{base:"27rem", sm:'26rem', lg:'11rem'}}
            
            borderRadius={"xl"}
            mx={{base:"2rem", sm:'2rem', lg:'auto'}}
            flexDirection={{base:"column", sm:'column', lg:'row'}}
          >
            <Image
              src={"/iot.jpg"}
              alt={"qwe"}
              w={{base:"11rem", sm:'11rem', lg:'11rem'}}
              
              mx={{base:'auto', sm:'auto', lg:'none'}}
              borderRadius={"xl"}
              borderRightRadius={{base:'xl', sm:'xl', lg:'0px'}}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={{base: '5px', sm:'2rem',lg:"5px"}} textAlign={{base:"center", sm:'center', lg:'initial'}}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Ambient Computing and IoT Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
              The Ambient Computing and IoT Specialization focuses on building Smart Homes and Offices.
              </Text>
              <Stack>

              <Button
              mx={{base:'auto', sm:'auto', lg:'0px'}}
              mt={{base:'2px', sm:'1rem', lg:'0px'}}
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"white"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "white",
                }}
              >
                Apply
              </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={{base:"2xs", sm:'xs', lg:'lg'}}
            h={{base:"27rem", sm:'26rem', lg:'11rem'}}
            
            borderRadius={"xl"}
            mx={{base:"2rem", sm:'2rem', lg:'auto'}}
            flexDirection={{base:"column", sm:'column', lg:'row'}}
          >
            <Image
              src={"/bs.png"}
              alt={"qwe"}
              w={{base:"11rem", sm:'11rem', lg:'11rem'}}
              
              mx={{base:'auto', sm:'auto', lg:'none'}}
              borderRadius={"xl"}
              borderRightRadius={{base:'xl', sm:'xl', lg:'0px'}}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={{base: '5px', sm:'2rem',lg:"5px"}} textAlign={{base:"center", sm:'center', lg:'initial'}}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Genomics and Bioinformatics Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
              Genomics is the study of the total genetic makeup of individual organisms.
              </Text>
              <Stack>

              <Button
              mx={{base:'auto', sm:'auto', lg:'0px'}}
              mt={{base:'2px', sm:'1rem', lg:'0px'}}
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"white"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "white",
                }}
              >
                Apply
              </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={{base:"2xs", sm:'xs', lg:'lg'}}
            h={{base:"27rem", sm:'26rem', lg:'11rem'}}
            
            borderRadius={"xl"}
            mx={{base:"2rem", sm:'2rem', lg:'auto'}}
            flexDirection={{base:"column", sm:'column', lg:'row'}}
          >
            <Image
              src={"/as.jpeg"}
              alt={"qwe"}
              w={{base:"11rem", sm:'11rem', lg:'11rem'}}
              
              mx={{base:'auto', sm:'auto', lg:'none'}}
              borderRadius={"xl"}
              borderRightRadius={{base:'xl', sm:'xl', lg:'0px'}}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={{base: '5px', sm:'2rem',lg:"5px"}} textAlign={{base:"center", sm:'center', lg:'initial'}}>
              <Heading fontWeight={"500"} fontSize={"xl"}>
              Network Programmability and Automation Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
              Network automation is now crucial due to new protocols and the requirement for enterprises
              </Text>
              <Stack>

              <Button
              mx={{base:'auto', sm:'auto', lg:'0px'}}
              mt={{base:'2px', sm:'1rem', lg:'0px'}}
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"white"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "white",
                }}
              >
                Apply
              </Button>
              </Stack>
            </Stack>
          </Flex>
          
        </SimpleGrid>
      </Stack>
    </>
  );
}
