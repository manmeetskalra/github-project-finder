import React, { useState } from 'react'
import {Box, Button, Flex, HStack, Heading, Image, Link, Text, textDecoration} from '@chakra-ui/react'
import { GoIssueOpened, GoRepoForked, GoStarFill } from "react-icons/go";
import { StarIcon } from '@chakra-ui/icons'
import moment from 'moment'

export function Repo(props) {
    const { isListView, repo } = props
    console.log(repo)

  return (
    <Flex borderWidth={1} p='15px' bg='white' rounded='5px'>
        <Flex flex={1} flexDir={'column'}>
            {!isListView && (<Flex mb='15px'>
                <Image 
                src={repo.owner.avatar_url}
                w='35px'
                h='35px'
                rounded='5px'
                />
                <Box ml='10px' color='gray.600'>
                <Link as='a' href={repo.github_url} target='_blank' _hover={{textDecoration:'none'}}>
                    <Heading fontSize='16px'>{repo.owner.login}</Heading>
                    <Text fontSize='13px'>View Profile</Text>
                    </Link>
                </Box> 
            </Flex>
            )}
                
            
        
        <Box mb='15px'>
            <Box mb='10px'>
            {isListView && (
                <>
                  <Text as="a" href={repo.github_url} target="_blank" color='purple.700'>
                    {repo.owner.login}
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
                <Heading fontSize='19px' as='a' href='www.google.com' target='_blank' color='purple.700'>dfjnsjd</Heading>
                <Text fontSize='13px' color={'gray.600'}>Built by &middot; <Link target='_blank' fontWeight={500} href={repo.github_url} _hover={{textDecoration:'none'}}>{repo.owner.login}</Link> &middot; {moment(repo.created_at).format('MMMM D, YYYY')}</Text>
            </Box>
            <Text fontSize='14px' color={'gray.600'}>{repo.description}</Text>
        </Box>
        <HStack>
            {repo.stargazers_count>0 && <Button as='a' href={`${repo.html_url}/stargazers`} target='_blank' leftIcon={<GoStarFill/>} fontSize={'14px'} iconSpacing={'4px'} variant={'link'} _hover={{textDecoration:'none'}} >{repo.stargazers_count}</Button>}
            {repo.forks_count>0 && <Button as='a' href={`${repo.html_url}/forks`} leftIcon={<GoRepoForked/>} fontSize={'14px'} iconSpacing={'4px'} variant={'link'} _hover={{textDecoration:'none'}} >{repo.forks_count}</Button>}
            {repo.open_issues_count>0 && <Button as='a' href={`${repo.html_url}/issues`} leftIcon={<GoIssueOpened/>} fontSize={'14px'} iconSpacing={'4px'} variant={'link'} _hover={{textDecoration:'none'}} >{repo.open_issues_count}</Button>}

        </HStack>
        </Flex>
        {isListView && (
        <Image
        src={repo.owner.avatar_url}
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  )
}
