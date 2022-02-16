/**Write a function which takes 2 objects as an argument and swaps each other without taking the
temporary third object. Also return the array containing swapped objects and to hold those returned
objects use the same objects you have passed to the function. (use ES6 concepts.) */

var employee1 = 
{
    employeeID: 1,
    fullName: "Lav Panchal",
    department: "NodeJS"
}

var employee2 = 
{
    employeeID: 2,
    fullName: "Rutvik Patel",
    department: "VueJs"
}

const swapObjcts = (obj1,obj2) => {
    console.log("Object 1 before swap:-",obj1)
    console.log("Object 2 before swap:-",obj2)
    obj2 = [obj1, obj1 = obj2][0];
    console.log("Object 1 after swap:-",obj1)
    console.log("Object 2 after swap:-",obj2)
    obj2 = [obj1, obj1 = obj2];
    console.log("array of objects after swap:-",obj2)
}

swapObjcts(employee1, employee2)