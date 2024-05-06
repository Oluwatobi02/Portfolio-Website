import ProjectCard from '@/components/Cards/projectCard'
import styles from './projects.module.scss'
import ProjectData from '../../_data/ProjectsData/data'

const Projects = () => {
  console.log(ProjectData)
  
  return (
    <div>
      This is the projects page
      <div className={styles.projectContainer}>
        {ProjectData.map((project,index) => (
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </div>
  )
}

export default Projects
