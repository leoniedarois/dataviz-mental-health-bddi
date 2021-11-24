import styles from "./toggle-mood.module.scss"

const ToggleMood = ({onChange, value}) => {
  return (
    <div onChange={onChange}>
      <label className={styles.component__button}>aujourd'hui
        <input id="day" type="radio" value="Day" name="mood"
               checked={value}/>
          <span className={styles.checkmark}/>
      </label>
      <label className={styles.component__button}>ce mois-ci
        <input id="month" type="radio" value="Month>" name="mood"/>
        <span className={styles.checkmark}/>
      </label>
    </div>
  )
}

export default ToggleMood