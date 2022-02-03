/**Write a function that accepts a number as an argument and generates an array
of n unique random numbers from 1 to n. (no. Provided in the argument) */
const arr = (num) =>{
    let arr=[]
    while(true){
      if(arr.length == num){
        break;
      }
      n1 = Math.floor(Math.random()*num)
      if(arr.indexOf(n1)<0){
      arr.push(n1)
      }
    }
    return arr
  }
  
  console.log(arr(20))