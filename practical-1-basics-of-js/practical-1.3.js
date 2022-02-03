/**Write a function which takes two arrays of numbers as arguments and returns an
array containing numbers either in the first or in the second array but not in both
arrays. (use findIndex, forEach/for...of) */

let array1 = [1,2,3,4,5]
let array2 = [4,5,6,7,8]

const reqArray = (arg1,arg2) => {
  let result = [];
  for (const num1 of array1){
      let index = array2.indexOf(num1);
      if(index == -1){
        result.push(num1);
      }
      else{
        array2.splice(index,1)
      }
    
  }
  result=result.concat(array2)
  return result
}

console.log(reqArray(array1,array2))  
