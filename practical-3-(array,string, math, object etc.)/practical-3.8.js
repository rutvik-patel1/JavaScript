/**1) Append all the elements of the array given below to patients array:
(can't use loops or iterator)
2) Delete the patient having the name "George" from the new array. (you
can't use loops.)
3) Add one patient at the beginning of the array.
4) Update the ailments of a patient having name Christopher.
5) Delete one patient from the end of the array.
6) Delete one patient from the beginning of the array.
7) Insert one patient somewhere within the array at index 4.
8) Using the find method, find the patients having Diabetes.
9) Reverse the order of all the array objects. */

const  patients = [{
    "name": "James",
    "ailments": ["Cough", "Cold", "Fever"]
    },
    {
    "name": "George",
    "ailments": ["Blood Pressure"]
    },
    {
    "name": "Robert",
    "ailments": ["Cough", "Cold", "Fever"]
    },
    {
    "name": "Mary",
    "ailments": ["Diabetes"]
    },
    {
    "name": "Patricia",
    "ailments": ["Blood Pressure"]
    }];

const newList = [...patients ,{
    "name": "Christopher",
    "ailments": ["Dengue"]
    },
    {
    "name": "Thomas",
    "ailments": ["Diabetes"]
    },
    {
    "name": "Anthony",
    "ailments": ["Fatigue", "Cold", "Fever"]
    }]

console.log("1.New Object after append operation:-",newList)

const index = newList.findIndex((item)=>{
    const index = item.name=="George"
    return index;
})

newList.splice(index,1)
console.log("2.Object after delete George entry :-",newList)

const addVal = newList.unshift({
    "name": "Rutvik",
    "ailments": ["Blood Pressure"]
    })

console.log("3.Object after one value added at the beginning :-",newList)

const changeAilments = newList.forEach((item)=>{
    if(item.name=="Christopher"){
        item.ailments = ['Fever']
    }    
})

console.log("4.Chage value of ailments of Christopher :-",newList)

newList.pop()
console.log("5.Delete one patient from the end of the array:-",newList)
newList.shift()
console.log("6.Delete one patient from the beginning of the array.:-",newList)
newList.splice(4,0,{"name": "John","ailments": ["Cough", "Cold", "Fever"]})

console.log("7. Insert one patient somewhere within the array at index 4:-",newList)

const diabetesPatients = newList.find(obj =>{
    return obj.ailments.includes('Diabetes')

})

console.log("8. Using the find method, find the patients having Diabetes:-",diabetesPatients)

newList.reverse()
console.log("9. Reverse the order of all the array objects:-",newList)