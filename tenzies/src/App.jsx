import { useEffect, useState } from 'react'
import './App.css'
import Die from '../components/Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {

  function allNewDice() {
    const allDice = []
    for(let i = 0; i < 10; i++) {
      allDice.push({value: generateRandomInt(),
                    isHeld: false,
                    id: nanoid()
                  })
    }
    return allDice // The maximum is exclusive and the minimum is inclusive
  }

  function generateRandomInt() {
    return Math.floor(Math.random() * (7 - 1) + 1)
  }

  function reroll() {
    setDiceValues(prev =>  prev.map(d=> {
      return d.isHeld ?
          d:
         {...d, value: generateRandomInt()}
           }))
  }

  function holdDice(id) {
    setDiceValues(prev =>  prev.map(d=> {
        return d.id === id ?
           {...d, isHeld: !d.isHeld}
            :d }))
  }

  function resetGame() {
    setDiceValues(allNewDice)
    setTenzies(false)
  }

  const [diceValues, setDiceValues] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=>{

    const isWinningState = diceValues.every(d =>{
      return d.value === diceValues[0].value && d.isHeld
    })
    if(isWinningState){
      setTenzies(true)
      console.log("you won!")
    }
    
  }, [diceValues])



  const dice = diceValues.map((e) => <Die 
                  key={e.id}
                  id={e.id} 
                  value={e.value}
                  isHeld= {e.isHeld}
                  handleHold={()=>holdDice(e.id)} 
                  />)

  return (
    <main className='bg-div'>
      <div className='inner-box'>
      {tenzies && <Confetti className='confetti'/>}
      <h1 className="title"> {tenzies ? "Congratulations!" : "Tenzies"}</h1>
            <p className="instructions">{ tenzies ? "🎉 🎉 🎉 You've won the game!  🎉 🎉 🎉" : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
        <div className='dices-grid'>
          {dice}
        </div>
        <button className='roll-btn' onClick={tenzies ? resetGame : reroll}>{tenzies ? "New Game" : "ROLL"}</button>
      </div>
    </main>
  )
}

export default App
