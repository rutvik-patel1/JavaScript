//5.1 arrays(only code execution)
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

//5.2 create an array
const hobbies = ["I" , 'me' , "myself"]
console.log(hobbies)


//5.3 accesing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3])


//5.4 update elements
let groceryList = ['bread', 'avocados', 'milk'];


//5.5 array with let and constant
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0]='Mayo';
console.log(condiments)
condiments = ['Mayo']
console.log(condiments)
utensils=['Spoon']
console.log(utensils)


//5.6 the length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)


//5.7 the push method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('element1','element2')
console.log(chores)


//5.8 the pop method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop()
console.log(chores)


//5.9 more array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)
groceryList.unshift('popcorn')
console.log(groceryList)
console.log(groceryList.slice(1,4))
console.log(groceryList)
const pastaIndex=groceryList.indexOf('pasta')
console.log(pastaIndex)


//5.10 arrays and functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept)



//5.11 Nested arrays
const numberClusters = [[1,2],[3,4],[5,6]]
const target = numberClusters[2][1];