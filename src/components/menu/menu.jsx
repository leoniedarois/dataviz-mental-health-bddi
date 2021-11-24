import styles from './menu.module.scss'
import MenuItem from '../menu-item/menu-item'
const Menu = () => {

  const theme = [
    {image: '/src/assets/img/humeur.svg', text: 'humeur', route: '/mood'},
    {image: '/src/assets/img/hygiene.svg', text: 'hygiène de vie', route: '/hygiene'},
    {image: '/src/assets/img/confier.svg', text: 'se confier', route: '/confess'},
    {image: '/src/assets/img/psy.svg', text: 'psy', route: ''},
    {image: '/src/assets/img/douceur.svg', text: 'un peu de douceur', route: ''}
  ]



  return (

  <ul className={styles.component}>
      {theme.map((item, index) => (<MenuItem key={index}
                  text={item.text} image={item.image}
                   route={item.route}/>))}
    </ul>
  )
}

export default Menu