import '../Router.scss'
import {useEffect, useRef, useState} from 'react'
import Title from '../components/title/title'
import Answer from '../components/answer/answer'
import Question from '../components/question/question'
import ToggleMood from '../components/toggle-mood/toggle-mood'
import Echelle from '../components/echelle/echelle'
import jsonData from '../assets/data/data.json'
import Pixel from "../components/pixel/pixel";

const Mood = () => {
  const canvas = useRef(null)
  const [isDay, setIsDay] = useState(true)
  const squareWidth = 90
  let ctx

  const initCanvas = () => {
    ctx = canvas.current.getContext('2d')
    canvas.current.width = window.innerWidth / 2
    canvas.current.height = window.innerHeight - 120
  }

  const getPixelColor = (colorFrom) => {
    let color
    switch (colorFrom) {
      case 1:
        color = "#D95D71"
        break;
      case 2:
        color = "#F09065"
        break;
      case 3:
        color = "#EFCE67"
        break;
      case 4:
        color = "#63CBCF"
        break;
      case 5:
        color = "#9567EF"
        break;
      default:
        color = ""
    }

    return color
  }

  const drawRect = (x, y, w, h, colorFrom) => {

    ctx.fillStyle = getPixelColor(colorFrom)
    ctx.fillRect(x, y, w, h)
    ctx.fill()
  }

  const createGrid = (data) => {
    let row = 0
    let column = 0
    for (let i = 0; i < data.length; i++) {
      let x = squareWidth * column
      // end of the canvas, back to the start at the next line
      if (x + squareWidth >= canvas.current.width) {
        column = 0
        x = 0
        row++
      }
      let y = squareWidth * row
      const pickData = isDay ? data[i].day : data[i].month
      drawRect(x, y, squareWidth, squareWidth, pickData)
      column++
    }
  }

  useEffect(async ()=>{
    initCanvas()
    createGrid(jsonData)
  },[isDay])

  const onChangeRadio = (e) => {
    if (e.target.value === "Day") {
      setIsDay(true)
    } else {
      setIsDay(false)
    }
  }

  return (
    <>
      <Title content="Humeur des BDDI" color={"#D95D71"}/>
      <Answer>
        Bonne nouvelle, les BDDI avaient plutôt le moral le jour où ils ont répondu au formulaire !
        On notera toutefois un bilan plus mitigé quand la question porte sur l’intégralité du mois de novembre.
      </Answer>
      <div className="wrapper bigMargin wrapperMobile">
        <div>
          <Question content="Comment te sens-tu ?"/>
          <ToggleMood value={isDay} onChange={onChangeRadio}/>
        </div>
        <div>
          <Echelle/>
        </div>
      </div>
      <div className="center">
        {/*<canvas ref={canvas}/>*/}
        {
          jsonData.map((index, item) => (<Pixel colorFrom={getPixelColor(isDay ? jsonData[item].day : jsonData[item].month)}/>))
        }
      </div>
      <p>1 carré = 1 réponse d’un·e étudiant·e</p>
    </>
  )
}

export default Mood
