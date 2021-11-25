import styles from './menu.module.scss'
import MenuItem from '../menu-item/menu-item'

const Menu = () => {

  const theme = [
    {
      keyWord: 'mood',
      image: '/src/assets/img/humeur.svg',
      text: 'humeur',
      route: '/mood',
      question: 'Les BDDI se sentent bien.',
      result: 'true'
    },
    {
      keyWord: 'hygiene',
      image: '/src/assets/img/hygiene.svg',
      text: 'hygiène de vie',
      route: '/hygiene',
      question: 'Les BDDI estiment ne pas avoir une bonne hygiène de vie.',
      result: 'false'
    },
    {
      keyWord: 'confess',
      image: '/src/assets/img/confier.svg',
      text: 'se confier',
      route: '/confess',
      question: 'Les BDDI ont plutôt du mal à se confier.',
      result: 'true'
    },
    {
      keyWord: 'psy',
      image: '/src/assets/img/psy.svg',
      text: 'psy',
      route: '/psy',
      question: 'La majorité des BDDI a déjà consulté ou aimerait consulter un·e psychologue.',
      result: 'true'
    },
    {keyWord: 'sweet', image: '/src/assets/img/douceur.svg', text: 'un peu de douceur', route: '/sweet'}
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