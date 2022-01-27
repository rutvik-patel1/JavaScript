//6.1 repeating task manually
let vacationSpots = ['goa','manali','leh']
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])


//6.2 the foor loop
for(let count=5;count<11;count++)
{
    console.log(count);
} 
  

//6.3 looping in reverse
for (let counter = 3; counter >= 0; counter--)
{
    console.log(counter);
}


//6.4 looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0 ; i < vacationSpots.length ; i++)
{
  console.log('I would love to visit '+vacationSpots[i]);
} 


//6.5 nested loops
const bobsFollowers = ['a','b','c','d']
const tinasFollowers = ['b','e','d']
let mutualFollowers = []
for(let i=0 ; i<bobsFollowers.length ; i++){
  for(let j=0 ; j<tinasFollowers.length ; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)


//6.6 the while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while(currentCard !== 'spade'){
currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard)
}


//6.7 do while statement
let cupsOfSugarNeeded = 10;
let cupsAdded = 0;
do{
  console.log(cupsAdded)
   cupsAdded++
}while(cupsAdded<cupsOfSugarNeeded);


//6.8 the break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for ( let i =0 ; i<rapperArray.length ; i++){
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.")

