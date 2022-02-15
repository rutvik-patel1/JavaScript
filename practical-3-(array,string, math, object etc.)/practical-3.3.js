/**Write a function that takes an array containing duplicate numbers as an
argument and returns the array containing only unique nos. (use ES6
concepts like Set and spread operator.)
 */

const data = [1,-1,8,9,5,5,5,6,9,5,1,2,6,6,4,3,3,2,8,7,1,7]
const set = new Set(data)
const result = [...set];
console.log(result)