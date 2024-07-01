import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});

    let [arr, setArr] = useState(["no moves"]);

    let upadteBlue = () =>{
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue +1};
        });

        setArr((prevArr) => {return [...arr, "blue moves"]});
    }

    let upadteRed = () =>{
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red +1};
        });

        setArr((prevArr) => {return [...arr, "red moves"]});
    }

    let upadteYellow = () =>{
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow +1};
        });

        setArr((prevArr) => {return [...arr, "yellow moves"]});
    }

    let upadteGreen = () =>{
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green +1};
        });

        setArr((prevArr) => {return [...arr, "green moves"]});
    }

    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={upadteBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button onClick={upadteRed} style={{backgroundColor: "red"}}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button  onClick={upadteYellow}style={{backgroundColor: "yellow"}}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button onClick={upadteGreen} style={{backgroundColor: "green"}}>+1</button>
            </div>
        </div>
    )
}