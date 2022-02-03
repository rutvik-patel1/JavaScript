/**Write a function which takes a number as an argument and computes the
factorial of a number with map and reduce. */

const factorial = (number) => {
    let arr = Array(number).fill().map((_, i) => i+1);
    const result = arr.reduce((pval,cval)=>{
        return pval*cval
    })
    return result
  
  }
  
  console.log(factorial(100))