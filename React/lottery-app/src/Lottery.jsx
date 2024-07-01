import React, { useState } from 'react'; 
 
export default function Lottery() { 
    let [ticket, setTicket] = useState(0); 
    let [sum, setSum] = useState(0); 
    let styles = sum==15 ? {color: "aqua"} : {color: "white"}; 
 
    let getTicket = () => { 
        let num = Math.floor(Math.random() * 1000); 
        setTicket(num); 
        let total = 0; 
        while (num > 0) { 
            let rem = Math.floor(num % 10); 
            total += rem; 
            num = Math.floor(num / 10); 
        } 
        return setSum(total); 
    } 
 
  return ( 
    <div> 
      <h1 style={styles}>{sum==15 ? "Congratulations, you won the lottery!" : "Lottery"}</h1> 
      <h4>Lottery Ticket = {ticket}</h4> 
      <button onClick={getTicket}>Get New Ticket</button> 
    </div> 
  ); 
}