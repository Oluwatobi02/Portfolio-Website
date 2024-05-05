"use client"
import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss'
import { Tabs, TabList, Tab, Avatar, Wrap, WrapItem, Flex, Box, Badge, Text } from '@chakra-ui/react'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { MoonIcon } from '@chakra-ui/icons';



const Navbar = () => {
  const profileImg = "https://media.licdn.com/dms/image/D4E03AQEIkCw_IskfgQ/profile-displayphoto-shrink_800_800/0/1710215729282?e=1720656000&v=beta&t=YEPdy6BQqmd1vnzudL3PwzbpJ-CCqgyuF7qGozFJ5lM"
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const pathName = usePathname()
  console.log(pathName)

  useEffect(() => {
    switch (pathName) {
      case "/":
        setActiveTabIndex(0)
        break;
      case "/about":
        setActiveTabIndex(1)
        break;
      case "/contact":
        setActiveTabIndex(2)
        break;
      case "/projects":
        setActiveTabIndex(3)
        break;
      
    }
  },[])
  
  const handleTabChange = (index) => {
    setActiveTabIndex(index); // Update active tab index
  };

  return (
    <div className={styles.container}>
    <Tabs index={activeTabIndex} onChange={handleTabChange} className={styles.navContainer} variant='soft-rounded' colorScheme='blue' align="center">
    <TabList className={styles.listContainer}>
      <Tab><Link href="/">Home</Link></Tab>
      <Tab><Link href="/about">About</Link></Tab>
      <Tab><Link href="/contact">Contact</Link></Tab>
      <Tab><Link href="/projects">Projects</Link></Tab>
    </TabList>
    </Tabs>
    <Flex className={styles.profile}>
    <Avatar name='Oluwatobi Olajide' src={profileImg} />
  <Box ml='3'>
    <Text fontWeight='bold'>
      Oluwatobi Olajide
      <Badge ml='1' colorScheme='green'>
        Freshman
      </Badge>
    </Text>
    <Text fontSize='sm'>Full Stack Engineer</Text>
  </Box>
</Flex>
    <MoonIcon className={styles.moonIcon} boxSize={10}/>
    </div>
  )
}
export default Navbar

