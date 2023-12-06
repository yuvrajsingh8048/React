import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if(counter >= 10){
      alert(`Number should be less than 10`)
    }
    else{
      setCounter(counter + 1)
    }
  }
  const remValue = () => {
    if(counter <= 0 ){
      alert(`Number should be more than 0`)
    }
    else {
      setCounter(counter - 1)
    }
  }

  return (
   <>
   <h1>Chai aur React</h1>
   <h3>Increase and Decrease the number by 1 in range of 1 - 10</h3>
   <h2>Counter App : {counter} </h2>
   <button onClick={addValue}>Add Value</button>
   <button onClick={remValue}>Remove Value</button>
   </>
  )
}

export default App
