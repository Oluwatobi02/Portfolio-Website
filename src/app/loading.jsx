import { Progress } from '@chakra-ui/react'
import styles from './loading.module.scss'
const loading = () => {
  return (
    <div className={styles.container}>
     <Progress size='xs' isIndeterminate /> 
    </div>
  )
}

export default loading
