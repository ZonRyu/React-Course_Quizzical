
import './App.css';
import axios from 'axios';
import React from 'react';
import Game from './Game'
import MainMenu from './MainMenu'
import { nanoid } from 'nanoid';

function App() {
  const [menu, setMenu] = React.useState(true)
  const [dataQuestion, setDataQuestion] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [complete, setComplete] = React.useState(false)
  const [score, setScore] = React.useState(0)
  
  const svgTr = svg('svg-tr', '194', '197', '0 0 194 197', 'M99.4095 81.3947C71.1213 50.8508 33.3179 21.7816 37.1727 -19.6933C41.4394 -65.599 75.854 -105.359 118.419 -123.133C158.797 -139.994 206.035 -130.256 241.822 -105.149C271.947 -84.0141 272.823 -43.8756 282.141 -8.27104C292.17 30.0508 318.521 70.8106 296.501 103.779C273.538 138.159 224.991 143.432 183.931 138.768C148.318 134.723 123.751 107.677 99.4095 81.3947Z', '#FFFAD1')
  const svgBl = svg('svg-bl', '148', '118', '0 0 148 118', 'M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z', '#DEEBF8')
  
  const menuStyle = {
    height: '480px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }

  const gameElem = (
    <>
      {dataQuestion.map(data => <Game key={data.id} {...data} func={checkAnswer} complete={complete} />)}
      <div className="score-button">
          {complete && <h3>You scored {score}/5 correct answers</h3>}
          <button className="button" onClick={() => checkAnswer(complete)}>{complete ? 'Play Again' : 'Check answers'}</button>
      </div>
    </>
  )

  const resetGame = () => {
    setDataQuestion(dataQuestion.map(data => {
      return {
        ...data,
        id: nanoid()
      }
    }))
  }

  React.useEffect(() => {
    localStorage.setItem('score', JSON.stringify(5))
  }, [])

  React.useEffect(() => {
    setScore(JSON.parse(localStorage.getItem('score')))
    localStorage.setItem('score', JSON.stringify(5))
    if(!complete) {
      getTriviaData()
    }
  }, [complete])

  async function getTriviaData() {
    //Set loading boolean to true so that we know to show loading text
    setLoading(true);

    //Make trivia api call using axios
    const resp =(await axios.get("https://opentdb.com/api.php?amount=5&type=multiple")).data.results;
    const data = resp.map(data => {
      return {
        id: nanoid(),
        ...data
      }
    })

    setDataQuestion(data)

    //Set loading boolean to false so that we know to show trivia question
    setLoading(false);
  }
  
  function svg(className, width, height, viewBox, d, fill) {
    return <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d={d} fill={fill}/>
    </svg>
  }

  function toggleGame() {
    setMenu(!menu)
  }

  function checkAnswer(cond) {
    if (!cond){
      setComplete(true)
      console.log(complete)
    }else{
      setComplete(false)
      resetGame()
    }
  }

  return (
    <div className="App">
      {svgTr}
      {svgBl}
      <div className='App-content' style={menu || loading ? menuStyle : null}>
        {loading ? <div className='loader'></div> :
          menu ? 
            <MainMenu toggleGame={toggleGame} /> : gameElem}
      </div>
    </div>
  );
}

export default App;
