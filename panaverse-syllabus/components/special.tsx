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
          fontWeight={700}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          textAlign={"center"}
          lineHeight={"110%"}
        >
          <Text as={"span"} fontSize={{ base: "xl", sm: "3xl", md: "4xl" }}>
            Specialized Tracks
          </Text>
        </Heading>

        <SimpleGrid gridTemplateColumns={"repeat(2, 1fr)"} spacing={"3"}>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={"lg"}
            h={"11rem"}
            borderRadius={"xl"}
            mx={"auto"}
            flexDirection={"row"}
          >
            <Image
              src={"/web3.jpeg"}
              alt={"qwe"}
              w={"11rem"}
              borderRadius={"xl"}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={"5px"}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
                Web 3.0 (Blockchain) and Metaverse Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0
              </Text>
              <Button
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"#CCCCCC"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "#CCCCCC",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={"lg"}
            h={"11rem"}
            borderRadius={"xl"}
            mx={"auto"}
            flexDirection={"row"}
          >
            <Image
              src={"/web3.jpeg"}
              alt={"qwe"}
              w={"11rem"}
              borderRadius={"xl"}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={"5px"}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Artificial Intelligence (AI) and Deep Learning Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0
              </Text>
              <Button
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"#CCCCCC"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "#CCCCCC",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={"lg"}
            h={"11rem"}
            borderRadius={"xl"}
            mx={"auto"}
            flexDirection={"row"}
          >
            <Image
              src={"/web3.jpeg"}
              alt={"qwe"}
              w={"11rem"}
              borderRadius={"xl"}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={"5px"}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Cloud-Native Computing Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0
              </Text>
              <Button
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"#CCCCCC"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "#CCCCCC",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={"lg"}
            h={"11rem"}
            borderRadius={"xl"}
            mx={"auto"}
            flexDirection={"row"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
          >
            <Image
              src={"/web3.jpeg"}
              alt={"qwe"}
              w={"11rem"}
              borderRadius={"xl"}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={"5px"}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Ambient Computing and IoT Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0
              </Text>
              <Button
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"#CCCCCC"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "#CCCCCC",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Flex>
          <Flex
            // border={"px"}
            width={"lg"}
            h={"11rem"}
            borderRadius={"xl"}
            mx={"auto"}
            flexDirection={"row"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
          >
            <Image
              src={"/web3.jpeg"}
              alt={"qwe"}
              w={"11rem"}
              borderRadius={"xl"}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={"5px"}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Genomics and Bioinformatics Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0
              </Text>
              <Button
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"#CCCCCC"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "#CCCCCC",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Flex>
          <Flex
            // border={"1px"}
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.5)'} 
            width={"lg"}
            h={"11rem"}
            borderRadius={"xl"}
            mx={"auto"}
            flexDirection={"row"}
          >
            <Image
              src={"/web3.jpeg"}
              alt={"qwe"}
              w={"11rem"}
              borderRadius={"xl"}
            ></Image>
            <Stack flexDirection={"column"} mx={"6px"} mt={"5px"}>
              <Heading fontWeight={"500"} fontSize={"2xl"}>
              Network Programmability and Automation Specialization
              </Heading>
              <Text fontWeight={"100"} p={"-2px"}>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0
              </Text>
              <Button
                as={"a"}
                fontSize={"lg"}
                width={"7rem"}
                fontWeight={600}
                color={"#CCCCCC"}
                href={"https://www.piaic.org/"}
                bg={"#B4162D"}
                _hover={{
                  color: "#B4162D",
                  bg: "#CCCCCC",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Stack>
    </>
  );
}
