import { useEffect, useState } from "react";

export default function Joker() {
    const URL = "https://v2.jokeapi.dev/joke/Any";
    let [joke, setJoke] = useState({});

    const getNewJoke = async() => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, delivery: jsonResponse.delivery});
    };

    useEffect( () =>{
        async function getFirstJoke () {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({setup: jsonResponse.setup, delivery: jsonResponse.delivery});
        }
        getFirstJoke();
    } ,[]); // empty array to work for only first time

    
    
    return( 
        <div>
            <h2>Joker!</h2>
            <h3>{joke.setup}</h3>
            <h3>{joke.delivery}</h3>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}