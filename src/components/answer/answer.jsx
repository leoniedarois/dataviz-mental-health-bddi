import styles from "./answer.module.scss"

const Answer = ({children, result}) => {
  const answer = result ? "Bonne réponse !" : "Pas exactement.."
  return (
    <>
      <span className={styles.component__result}>{answer}</span><br/>
      <p className={styles.component__content}>{children}</p>
      <div className={styles.component__separator}/>
    </>
  )
}

export default Answer