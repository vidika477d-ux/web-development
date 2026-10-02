//Javascript code
let todo=[];
let req=prompt("Enter your choice:");
while(true){
     if(req=="quit"){
        console.log("quiting from app");
        break;
    }
    else if(req=="list"){
        console.log("---------");
        for(task of todo){
            console.log(task);

        }
        console.log("------------");
    }
    else if(req=="add"){
       
        let add=prompt("Enter your task you want to perform:");
        todo.push(add);
        console.log("Task added successfully");
      

    }
    else if(req=="delete"){
        let indx=prompt("Enter item you want to delete:");
        todo.splice(indx,1);
        console.log("task deleted successfully");
    }
    else{
        console.log("Wrong task chosen");
    }
    req=prompt("Enter the task you want to do!")
   
}
