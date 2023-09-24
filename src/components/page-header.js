import React from 'react'
import {Flex, HStack, Button} from '@chakra-ui/react'
import { FaChrome, FaGithub, FaTwitter } from 'react-icons/fa'
import { Brand } from './brand'

export default function PageHeader() {
  return (
    <Flex justifyContent='space-between' alignItems='center' pt='10px'>
        <Brand />
        <HStack>
            <Button leftIcon={<FaGithub />}>View Source</Button>
            <Button leftIcon={<FaChrome />} colorScheme='red'>Use Extension</Button>
            <Button leftIcon={<FaTwitter />} colorScheme='purple'>Tweet</Button>
        </HStack>
    </Flex>
  )
}
