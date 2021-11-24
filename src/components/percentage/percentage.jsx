import styles from './percentage.module.scss'

const Percentage = ({percentage, text, color}) => {
  return (
    <div className={styles.component}>
      <span className={styles.component__percentage} style={{color: color}}>{percentage}%</span><br/>
      <span className={styles.component__text}>"{text}"</span>
    </div>
  )
}

export default Percentage