import '../Router.scss'
import Title from "../components/title/title";
import Answer from "../components/answer/answer";
import Question from "../components/question/question";
import FlowerHygiene from "../components/svg/flower-hygiene/flower-hygiene";
import BlobsSommeil from "../components/svg/flower-hygiene/blobs-sommeil";
import FlowerSommeil from "../components/svg/flower-hygiene/flower-sommeil";

const Hygiene = () => {
  return (
    <>
      <Title content="Hygiène de vie des BDDI" color={"#EFCE67"}/>
      <Answer result={false}>
        Les BDDI considèrent majoritairement avoir une bonne hygiène de vie… Malgré une tendance générale à sauter
        occasionnellement des repas et dormir 6h par nuit.
      </Answer>
      <Question content="comment est-ce que tu qualifierais ton hygiène de vie ?"/>
      <FlowerHygiene/>
      <Question content="t’arrives-t-il de sauter des repas ?"/>
      <BlobsSommeil/>
      <Question content="combien d’heures dors-tu par nuit en semaine ?"/>
      <FlowerSommeil/>
    </>
  )
}

export default Hygiene
