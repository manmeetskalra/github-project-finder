import { Box, Button, Flex, HStack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaChrome, FaGithub, FaTwitter } from 'react-icons/fa'
import { Brand } from './components/brand'
import PageHeader from './components/page-header'
import GroupTitle from './components/group-title'
import { Filters } from './components/filters'
import { Repo } from './components/repo'
import moment from 'moment'

export default function Feed()  {

  const [dateJump, setDateJump] = useState('day')
  const [language, setLanguage] = useState()
  const [viewType, setViewType] = useState('Grid')

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState(moment().subtract(1,'day').format())

  useEffect(()=>{
    const endDate = moment().subtract(1,'day').format()
    const startDate = moment().subtract(1,dateJump).format()
    console.log(startDate,endDate)
  })

  return (
    <Box maxWidth='1200px' mx='auto'>
        <PageHeader />
        <Flex alignItems='center' justifyContent='space-between' mb='20px'>
            <GroupTitle />
            <Filters 
                viewType = {viewType}
                onViewChange = {setViewType}
                dateJump={dateJump}
                onDateChange={setDateJump}
                language={language}
                onLanguageChange={setLanguage}
            />
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
