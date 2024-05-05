"use client"
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from './about.module.scss'

const About = () => {
  const profileImg = "https://media.licdn.com/dms/image/D4E03AQEIkCw_IskfgQ/profile-displayphoto-shrink_800_800/0/1710215729282?e=1720656000&v=beta&t=YEPdy6BQqmd1vnzudL3PwzbpJ-CCqgyuF7qGozFJ5lM"

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Box padding='6' boxShadow='md' bg='white'>
        <SkeletonCircle bgImage={profileImg} isLoaded={isLoaded} fadeDuration={1} size='10'></SkeletonCircle>
        <SkeletonText mt='4' noOfLines={6} spacing='8' isLoaded={isLoaded} fadeDuration={1}
       skeletonHeight='2'><Box mt='6' pt='5'>As a college freshman at Morgan State University pursuing a degree in computer science, I'm embarking on an exciting journey filled with exploration and discovery. Beyond the confines of traditional coursework, my curiosity propels me towards the intricate realm of backend technologies, where I immerse myself in the nuances of Flask and MongoDB. Through these endeavors, I aim to cultivate a profound understanding of building resilient and scalable web applications, driven by a relentless pursuit of excellence in software engineering.

       My foray into JWT authentication underscores a deeper commitment to mastering the intricacies of secure user management systems, recognizing the paramount importance of safeguarding sensitive data in today's digital landscape. This endeavor not only reflects my dedication to upholding best practices in cybersecurity but also highlights my propensity for problem-solving and attention to detail.
       
       Moreover, my burgeoning interest in full-stack development and machine learning serves as a testament to my insatiable thirst for knowledge and innovation. As I navigate the vast expanse of technological possibilities, I eagerly embrace the challenges and opportunities that lie ahead, propelled by an unwavering passion for harnessing the transformative power of technology to effect positive change.
       
       In every endeavor, whether it's delving into the intricacies of backend architecture or embarking on exploratory projects in machine learning, I approach each challenge with a sense of curiosity and determination. Through relentless experimentation and hands-on experience, I strive to push the boundaries of what's possible, continually expanding my skill set and honing my craft as a budding technologist.
       
       As I chart my course through academia and beyond, I am committed to embracing every opportunity for growth and development, steadfast in my pursuit of excellence and driven by an unyielding resolve to leave an indelible mark on the world of technology.</Box></SkeletonText>
      </Box>
    </div>
  )
}

export default About
