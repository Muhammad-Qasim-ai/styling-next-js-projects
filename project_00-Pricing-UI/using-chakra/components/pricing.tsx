import CheckIcon from "@/icons/icons";
import { Box, Flex, Text, Heading, Button, StackProps, HStack, Icon, Stack } from "@chakra-ui/react";
import React from "react";
// import { CheckIcon } from "../icons/icons";



export default function ListItems(props: StackProps){
const {children, ...rest} = props; 
    return(
        <HStack as='li' spacing={'20px'} {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px' />
            <Text textAlign={['left', 'left', 'center']}>
            {children}
            </Text>
        </HStack>
    )
}
export function Pricing(){
    return  (
        <Box mx={'6'}>

        <Box maxWidth={'994px'} margin='auto' mt={'-256px'} borderRadius='12px' overflow={'hidden'} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}> 
            <Flex direction={['column', 'column', 'row']}>
                <Box bg='#F0EAFB' p='60px' textAlign={'center'} >
                <Text fontSize={'24px'} fontWeight={'800'}>Premium PRO</Text>
                <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt={'16px'}>$329</Heading>
                <Text color={'#171923'} fontSize='18' fontWeight={'500'} mt='8px'>billed just Once</Text>
                {/* <Box margin='auto'> */}
                <Button colorScheme={'purple'} size={['lg']} w={['160px','220px','282px']} mt='24px'  >Get Started</Button>
                {/* </Box> */}
                </Box >
                <Box p='60px' fontSize='18px' bg='white'>
                    <Text textAlign={'left'}>Access these features when you get this pricing package for your business.</Text>
                    <Stack as='ul' spacing={'20px'} pt='24px'>
                    <ListItems>International calling and messaging API</ListItems>
                    <ListItems>Additional phone numbers</ListItems>
                    <ListItems>Automated messages via Zapier</ListItems>
                    <ListItems>24/7 support and consulting</ListItems>

                    </Stack>
                </Box>
            </Flex>
        </Box>
        </Box>
    )
}