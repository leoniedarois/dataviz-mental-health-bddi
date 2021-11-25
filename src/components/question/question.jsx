import styles from './question.module.scss'

const Question = ({content}) => {
  return (
    <h3 className={styles.component}>{content}</h3>
  )
}

export default Question