import React from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'
function App() {
  const [count , setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
     <div>
      <Button incrementCount = {handleClick} text = "ClickME">
        <h1>Count: {count}</h1>
      </Button>
      <h1>React Project Four</h1>
      <Card name = "UjjwalDixit">
      <h1>Best WEBDEV COURSE</h1>
      <p>Trying to be consistent in this</p>
      <p>Will complete the course soon</p>
      </Card>
      <Card children = "Mein ek children hoon"></Card>
      <Card>
        <p>Hello Jee</p>
      </Card>
     </div>
    </>
  )
}

export default App
