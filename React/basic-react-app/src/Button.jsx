function handleClick() {
    console.log("Hello React");
}

function handleMouseOver() {
    console.log("Bye Bye!");
}

function handleDoubleClick() {
    console.log("You double clicked!")
}

function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>

            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores ducimus nam perspiciatis iusto eligendi enim assumenda modi doloribus ipsam totam dignissimos neque, asperiores illo itaque saepe adipisci corporis obcaecati?</p>

            <button onDoubleClick={handleDoubleClick}>Double Click Me!</button>
        </div>
    );
}

export default Button;