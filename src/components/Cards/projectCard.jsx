import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import styles from './projectCard.module.scss'

const ProjectCard = ({project}) => {
console.log(project.preview_img)
  return ( 
<Card maxW='sm'>
  <CardBody>
    
    <Image
      src={project.preview_img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{project.name}</Heading>
      <Text>
        {project.short_desc}
      </Text>
      <div className={styles.stackContainer}>
      {
      project.tech_stack.map((stack, index)=> (
      <Text key={index} color='blue.600' fontSize='1xl'>
        {stack}
      </Text>))
      }
      </div>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        {project.role}
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        {project.date}
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProjectCard

