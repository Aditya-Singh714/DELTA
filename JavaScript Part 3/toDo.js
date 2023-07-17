/* Making ToDo list */
let toDo = [];

let request = prompt("Please enter your request");

while(true){
    if(request == "quit"){
        console.log("Quiting app");
        break;
    }

    if(request == "list"){
        console.log("------------");
        for(let i = 0; i < toDo.length; i++){
            console.log(i,toDo[i]);
        }
        console.log("------------");

    } else if(request == "add"){
        let taskName = prompt("Enter the name of new Task:");
        toDo.push(taskName);
        console.log("Task added");

    } else if(request == "delete"){
        let idx = prompt("Please enter the task number");
        toDo.splice(idx, 1);
        console.log("Task deleted");
    } else{
        console.log("Wrong request");
    }

    request = prompt("Please enter your request");
}