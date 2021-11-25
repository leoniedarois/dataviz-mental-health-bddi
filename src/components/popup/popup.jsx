import styles from './popup.module.scss'
import '../../Router.scss'
import WrongIcon from '../../assets/img/wrong.svg'
import RightIcon from '../../assets/img/right.svg'
import CloseIcon from '../../assets/img/x.svg'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Popup = ({content, questionResult, show, route}) => {
  const [showModal, setShowModal] = useState(show)
  let redirect = useNavigate()

  const submitResult = (e) => {
    if (e.currentTarget.value === questionResult) {
      localStorage.setItem('result', "true");
    } else {
      localStorage.setItem('result', "false");
    }
    redirect(route)
    setShowModal(false)
  }

  return (
    <>
      {
        showModal &&
        <div className={styles.background}>
          <div className={styles.component}>
            <img src={CloseIcon} alt="close icon" onClick={() => setShowModal(false)} className={styles.close}/>
            <h1 className={styles.component__title}>Vrai ou faux</h1>
            <p className={styles.component__content}>{content}</p>
            <div className="wrapper">
              <button value="false" className={styles.component__button} onClick={submitResult}>
                <img src={WrongIcon} alt="wrong icon"/>
              </button>
              <button value="true" className={styles.component__button} onClick={submitResult}>
                <img src={RightIcon} alt="right icon"/>
              </button>
            </div>
          </div>
        </div>

      }
    </>
  )
}

export default Popup