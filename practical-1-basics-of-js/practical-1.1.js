/*Write a function which calculates the average of the numbers in an array with the
use of reduce iterator.
 */
let data = [25,49,5,48,57,48,56,78,69,7 ];

const sum = data.reduce((preValue,currentValue)=>{
  const result = preValue+currentValue;
  return result
})

const average = sum/data.length
console.log(average)