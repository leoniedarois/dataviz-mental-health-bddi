import styles from './title.module.scss'
import arrow from '../../assets/img/arrow.svg'
import {Link} from 'react-router-dom'

const Title = ({content, color}) => {
  return (
    <h2 className={styles.title}>
      <Link to="/">
        <img src={arrow} alt="arrow" />
        {content}
      </Link>
      <div className={styles.after} style={{background: color}}/>
    </h2>
  )
}

export default Title