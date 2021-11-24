import {Link} from 'react-router-dom'
import styles from './menu-item.module.scss'

const MenuItem = ({text, image, route}) => {
  return(
   <li className={styles.component}>
      <Link to={route} className={styles.component__link}>
        <img src={image} alt="background of the div, its colorful" />
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default MenuItem