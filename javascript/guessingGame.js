const max=prompt("Enter the max number:");

let random=Math.floor(Math.random()*max)+1;

let guess=prompt("Enter your guess:");
while(true){
    if(guess=="quit"){
        console.log("user quits!");
        break;
    }
    else if(guess==random){
        console.log("Congrats! You are right The random number was:",random);
        break;
    }
    else if(guess<random){
         guess=prompt("Your guess was too small. please try again !");
        
    }
    else{
        guess=prompt("Your guess was too large. please try again! ");
    }
}
