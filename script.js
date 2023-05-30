var person = {
    name: "Eli",
    age: 11,
    isMale: true,
}

/*
Create an array of 3 characters. Each character is an object with two properties--name and health. 
Create an object outside the array in a variable called opponent. The opponent also has name and health properties. (the opponent should start with more health than any of the characters.)
 
Create a loop that:
Prints out the name and health of all three characters plus the opponent.
Prompts the user to pick a character by number (1, 2, or 3).
“Battles” the selected character against the opponent. Remove five health from both the character and the opponent. (Or you can remove a random number from each.)
Exit the loop when the user response is null, which means that the cancel button was clicked.
 
Extended Challenges:
Do not allow a character with zero or less health to engage in battle.
Check for invalid input (must be number between 1 and 3).
Automatically end the program when the opponent health hits zero or all of the characters’ health has hit zero. Display a “win” or “lose” message.
*/
var characters = [{
name:"Luffy",
health:400,
},{
name:"Zoro",
health:350
},{
name:"Sanji",
health:300,
}]

var opponent = {
    name:"Garp",
    health: 755,
}
var Prompt = 9
while(Prompt){
    console.log(`
    Luffy's health is ${characters[0].health}
    Zoro's health is ${characters[1].health}
    Sanji's health is ${characters[2].health}
    Garp's health is ${opponent.health}
    `)
    
    
     Prompt = prompt("Choose Your Fighter")
     if(Prompt == 0){
     opponent.health -=20

     }
     else if(Prompt == 2){
        opponent.health -=10
   
        }
       else if(Prompt == 1){
      
        opponent.health -= 15;
       
}
       characters[Prompt].health -= 10;
    
}    
