import React from 'react'
import {Flex, Image, Box, Heading, Text} from '@chakra-ui/react'

export function Brand() {
  return (
    <Flex alignItems='center'>
        <Image src='/logo.svg' />
        <Box ml='10px'>
            <Heading fontSize='24px'>Github Project Finder</Heading>
            <Text color='gray.600'>Findind most starred projects</Text>
        </Box>
    </Flex>
  )
}
