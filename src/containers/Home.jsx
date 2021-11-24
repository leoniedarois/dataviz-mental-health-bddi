import '../Router.scss'
import Popup from '../components/popup/popup'
import BigTitle from '../components/big-title/big-title'
import Menu from '../components/menu/menu'

const theme = [
  {image: '', text: ''},
  {image: '', text: ''},
  {image: '', text: ''},
  {image: '', text: ''},
  {image: '', text: ''}
]

const Home = () => {
  return (
    <>
      <BigTitle/>
      <Menu/>
      <Popup show={false} questionResult={true} content="La majorité des BDDI a déjà consulté ou aimerait consulter un psychologue."/>
    </>
  )
}

export default Home
