import styles from './pixel.module.scss'

const Pixel = ({colorFrom}) => {

  return (
    <div className={styles.component} style={{background: colorFrom}}/>
  )
}

export default Pixel