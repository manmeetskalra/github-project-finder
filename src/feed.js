import { Box, Button, Flex, HStack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaChrome, FaGithub, FaTwitter } from 'react-icons/fa'
import { Brand } from './components/brand'
import PageHeader from './components/page-header'
import GroupTitle from './components/group-title'
import { Filters } from './components/filters'
import { Repo } from './components/repo'
import moment from 'moment'
import { useFetch } from 'use-http'
import { CopyIcon } from '@chakra-ui/icons'

function createFilters({language, startDate, endDate}) {
    const createdFilters = {}
    const lang = language ? `language:${language}` : ''
    const dateQuery = `created:${startDate}..${endDate}`

    createdFilters.q = lang+dateQuery
    createdFilters.sort='stars'
    createdFilters.order='desc'

    return createdFilters
}

export default function Feed()  {
  
  const { loading, error, get } = useFetch('https://api.github.com')

  const [dateJump, setDateJump] = useState('day')
  const [language, setLanguage] = useState()
  const [viewType, setViewType] = useState('grid')

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState(moment().subtract(1,'day').format())

  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    const endDate = moment().subtract(1,'day').format()
    const startDate = moment(endDate).subtract(1,dateJump).format()
    setStartDate(startDate)
    setEndDate(endDate)
    setRepositories([])
  }, [dateJump, language])

  useEffect(() => {
    if(!startDate) {
        return
    }
    const filters = createFilters({language,startDate,endDate})
    const filtersQuery = new URLSearchParams(filters).toString()
    console.log(filters)
    get(`/search/repositories?${filtersQuery}`).then((res) => {
        setRepositories([
            ...repositories,
            {
                startDate,
                endDate,
                items: res.items
            }
        ])
    })
  }, [startDate])

  

  return (
    <Box maxWidth='1200px' mx='auto'>
        <PageHeader />
        <Flex alignItems='center' justifyContent='space-between' mb='20px'>
            <GroupTitle startDate={repositories?.[0]?.startDate} endDate={repositories?.[0]?.endDate}/>
            <Filters 
                viewType = {viewType}
                onViewChange = {setViewType}
                dateJump={dateJump}
                onDateChange={setDateJump}
                language={language}
                onLanguageChange={setLanguage}
            />
        </Flex>
        {repositories.map((repoGroup, counter) => {
            const groupTitle = counter>0 && (
                <GroupTitle 
                        startDate={repoGroup.startDate}
                        endDate={repoGroup.endDate}
                    />
            )
            return(
                <Box>
                    {groupTitle}
                <SimpleGrid columns={viewType==='list'?'1':'3'} spacing={'20px'}>
                    {repoGroup.items.map(repo =>  <Repo isListView={viewType==='list'} repo={repo}/>)}
                </SimpleGrid>
                </Box>
            )
        })}
        
        <Flex justifyContent={'center'} m='20px'>
            <Button isLoading={loading} onClick={()=>{
                setEndDate(startDate)
                setStartDate(moment(startDate).subtract(1,dateJump).format())                
            }} colorScheme={'blue'}>Load Next Group</Button>
        </Flex>
    </Box>
  )
}
