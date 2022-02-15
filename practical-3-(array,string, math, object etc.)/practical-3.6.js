/**
create a copy of this object into another object. Modify the firstName to
Krushit and lastName to Dudhat and also change the emailID to that of
Krushit of the newly created clone. */

const employee = {
    employeeID: 1,
    fullName: "Lav Panchal",
    emailID: "lav.panchal@bacancy.com",
    department: "NodeJS",
    designation: "Software Engineer"
    }

const newData ={
    ...employee
}

newData['firstName'] = 'Krushit'
newData['lastName'] = 'Dudhat'
newData['emailID']= "krushit.dudhat@bacancy.com"
delete newData['fullName']
console.log(newData)