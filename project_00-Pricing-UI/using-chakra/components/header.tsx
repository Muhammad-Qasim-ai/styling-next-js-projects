'use client'

import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export function Header(){
    return (
        <Box pb='112px' as='section'>

        <Box
        // as='section'> 
        color={'#F7FAFC'} 
        bg='#6B46C1'
        pt={'90px'}
        pb={'198px'}
        px='32px'
        textAlign={'center'}
        >
            <Heading fontWeight='800' fontSize={'48px'} color='#F7FAFC'>Simple pricing for your business.
            </Heading>
            <Text fontWeight={'500'} fontSize='24px' color={'#F7FAFC'} pt='16px'>
                Plans that are carefully crafted to suit your business.

            </Text>
        </Box>
        </Box>
    )
    
}