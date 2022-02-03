class Person {
    //fullname email contatNum
    constructor(fullName,email,contactNum) {
        this.fullName = fullName;
        this.email = email;
        this.contactNum = contactNum;
    };
    

    displayDetails(){
        console.log("Full Name:"+this.fullName);
        console.log("Email:"+this.email);
        console.log("Contact no:"+this.contactNum);
    }
}

let p1 = new Person("rutvik","r@gmail.com",90990);
//p1.displayDetails()

class Trainee extends Person {
    //highestQualification, college, university,passoutYear
    constructor(fullName,email,contactNum,highestQualification,college, university,passoutYear) {
        super();
        this.fullName = fullName;
        this.email = email;
        this.contactNum = contactNum;
        this.highestQualification = highestQualification;
        this.college =college;
        this. university = university;
        this.passoutYear = passoutYear;
    };

    displayDetails(){
        super.displayDetails();
        console.log("highestQua.:"+this.highestQualification);
        console.log("college:"+this.college);
        console.log("university:"+this.university);
        console.log("passoutyear:"+this.passoutYear);

    }


}

let trainee1 = new Trainee("rutvik","r@gmail.com",90990,"B.E","VGEC","GTU",2022);
trainee1.displayDetails()
