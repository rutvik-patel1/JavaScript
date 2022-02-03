/**Write a function which returns the array containing all the objects of the given
array with only given properties by using map iterator.
RESULTANT ARRAY WILL CONTAIN OBJECT SIMILAR TO THE ONE GIVEN
BELOW:
{
_id: “1”,
fullName: “Aayush Adesara”,
profileImage: “users/1.png”,
highestQualification_PassoutYear: “B.E./B.Tech - 2022”,
emailID: “aayush.adeshara@bacancy.com”,
technologyAssigned: “ROR”,
os: “ubuntu 21.10 + windows 11”
} */
let jsonData = require('./data.json')
//console.log(jsonData)

const reqArray = jsonData.map((obj)=>{
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

console.log(reqArray)