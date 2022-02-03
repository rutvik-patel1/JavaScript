/**Write a function that takes an array of objects same as the object in question no.
13 but should contain unique objects only and sort_order
(descending/ascending) as arguments and sorts the objects based on property
fullName. */

let jsonData = require('./data.json')
//duplicates->
let jsonData2= require('./13.json')
//console.log(jsonData)
  
const reqArray = jsonData2.map((obj)=>{
    const item ={
        _id : obj._id,
        fullName: obj.firstName+obj.lastName,
        profileImage: obj.profileImage,
        highestQualification_PassoutYear: obj.academicDetails.highestQualification,
        emailID: obj.contactDetails.primaryEmailID,
        technologyAssigned: obj.technologyAssigned,
        os: (obj.systemConfiguration[0].isDualBoot) ? (obj.systemConfiguration[0].os+"+"+obj.systemConfiguration[0].secondaryOS) : (obj.systemConfiguration[0].os) 
    }

    return item;
})
  
const resultantobj = (arr) => {
    let newObj ={};
    let keys = []
  for(let element of arr) {
      let val=element._id
      keys.push(val);
  }
  for (const num of keys) {
    newObj[num] = newObj[num] ? newObj[num] + 1 : 1;
  }
   return newObj;        
} 

const arrayUnique=(arr)=>{
    const updatedArrayObject = []
    return arr.filter((item)=>{
      if (updatedArrayObject.indexOf(item["_id"]) === -1) {
        updatedArrayObject.push(item["_id"])
        return updatedArrayObject
      }
    })
  }

const uniqueReqArray = arrayUnique(reqArray)

const sortArrayObject = (arr,sortOrder) => {
    if(sortOrder ==='asc'){
        const ascArray=arr.sort((a,b)=> (a.fullName > b.fullName ? 1 : -1))
        console.log(ascArray)
    }
    else if(sortOrder ==='desc'){
        const descArray=arr.sort((a,b)=> (a.fullName < b.fullName ? 1 : -1))
        console.log(descArray)
    }
    else{
        console.log("something went wrong1")
    }
}

sortArrayObject(uniqueReqArray,'asc')
