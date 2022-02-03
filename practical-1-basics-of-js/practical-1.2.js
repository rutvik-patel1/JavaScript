/** Write a function which finds the maximum number from the array of numbers
using reduce iterator. */
let data = [25,49,5,48,57,48,56,78,69,7,1000 ];

const max = data.reduce((preValue,currentValue)=>{
  let max = preValue;
  if(currentValue > preValue){
    max = currentValue
  }
  return max;
})
console.log(max)