import styles from './about.module.scss'
import questionIcon from '/src/assets/img/about-icon.svg'
import rdv from '/src/assets/img/about.png'
import wave from '/src/assets/img/vague.svg'
import blobsBackground from '/src/assets/img/blobs-about.svg'
import closeIcon from '/src/assets/img/close-icon.svg'
import {useState} from 'react'
import '../../Router.scss'

const About = () => {
  const [showSection, setShowSection] = useState(false)
  const icon = showSection ? closeIcon : questionIcon

  const showAbout = () => {
    setShowSection(!showSection)
  }

  return (
    <>
      <img className={styles.question} onClick={showAbout} src={icon} alt="question icon"/>
      {
        showSection &&
        <div className={styles.component}>
          <img className={styles.component__background} src={blobsBackground} alt="super blobs"/>
          <div className="container">
            <h1 className={styles.component__title}>à propos</h1>
            <img src={wave} alt="wave"/>
            <p className={styles.component__about}>Ce site a été réalisé dans le cadre d’un workshop Datavisualisation par <b>Léonie Grimoin</b> et <b>Léa Kovarski</b>, à
              partir des données récoltées auprès de 43 élèves de la promotion BDDI 2022 à Gobelins.</p>
            <p className={styles.component__contact}><b>Contact du service médico-social de Gobelins</b><br/>
              Michelle GUITTOT-MEROT<br/>
              mguittot@gobelins.fr</p>
            <img className={styles.component__img} src={rdv} alt="rdv"/>
          </div>
        </div>
      }
    </>
  )
}

export default About