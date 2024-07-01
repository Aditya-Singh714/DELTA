import { useState } from 'react'
import './App.css'
import LudoBoard from './LudoBoard'
import ToDoList from './ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToDoList />
    </>
  )
}

export default App
