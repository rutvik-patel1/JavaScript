/**Write a function that takes an array of objects and an object as an argument and
pushes the object to the array if it is not in the array. (use appropriate
iterator(s), don’t use simple loops to iterate through the array and check
whether the object is there or not.) */


const obj1 = {
    custID:1,
    name:'rutvik',
    mobileNo:90990,
    emailId:'rutvik@gmail.com'
}

const objArr = [
    {custID:1,
    mobileNo:90990,
    name:'rutvik',
    emailId:'rutvik@gmail.com'},
    {custID:2,
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
    {custID:5,
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

const isObjPresent = (obj, arr) => {
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

let addObjToArray = (obj, arr) => {
    if(!isObjPresent(obj, arr)){
        arr.push(obj);
        return arr;
    }
    else{
        console.log('Array already contains the same object.');
        return arr;
    }
}

let resObjArr = addObjToArray(obj1, objArr);
console.log(resObjArr);