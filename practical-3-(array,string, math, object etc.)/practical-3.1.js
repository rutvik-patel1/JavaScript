/**Write a function to arrange the objects of the JSON array given in the file
based on the key technologyAssigned. The function should return one
object where keys of the resultant object are the different technologies and
the value will be an array containing trainees who were assigned into
specific technologies. */
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

console.log(resultObj(keys,jsonData))