import { Box, Button, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaChrome, FaGithub, FaTwitter } from 'react-icons/fa'
import { Brand } from './components/brand'
import PageHeader from './components/page-header'
import GroupTitle from './components/group-title'
import { Filters } from './components/filters'
import { Repo } from './components/repo'

export default function Feed()  {
  return (
    <Box maxWidth='1200px' mx='auto'>
        <PageHeader />
        <Flex alignItems='center' justifyContent='space-between'>
            <GroupTitle />
            <Filters />
        </Flex>
        <Box>
            <Repo />
        </Box>
    </Box>
  )
}
