/**Write a function which takes an array of trainees containing some duplicate
objects as an argument and having properties like ID, fullName, email, college,
university, technologyAssigned and returns an object depicting occurrences
containing the ID as a key and the occurrences of each ID as value and also
write a function that removes the duplicate elements having multiple occurrences
use the IDs object to perform deletion. */

let jsonData = require('./13.json')
//console.log(jsonData)
  
const resultantobj = (arr) => {
    let newObj ={};
    let keys = []
  for(let element of arr) {
      let val=element._id
      keys.push(val);
  }
  for (const num of keys) {
    newObj[num] = newObj[num] ? newObj[num] + 1 : 1;
  }
   return newObj;        
} 

const arrayUnique=(arr)=>{
    const updatedArrayObject = []
    return arr.filter(function(item) {
      if (updatedArrayObject.indexOf(item["_id"]) === -1) {
        updatedArrayObject.push(item["_id"])
        return updatedArrayObject
      }
    })
  }
  
console.log(resultantobj(jsonData))
console.log(resultantobj(arrayUnique(jsonData)))
