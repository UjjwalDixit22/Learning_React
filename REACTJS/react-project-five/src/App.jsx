import './App.css'
import Card from './components/Card'
import { useState } from 'react'
function App() {

    // As this is parent component we will change,manage,create state here and then sync. and send to all child components
    const [name,setName] = useState('');



  return (
    
    <>
    <h1>React Project Five</h1>
    <h2>Card Component</h2>
    <Card tittle = "Card I" name={name} setName={setName} />
    <Card  tittle="Card2" name={name} setName={setName} />

    <p>I am inside parent COmponent and value of name  {name}</p>
    </>
  )
}

export default App
