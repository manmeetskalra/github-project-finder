import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import PageHeader from './page-header'

export default function GroupTitle() {
  return (
    <Text fontSize='24px' fontWeight={700}>
        This week <Text fontSize='15px' fontWeight={500} color='gray.500' ml='5px' as='span'>May 14, 2020 - May 23, 2020</Text>
    </Text>
  )
}
