/**Write a function that accepts a comma-delimited string containing numbers as an
argument and returns the sum of the numbers. (use appropriate built-in JS
functions for string manipulation.) */
const str = "1,2,3,4,5,6,7"

const sumOfNumberString = (arg) => {
  let arr = str.split(",")
  arr= arr.map((item)=>{
    return parseInt(item)
  })
  const sum = arr.reduce((currentVal,nextVal)=>{
    return currentVal+nextVal
  })
  
  return sum
}

console.log(sumOfNumberString(str))