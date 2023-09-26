import React, { useState } from 'react'
import {Box, Button, Flex, HStack, Heading, Image, Link, Text, textDecoration} from '@chakra-ui/react'
import { GoIssueOpened, GoRepoForked, GoStarFill } from "react-icons/go";
import { StarIcon } from '@chakra-ui/icons'

export function Repo(props) {
    const { isListView } = props

  return (
    <Flex borderWidth={1} p='15px' bg='white' rounded='5px'>
        <Flex flex={1} flexDir={'column'}>
            {!isListView && (<Flex mb='15px'>
                <Image 
                src='/user.png'
                w='35px'
                h='35px'
                rounded='5px'
                />
                <Box ml='10px' color='gray.600'>
                    <Heading fontSize='16px'>ManmeetSkalra</Heading>
                    <Text fontSize='13px'>View Profile</Text>
                </Box> 
            </Flex>
            )}
                
            
        
        <Box mb='15px'>
            <Box mb='10px'>
            {isListView && (
                <>
                  <Text as="a" href='https://github.com/manmeetskalra' target="_blank" color='purple.700'>
                    manmeetskalra
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
                <Heading fontSize='19px' as='a' href='www.google.com' target='_blank' color='purple.700'>dfjnsjd</Heading>
                <Text fontSize='13px' color={'gray.600'}>Built by &middot; <Link target='_blank' fontWeight={500} href='www.google.com' _hover={{textDecoration:'none'}}>ProjectUnifree</Link> &middot; September 17, 2023</Text>
            </Box>
            <Text fontSize='14px' color={'gray.600'}>No description given.</Text>
        </Box>
        <HStack>
            <Button as='a' leftIcon={<GoStarFill/>} fontSize={'14px'} iconSpacing={'4px'} variant={'link'} _hover={{textDecoration:'none'}} >1234</Button>
            <Button as='a' leftIcon={<GoRepoForked/>} fontSize={'14px'} iconSpacing={'4px'} variant={'link'} _hover={{textDecoration:'none'}} >1234</Button>
            <Button as='a' leftIcon={<GoIssueOpened/>} fontSize={'14px'} iconSpacing={'4px'} variant={'link'} _hover={{textDecoration:'none'}} >1234</Button>

        </HStack>
        </Flex>
        {isListView && (
        <Image
        src='/user.png'
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  )
}
