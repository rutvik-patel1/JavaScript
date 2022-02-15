/**Write a function that takes an object created in problem no.1 as an
argument and creates an array dynamically by using the keys of the
object created in problem no.1. Here, the arrays will be created
dynamically and arrayNames must be the same as the keys of the objects
and the array must contain trainees of particular technology. */

let jsonData = require('./Practical - 3.1.json')
//console.log(jsonData)
const keys = []
for(let i=0; i<jsonData.length; i++){
     let key = jsonData[i].technologyAssigned
     if(keys.indexOf(key)==-1){
         keys.push(key)
     }
}

const resultObj = (keys,jsonData) => {
    const object = {}
    for(let i=0; i<keys.length; i++){
        const reqArray = jsonData.filter((obj)=>{
            if(obj.technologyAssigned == keys[i]){
                return true;
            }
        })
        object[keys[i]] = reqArray
    }
    return object;
}

const data = resultObj(keys,jsonData)
//console.log(data['DevOps'])
for (const key in data) {
    
    arrayVal = JSON.stringify(data[key])
    console.log(`${key} = ${arrayVal}`);
}


