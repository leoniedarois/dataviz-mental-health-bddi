import styles from './echelle-item.module.scss'

const EchelleItem = ({number, color}) => {
  return (
    <div className={styles.component}>
      <span className={styles.component__number}>{number}</span>
      <div className={styles.component__cube} style={{background: color}}/>
    </div>
  )
}

export default EchelleItem