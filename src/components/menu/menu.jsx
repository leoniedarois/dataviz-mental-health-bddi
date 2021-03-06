import styles from './menu.module.scss'
import MenuItem from '../menu-item/menu-item'
import mood from '../../assets/img/humeur.svg'
import hygiene from '../../assets/img/hygiene.svg'
import confess from '../../assets/img/confier.svg'
import psy from '../../assets/img/psy.svg'
import sweet from '../../assets/img/douceur.svg'

const Menu = () => {

  const theme = [
    {
      keyWord: 'mood',
      image: mood,
      text: 'humeur',
      route: '/mood',
      question: 'Les BDDI se sentent bien.',
      result: 'true'
    },
    {
      keyWord: 'hygiene',
      image: hygiene,
      text: 'hygiène de vie',
      route: '/hygiene',
      question: 'Les BDDI estiment ne pas avoir une bonne hygiène de vie.',
      result: 'false'
    },
    {
      keyWord: 'confess',
      image: confess,
      text: 'se confier',
      route: '/confess',
      question: 'Les BDDI ont plutôt du mal à se confier.',
      result: 'true'
    },
    {
      keyWord: 'psy',
      image: psy,
      text: 'psy',
      route: '/psy',
      question: 'La majorité des BDDI a déjà consulté ou aimerait consulter un·e psychologue.',
      result: 'true'
    },
    {keyWord: 'sweet', image: sweet, text: 'un peu de douceur', route: '/sweet'}
  ]

  return (
    <ul className={styles.component}>
      {theme.map((item, index) => (<MenuItem key={index}
                                             text={item.text} image={item.image} result={item.result}
                                             question={item.question}
                                             route={item.route} keyWord={item.keyWord}/>))}
    </ul>
  )
}

export default Menu