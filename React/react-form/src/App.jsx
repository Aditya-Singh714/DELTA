import { useState } from 'react'
import './App.css'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Counter from './Counter'
import Joker from './Joker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joker />
    </>
  )
}

export default App
