import { Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Select, Icon } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import languages from '../data/languages.json'
import { FaCalendar, FaList, FaTable } from 'react-icons/fa'
import { CalendarIcon } from '@chakra-ui/icons'
export function Filters(props) {

    const {
        viewType,
        onViewChange,
        dateJump,
        onDateChange,
        language,
        onLanguageChange,
    } = props

    useEffect(() => {
        onViewChange(viewType)
    })
  return (
    <HStack>
        <Select value={language} onChange={(e) => onLanguageChange(e.target.value)}>
            {languages.map((language) => (
                <option value={language.value}>{language.label}</option>
            ))}
        </Select>

        <Menu>
            <MenuButton as={Button} textAlign='left' leftIcon={<CalendarIcon />} bg='white' borderWidth={1} w='250px' px='15px' fontWeight={400} justifyContent='flex-start' >
            Weekly
            </MenuButton>
            <MenuList>
                <MenuItem onChange={() => onDateChange('day')}>Daily</MenuItem>
                <MenuItem onChange={() => onDateChange('week')}>Weekly</MenuItem>
                <MenuItem onChange={() => onDateChange('month')}>Monthly</MenuItem>
                <MenuItem onChange={() => onDateChange('year')}>Yearly</MenuItem>
            </MenuList>
        </Menu>
        <HStack borderWidth={1} spacing={0} rounded='5px' ml='10px' alignItems='center'>
            <Button leftIcon={<FaTable/>} bg={viewType==='grid' ? 'gray.200' : 'white'} fontWeight={400} roundedRight={0} onClick={()=>onViewChange('Grid')}>Grid</Button>
            <Button leftIcon={<FaList/>} bg={viewType==='list' ? 'gray.200' : 'white'} fontWeight={400} roundedLeft={0} onClick={()=>onViewChange('List')}>List</Button>
        </HStack>
    </HStack>
  )
}
