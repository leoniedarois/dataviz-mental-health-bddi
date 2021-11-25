import Title from "../components/title/title"
import Question from "../components/question/question"
import Shuffle from '../components/shuffle/suffle'
import {useEffect, useState} from "react"
import {getData} from "../helper/fetch-data"

const Sweet = () => {
  const [data, setData] = useState()

  useEffect(async ()=>{
    const json = await getData()
    setData(json)
  },[])

  return (
    <div>
      <Title content="un peu de douceur" color={"#63CBCF"}/>
      <Question content="qu’est-ce qui te fais du bien ?"/>
      <Shuffle data={data}/>
    </div>
  )
}

export default Sweet