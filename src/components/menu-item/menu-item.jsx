import {Link} from 'react-router-dom'
import styles from './menu-item.module.scss'
import Popup from '../popup/popup'
import {useState} from 'react'

const MenuItem = ({text, image, route, result, question, keyWord}) => {
  const [showPopup, setShowPopup] = useState(false)

  const askQuestion = () => {
    setShowPopup(true)
  }

  return (
    <>
      {keyWord !== "sweet" ?
        <>
          <li className={styles.component} onClick={askQuestion}>
              <div className={styles.component__link}>
                <img src={image} alt="background of the div, its colorful"/>
              <span>{text}</span>
              </div>
          </li>
          {
            showPopup && <Popup show={true} questionResult={result} content={question} route={route}/>
          }
        </> :
        <li className={styles.component} onClick={askQuestion}>
          <Link to={route} className={styles.component__link}>
            <img src={image} alt="background of the div, its colorful"/>
            <span>{text}</span>
          </Link>
        </li>
      }
    </>

  )
}

export default MenuItem