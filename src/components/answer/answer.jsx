import styles from './answer.module.scss'

const Answer = ({children}) => {
  const userAnswer = localStorage.getItem('result')
  const answer = userAnswer === "true" ? "Bonne réponse !" : "Pas exactement.."
  return (
    <>
      <span className={styles.component__result}>{answer}</span><br/>
      <p className={styles.component__content}>{children}</p>
      <div className={styles.component__separator}/>
    </>
  )
}

export default Answer