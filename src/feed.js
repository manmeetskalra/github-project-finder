import { Box, Button, Flex, HStack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaChrome, FaGithub, FaTwitter } from 'react-icons/fa'
import { Brand } from './components/brand'
import PageHeader from './components/page-header'
import GroupTitle from './components/group-title'
import { Filters } from './components/filters'
import { Repo } from './components/repo'

export default function Feed()  {

  const [viewType, setViewType] = useState('Grid')
  return (
    <Box maxWidth='1200px' mx='auto'>
        <PageHeader />
        <Flex alignItems='center' justifyContent='space-between' mb='20px'>
            <GroupTitle />
            <Filters onViewChange = {(viewType)=>(
                setViewType(viewType)
            )}/>
        </Flex>
        <SimpleGrid columns={viewType==='List'?'1':'3'} spacing={'20px'}>
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
            <Repo isListView={viewType==='List'} />
        </SimpleGrid>
        <Flex justifyContent={'center'} m='20px'>
            <Button colorScheme={'blue'}>Load Next Group</Button>
        </Flex>
    </Box>
  )
}
