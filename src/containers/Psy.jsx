import Title from '../components/title/title'
import Answer from '../components/answer/answer'
import Question from '../components/question/question'
import BlobsPsy from '../components/svg/blobs-psy'
import FlowerPsy from '../components/svg/flower-psy'
import ScrollTop from '../components/scroll-top/scroll-top'

const Psy = () => {
  return (
    <>
      <Title content="les psy et les bddi" color={"#9567EF"}/>
      <Answer>
        La majorité des BDDI a déjà consulté un·e psychologue ou aimerait en consulter.
      </Answer>
      <Question content="as-tu déjà consulté un·e psychologue ?"/>
      <FlowerPsy/>
      <Question content="si oui, estimes-tu que les consultations ont eu un impact positif sur ta santé mentale ?"/>
      <BlobsPsy/>
      <ScrollTop/>
    </>
  )
}

export default Psy