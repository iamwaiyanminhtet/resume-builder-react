import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({iconName}) => {
  return (
    <>
    <FontAwesomeIcon icon={iconName} style={{color : "black"}}/> 
    </>
  )
}

export default Icon