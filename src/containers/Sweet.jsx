import Title from '../components/title/title'
import Question from '../components/question/question'
import Shuffle from '../components/shuffle/suffle'
import {useEffect, useState} from 'react'
import jsonData from '../assets/data/data.json'

const Sweet = () => {
  const [data, setData] = useState()

  useEffect(async ()=>{
    setData(jsonData)
  },[])

  return (
    <div>
      <Title content="un peu de douceur" color={"#63CBCF"}/>
      <Question content="qu’est-ce qui te fait du bien ?"/>
      <Shuffle data={data}/>
    </div>
  )
}

export default Sweet