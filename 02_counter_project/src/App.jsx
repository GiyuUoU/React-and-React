import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const add = () => {
    counter += 1
    setCount(counter)
  }
  const remove = () => {
    counter -= 1
    setCount(counter)
  }
  if (counter < 0){
    alert("Counter can't be negative")
    setCount(0)
  }
  else if (counter > 20){
    alert("Counter can't be greater than 20")
    setCount(0)
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>Count : {counter}</h2>
    <button onClick={add}>Add value : {counter}</button>
    <br/>
    <button onClick={remove}>Remove value : {counter}</button>
    </>
  )
}

export default App
