//3.1 function declaration
function getReminder(){
    console.log('Water the plants.')
  }
  function greetInSpanish(){
    console.log('Buenas Tardes.')
  }


//3.2 calling function
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  sayThanks()
  sayThanks()
  sayThanks()


//3.3 parameters and arguments
function sayThanks(name) {
    console.log('Thank you for your purchase '+name+ '! We appreciate your business.');
    }
    sayThanks('Cole');

//3.4 default paramters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  

//3.5 return value
function monitorCount(rows,columns){
    return rows*columns
 }
 const numOfMonitors = monitorCount(5,4)
 console.log(numOfMonitors);


//3.6 helper function
function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows,columns){
      return monitorCount(rows,columns)*200
  }
  const totalCost = costOfMonitors(5,4)
  console.log(totalCost)


//3.7 function expression
const plantNeedsWater = function(day){
    if(day === 'Wednesday'){
      return true
    }
    else{
      return false
    }
  }
  plantNeedsWater('Tuesday')
  console.log(plantNeedsWater('Tuesday'))


//3.8 Arrow function
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  


//3.9 concise arrow function

/*
  const squareNum = (num) => {
  return num * num;
 };
 We can refactor the function to:

const squareNum = num => num * num;
 

 */
const plantNeedsWater = day => day === 'Wednesday' ? true : false;