import styles from './echelle.module.scss'
import EchelleItem from "../echelle-item/echelle-item";

const Echelle = () => {
  return (
    <div className={styles.component}>
      <EchelleItem number={1} color={"#D95D71"}/>
      <EchelleItem number={2} color={"#F09065"}/>
      <EchelleItem number={3} color={"#EFCE67"}/>
      <EchelleItem number={4} color={"#63CBCF"}/>
      <EchelleItem number={5} color={"#9567EF"}/>
      <span className={styles.component__right}>Très bien</span>
      <span className={styles.component__left}>Très mal</span>
    </div>
  )
}

export default Echelle