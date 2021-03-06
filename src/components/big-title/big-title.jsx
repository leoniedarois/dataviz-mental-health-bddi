import Star from '../../assets/img/star.svg'
import styles from './big-title.module.scss'

const BigTitle = () => {
  return (
    <h1 className={styles.component}>
      Santé&nbsp;
      <img className={styles.star} src={Star} alt="purple star icon"/>
      mentale <br/>
      <span>chez les <span className={styles.uppercase}>BDDI</span> en 2022</span>
    </h1>
  )
}

export default BigTitle