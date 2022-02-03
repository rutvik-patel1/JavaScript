/**Write a function which takes an array of numbers as an argument and returns an
array with only distinct elements using reduce iterator. */

let arr = [1,1,2,3,3,4,5,6,6,8,8,9];

  let distNumArr = (arg) => {
      const result = arg.reduce((preValue,currentValue)=>{
        if(preValue.indexOf(currentValue) == -1){
          preValue.push(currentValue)
        }
        //console.log(preValue)
        return preValue;
      },[])
  
      return result;
  }
  console.log(distNumArr(arr))