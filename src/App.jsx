import { useState } from 'react'
import './App.css'

function App() {

  const inital_value = () => {
    return 99;
  }

  const [counter,setCounter] = useState(inital_value)

  const addvalue = () => {
    setCounter(counter + 1)
  }

  const removevalue = () => {
    setCounter (counter - 1)
  }

  const resetvalue = () => {
    setCounter (inital_value)
  }

  return ( 
    <>
     <h1>Starting react with sam </h1>
     <h2> counter webpage in react</h2>
     <h3>default value {counter} </h3>
     <h2> Counter value :{counter} </h2>
     <button onClick = {addvalue}>Add value</button> {" "}
     <button onClick = {resetvalue}>reset counter</button>{" "}
     <button onClick={removevalue}>Remove value</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
