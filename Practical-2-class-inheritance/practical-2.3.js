/**Write a code block to create a class called Person having protected properties,
fullName, email, contactNum and a method called display which displays the
values of all the properties in it. Create another class called Employee having
static property: organizationName and non-static properties: employeeID,
department, designation, technologiesKnown, dateOfJoining, experience.

Declare all the non-static properties to be private.
- Create a static method called sortEmployess which sorts the employees
based on their dateOfJoining.
- Create a non-static method which displays the employee details, like:
employeeID, fullName, email, contactNum, organizationName,
department, designation, technologiesKnown, dateOfJoining, experience.
- Provide constructors in both the Base and Derived classes.
- Set the static property: organizationName to a common value.
- Instantiate the Employee class by creating 5 objects.
- Sort the employee objects based on their dateOfJoining by invoking the
static method sortEmployees.
- Invoke the display method on sorted employee objects. (you can use
forEach/ for...of to display details of particular employee) */


class Person {
    _fullName = 'Rutvik Patel';
    _email = 'rutvik.patel@bacancy.com';
    _contactNum = 90999000;
    
    constructor(fullName, email, contactNum) {
        this._fullName = fullName;
        this._email = email;
        this._contactNum = contactNum;
    }

    getDetails(){
        console.log('Full Name:-' + this._fullName);
        console.log('Email:-'+ this._email);
        console.log('Contact Number:-'+this._contactNum);
    }
}

class Employee extends Person {
  
    static organizationName;
    #employeeID;
    #department;
    #designation;
    #technologiesKnown;
    #dateOfJoining;
    #experience;

    constructor(fullName, email, contactNum, organizationName,employeeID,department,designation, technologiesKnown, dateOfJoining, experience) {
        super(fullName,email,contactNum);
        Employee.organizationName= organizationName;
        this.#employeeID = employeeID;
        this.#department = department;
        this.#designation = designation;
        this.#technologiesKnown = technologiesKnown;
        this.#dateOfJoining = dateOfJoining;
        this.#experience = experience;
        

    }

    get reqDetails(){
    console.log('Department:-'+this.#department)
    console.log('Designation:-'+this.#designation)
    console.log('Technologies known:-'+this.#technologiesKnown)
    } 
    
    set newDetails(value){
      this.#designation = value[0];
      this.#department = value[1];
      this.#technologiesKnown = value[2];
    }
    
    static sortEmployees(arg){
    
        arg.sort((a,b)=> {return new Date(a.date) - new Date(b.date)})
        return arg;
    }
    getDetailsInObject(){
        let item = {fullName:this._fullName,email:this._email,contactNo:this._contactNum,organizationName:Employee.organizationName,empID:this.#employeeID,department:this.#department,designation:this.#designation,technologiesKnown:this.#technologiesKnown,date:this.#dateOfJoining,experience:this.#experience}
        return item;
    }
    getDetails(){
        super.getDetails();
        console.log('Organization name:-'+Employee.organizationName);
        console.log('Employee ID:-'+ this.#employeeID);
        console.log('Department:-'+this.#department);
        console.log('designation:-'+this.#designation);
        console.log('technologiesKnown:-'+this.#technologiesKnown);
        console.log('dateOfJoining:-'+this.#dateOfJoining);
        console.log('experience:-'+this.#experience);

    }
  }

let emp1 = new Employee("Ben","b@gmail.com",90990,"Bacancy",1,'Development','Android Developer','java','2022-05-01',1);
let emp2 = new Employee("John","j@gmail.com",22445,'Bacancy',2,'Development','IOS Developer','swift','2021-03-01',1);
let emp3 = new Employee("Smith","s@gmail.com",78564,'Bacancy',3,'Development','PHP Developer','java','2022-08-25',1);
let emp4 = new Employee("Rose","ro@gmail.com",23421,'Bacancy',4,'Development','Android Developer','java','2018-09-07',1);
let emp5 = new Employee("Jason","js@gmail.com",98798,'Bacancy',5,'Development','React Developer','javascript','2022-03-30',1);

objects = [emp1, emp2, emp3, emp4, emp5];
const employeeData = objects.map((obj) => {
    return obj.getDetailsInObject()
})

const sortedObj= Employee.sortEmployees(employeeData)

const displayDetailsOFEmployee = (sortedObj , empID) =>{
    sortedObj.forEach((ele)=>{
        if(ele.empID === empID){
            console.log("Fullname:"+ele.fullName);
            console.log("Email ID:"+ele.email);
            console.log("Contact NO.:"+ele.contactNo);
            console.log("Organisation:"+ele.organizationName);
            console.log("Date of Joining:"+ele.date);
            console.log("Designation:"+ele.designation);
            console.log("Department: "+ele.department);
        }
    })
}

displayDetailsOFEmployee(sortedObj,4);
