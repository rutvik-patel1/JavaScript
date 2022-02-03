/**Write a function that takes an array as an argument and returns all the elements
of an array after capitalizing each element of the array. (Use appropriate
iterators and you can't use forEach.) */

let strArray = ["hello","world","how","are","you","are","they","test","array"]
let strArray = []//take aaray of different words
const upperCaseArray = (arr) => {
  let newArray = [];
  for(var i = 0; i < arr.length; i++){
      newArray.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
    return newArray;
}
