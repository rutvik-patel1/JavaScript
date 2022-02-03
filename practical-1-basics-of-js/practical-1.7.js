/**Write a function that accepts 2 arguments 1- object and 2 - an array of objects
will return boolean true value if the object is contained in an array of objects else
will return false. (make sure your solution is a dynamic one, it should work
on any array of objects even if the properties of objects don't follow the
same order. */

const obj = {
    custID:1,
    name:'rutvik',
    mobileNo:90990,
    emailId:'rutvik@gmail.com'
}
  
const arrObj = [
    {custID:1,
    mobileNo:90990,
    name:'rutvik',
    emailId:'rutvik@gmail.com'},
    {
    custID:2,
    name:'ram',
    mobileNo:85844,
    emailId:'ram@gmail.com'
    },
    {custID:3,
    name:'shyam',
    mobileNo:55171,
    emailId:'shyam@gmail.com'},
    {custID:4,
    name:'raj',
    mobileNo:39785,
    emailId:'raj@gmail.com'},
    {
      custID:5,
    name:'om',
    mobileNo:12569,
    emailId:'om@gmail.com'
    }]

    function compareObj(obj1, obj2) {
        let pro1 = Object.getOwnPropertyNames(obj1);
        let pro2 = Object.getOwnPropertyNames(obj2);
        if (pro1.length != pro2.length) {
            return false;
        }
        for (let i = 0; i < pro1.length; i++) {
            let prop = pro1[i];
            let isBothObj = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';
            if ((!isBothObj && (obj1[prop] !== obj2[prop])) || (isBothObj && !compareObj(obj1[prop], obj2[prop]))) {
                return false;
            }
        }
        return true;
    }
    
    const isArrayContainObj = (obj, arr) => {
        let flag = 0;
        arr.forEach(function(element){
            if(compareObj(obj, element)){
                flag = 1;
            }
        });
        if(flag === 1){
            return true;
        }
        else{
            return false;
        }
    }

    console.log(isArrayContainObj(obj, arrObj));