/**Write a function which takes an array of numbers as an argument and calculates
the sum of every positive element using filter and reduce */

const arr = [-1,-9,5,4,6,7,8,2,1,6,-9,5,-5,2,1,2,-82,3,1,0]

const sumOfPositive = (arg) =>{
    const positiveNum = arg.filter((item)=>{
        return item >= 0;
        })
    const sumOfnum = positiveNum.reduce((pval,cval)=>{
        return pval + cval;
    })
    return sumOfnum;
}

console.log(sumOfPositive(arr))