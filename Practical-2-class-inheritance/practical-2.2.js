/**
 *Write a code block to create a class called Employee having static property:
  organizationName and non-static properties: employeeID, department,
  designation, technologiesKnown, dateOfJoining, experience. Declare all the
  non-static properties to be private. Provide getter and setter methods for reading
  and writing the values of properties: department, designation,
  technologiesKnown.
 */

class Employee{
  
    static organizationName = "Bacancy Technology";
    #employeeID = 1
    #department = 'Web Development'
    #designation = 'Software Developer'
    #technologiesKnown = 'Vue js'
    #dateOfJoining ='03-01-2022'
    #experience = '1 year'
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
  }
  
  let emp = new Employee()

  console.log('Organization Name :- '+Employee.organizationName)

  console.log('Before Setter:-')
  emp.reqDetails
  
  emp.newDetails=['Sr Software Developer','Project Manager','java8']
  
  console.log('After Setter:-')
  emp.reqDetails
  