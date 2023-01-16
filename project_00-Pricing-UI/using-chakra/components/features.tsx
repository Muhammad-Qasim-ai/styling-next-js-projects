import { HStack, Icon, Text, StackProps, Box } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { MoneyBackIcon, HassleFreeIcon,MonthlySubIcon } from "../icons/icons";


interface FeatureProps extends StackProps{
    icon: ElementType;
}
export function Feature(props: FeatureProps ){
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing='24px'>
            <Icon as={icon}boxSize='48px' />
            <Text textAlign='left'fontSize={'18px'} fontWeight='700'>{children}</Text>
        </HStack>
    )
}


export function Features(){
    return(
        <Box maxWidth={'1024px'} m='auto' pt={'60px'} pb='32px'>
        <HStack px={'48px'} spacing='20px'>
            <Feature icon={MoneyBackIcon}>30 days money back Guarantee</Feature>
            <Feature icon={HassleFreeIcon}>No setup fees <br/>100% hassle-free</Feature>
            <Feature icon={MonthlySubIcon}>No monthly subscription <br/> Pay once and for all</Feature>
        </HStack>

        </Box>
    )
}