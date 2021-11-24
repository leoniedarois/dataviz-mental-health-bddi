import styles from './popup.module.scss'
import '../../Router.scss'
import WrongIcon from '../../assets/img/wrong.svg'
import RightIcon from '../../assets/img/right.svg'
import {useState} from 'react'

const Popup = ({content, questionResult, show}) => {
  const [hideModal, setHideModal] = useState(show)
  const [answer, setAnswer] = useState()

  const submitResult = (e) => {
    setAnswer(e.currentTarget.value)

    if(answer === questionResult) {
      console.log("you did it")
    } else {
      console.log("oh non")
    }

    setHideModal(false)
  }

  return (
    <>
      {
        hideModal &&
        <div className={styles.component}>
          <h1 className={styles.component__title}>Vrai ou faux</h1>
          <p className={styles.component__content}>{content}</p>
          <div className="wrapper">
            <button value="wrong" className={styles.component__button} onClick={submitResult}>
              <img src={WrongIcon} alt="wrong icon"/>
            </button>
            <button value="right" className={styles.component__button} onClick={submitResult}>
              <img src={RightIcon} alt="right icon"/>
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default Popup