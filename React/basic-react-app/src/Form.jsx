function handleFromSubmit(event){
    event.preventDefault();
    console.log(("Form was submiitted"));
}

function Form() {
    return(
        <form>
            <input type="text" placeholder="Write something"/>
            <button onClick={handleFromSubmit}>Submit</button>
        </form>
    );
}

export default Form;