import { Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Select, Icon } from '@chakra-ui/react'
import React from 'react'
import languages from '../data/languages.json'
import { FaCalendar, FaList, FaTable } from 'react-icons/fa'
import { CalendarIcon } from '@chakra-ui/icons'
export function Filters() {
  return (
    <HStack>
        <Select>
            {languages.map((language) => (
                <option value={language.value}>{language.label}</option>
            ))}
        </Select>

        <Menu>
            <MenuButton as={Button} textAlign='left' leftIcon={<CalendarIcon />} bg='white' borderWidth={1} w='250px' px='15px' fontWeight={400} justifyContent='flex-start' >
            Weekly
            </MenuButton>
            <MenuList>
                <MenuItem>Yearly</MenuItem>
                <MenuItem>Monthly</MenuItem>
                <MenuItem>Weekly</MenuItem>
                <MenuItem>Daily</MenuItem>
            </MenuList>
        </Menu>
        <HStack borderWidth={1} spacing={0} rounded='5px' ml='10px' alignItems='center'>
            <Button leftIcon={<FaTable/>} bg='white' fontWeight={400} roundedRight={0}>Grid</Button>
            <Button leftIcon={<FaList/>} bg='white' fontWeight={400} roundedLeft={0}>List</Button>
        </HStack>
    </HStack>
  )
}
