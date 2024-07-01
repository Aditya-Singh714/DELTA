import './App.css'
import Lottery from './Lottery'
import LotteryGame from './LotteryGame'

function App() {

  return (
    <>
      <LotteryGame n={3} winningSum={15}/>
    </>
  )
}

export default App
