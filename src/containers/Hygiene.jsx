import '../Router.scss'
import Title from '../components/title/title'
import Answer from '../components/answer/answer'
import Question from '../components/question/question'
import FlowerHygiene from '../components/svg/flower-hygiene'
import BlobsMeal from '../components/svg/blobs-meal'
import FlowerSommeil from '../components/svg/flower-sommeil'
import '../Router.scss'
import ScrollTop from '../components/scroll-top/scroll-top'
import {InView} from 'react-intersection-observer'
import {useState} from "react";

const Hygiene = () => {
  const [addClass, setAddClass] = useState(false)

  return (
    <>
      <Title content="Hygiène de vie des BDDI" color={"#EFCE67"}/>
      <Answer>
        Les BDDI considèrent majoritairement avoir une bonne hygiène de vie… Malgré une tendance générale à sauter
        occasionnellement des repas et dormir 6h par nuit.
      </Answer>
      <Question content="comment est-ce que tu qualifierais ton hygiène de vie ?"/>
      <FlowerHygiene/>
      <Question content="t’arrives-t-il de sauter des repas ?"/>
      <BlobsMeal/>
      <Question content="combien d’heures dors-tu par nuit en semaine ?"/>
      <InView as="div" onChange={(inView) => setAddClass(inView)}>
        <FlowerSommeil addAnim={addClass}/>
      </InView>
      <ScrollTop/>
    </>
  )
}

export default Hygiene
