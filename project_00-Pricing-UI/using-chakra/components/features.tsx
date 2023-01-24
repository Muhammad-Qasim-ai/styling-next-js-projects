import { HStack, Icon, Text, StackProps, Box, Flex, Stack } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { MoneyBackIcon, HassleFreeIcon,MonthlySubIcon } from "../icons/icons";


interface FeatureProps extends StackProps{
    icon: ElementType;
}
export function Feature(props: FeatureProps ){
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing='6'>
            <Icon as={icon}boxSize='12' />
            <Text textAlign={['left', 'left', 'center']}fontSize={'lg'} fontWeight='bold'>{children}</Text>
        </HStack>
    )
}


export function Features(){
    return(
        // <Flex direction={['column', 'column', 'row']}>

        <Box maxWidth={'1024px'} m='auto' pt={'60px'} pb='8'>
        <Stack px={'12'} spacing={{base: '6', lg: '5'}} direction={{base: "column", lg: 'row'}}>
            <Feature icon={MoneyBackIcon}>30 days money back Guarantee</Feature>
            <Feature icon={HassleFreeIcon}>No setup fees 100% <br/> hassle-free</Feature>
            <Feature icon={MonthlySubIcon}>No monthly subscription <br/> Pay once and for all</Feature>
        </Stack>

        </Box>
        // </Flex>
    )
}