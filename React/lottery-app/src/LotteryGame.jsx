import { useState } from "react";
import Ticket from "./Ticket";
import './Lottery.css'
import { generateTicket, sum } from "./helper";

export default function LotteryGame({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(generateTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(generateTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>

      <h3>{isWinning && "Congratulations, You won lottery!"}</h3>
    </div>
  );
}
