/**Write a function which takes an array containing fullNames of trainees
and a str representing fullName as arguments. The function checks if
the fullName is valid as well as unique means should not be present in the
array. If so it adds the fullName to the array, else will skip adding it and
returns relevant error messages.
Validations for fullName:
- It can contain only the alphabetic characters. digits are not allowed.
- Only a single white space is allowed between two words.
- It can contain apostrophes but cannot occur multiple times like: Derek
O''Brien is invalid while Derek O'Brien is valid.
 */

let jsonData = require('./Practical - 3.1.json')
const fullNames = []
for(let obj in jsonData) {
    fullNames.push(jsonData[obj].fullName)
}

const result = (str,array) => {
    if(array.includes(str)) {
        return console.log("same name already present !!")
    }

    let newStr = str.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    let condition = new RegExp("^[a-zA-Z ]*[']{0,1}[a-zA-Z ]*$");
    if(str.match(/\d+/g) != null){
        return console.log("Name contains number !!!");
    }
    else if(newStr != str){
        return console.log("Name contains whitespace characters !!");
    }
    else if(!condition.test(str)){
        return console.log("Apostrophes occururing multiple times !!");
    }
    else{
        array.push(str);
    }
    return console.log(array); ;
}


result("DerekO'' Brien",fullNames)