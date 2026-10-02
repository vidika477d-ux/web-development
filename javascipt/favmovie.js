//favmovie javascript code
const movie="avatar";
let choice=prompt("Enter your choice:");
while(choice!=movie){
    if(choice=="quit"){
        console.log("You quit");
        break;
    }
    choice=prompt("Wrong choice!");
}
if(choice==movie){
    console.log("congrats!");
}
