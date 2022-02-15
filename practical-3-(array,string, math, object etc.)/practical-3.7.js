/** create a copy of this object into another object. Modify the firstName to
Krushit and lastName to Dudhat and also change the emailID to that of
Krushit of the newly created clone.*/

const trainee = {
    "_id": 1,
    "firstName": "Lav",
    "lastName": "Panchal",
    "aboutMe": "I code",
    "profileImage": "users/1.png",
    "academicDetails": {
    "highestQualification": "B.E/B.Tech.",
    "college": "Government Engineering College, Gandhinagar",
    "university": "GTU",
    "passoutYear": 2022
    },
    "contactDetails": {
    "primaryEmailID": "aayush.adeshara@bacancy.com",
    "alternateEmailID": "",
    "primaryContactNo": 123,
    "alternateContactNo": 456
    },
    
    "technologyAssigned": "ROR"
    }

const newData = {
    ...trainee
}

console.log(newData)
newData['firstName'] = 'Krushit'
newData['lastName'] = 'Dudhat'
newData.contactDetails["primaryEmailID"]= "krushit.dudhat@bacancy.com"
console.log(newData)