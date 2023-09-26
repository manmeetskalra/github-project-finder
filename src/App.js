import { Box } from '@chakra-ui/react'
import React from 'react'
import Feed from './feed'

export function App() {
  return (
    <Box width="100vw" minHeight={"100vh"} bg="gray.100" py='30px'>
        <Feed />
    </Box>
  )
}
