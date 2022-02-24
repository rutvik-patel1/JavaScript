function setDate(){
	    var today = new Date().toISOString().split('T')[0];
      document.getElementsByName("startDate")[0].setAttribute('max',today)
	}

var states = new Array("Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal");
select = document.getElementById('state');
for (var i = 0; i<=states.length; i++){
    var opt = document.createElement('option');
    opt.value = states[i];
    opt.innerHTML = states[i];
    select.appendChild(opt);
}

//handle form data

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


function getData(form){
    var title = document.getElementById("title").value;
    var name = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var genderEle = document.getElementsByName("gender");
    var fullname = title+""+name+""+middleName+""+lastName
    var error = result(fullname)
    if(error){ 
        console.log("not working")
        document.getElementById("error").innerHTML= error

        return false
    }
    else{

    }
    console.log(error)
    for(i = 0; i < genderEle.length; i++) {
                if(genderEle[i].checked)
                {var gender = genderEle[i].value}
            }
    
    var email = document.getElementById("email").value;
    var contactNo = document.getElementById("contactNo").value;
    var houseNo = document.getElementById("houseNo").value;
    var addressLine1 = document.getElementById("addressLine1").value;
    var addressLine2 = document.getElementById("addressLine2").value;
    var city = document.getElementById("city").value;
    var landmark = document.getElementById("landmark").value;
    //var statesEle = document.getElementsByName("state");
 


var select2 = document.getElementById('state');
var value = select2.options[select2.selectedIndex].value;
 // en

    var countryEle = document.getElementsByName("country");
    var country = countryEle[0].value
    var pincode = document.getElementById("pincode").value;
    var address = houseNo+", "+addressLine1+", "+addressLine2+", "+landmark+","+city+","+value+", "+country+" ,"+pincode;
    
    var designation = document.getElementById("designation").value;
    var tech = document.getElementById("tech").value;
    var date = document.getElementById("startDate").value;
    //console.log(date)

    var ch1 = document.getElementById("react")
    var ch2 = document.getElementById("vue")
    var ch3 = document.getElementById("angular")
    var techlist = []
    if(ch1.checked){
        var react = document.getElementById("expreact").value
        techlist.push('React:'+react+'yr')
    }
    if(ch2.checked){
        var vue = document.getElementById("expvue").value
        techlist.push('Vue:'+vue+'yr')
    }
    if(ch3.checked){
        var angular = document.getElementById("expangular").value
        techlist.push('Angular:'+angular)
    }
      
    //console.log(title,name,middleName, lastName,email,contactNo,houseNo,addressLine1,addressLine2,city,states,pincode, designation, designation)
    //console.log(gender)
   //console.log(designation)
//    console.log(tech)
//    console.log(states)
  addRow(fullname,gender,email,contactNo,address,designation,techlist,date)
  
  
    return true;
}

var id = 1 //global data id
function addRow(fullname,gender,email,contactNo,address,designation,tech,date){
  
  
//   console.log(id)
//   console.log(date)
  var exp = getExp(date)
  var ele = "<tr id="+id+"><td>"+id+"</td><td>"+fullname+"</td><td>"+gender+"</td><td>"+email+"</td><td>"+contactNo+"</td><td>"+address+"</td><td>"+designation+"</td><td>"+tech+"</td><td>"+exp+"</td><td><button onclick='deleteData(this.id)' id="+id+">X</button></td></tr>"
 // console.log(ele) 
//   var ele2 = document.createElement("tr")
  document.getElementById("dataTable").insertAdjacentHTML( 'beforeend', ele );
    id++
}

function getExp(date) {
    var today = new Date();
    var sd = new Date(date);
    var yr = today.getFullYear() - sd.getFullYear();
    var m = today.getMonth() - sd.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < sd.getDate())) {
        yr--;
        m=m*(-1)
        m=12-m
        console.log('month',m)
    }
    if(yr==0){
    if(m<=1){return 0.1} 
    else if(m>1&&m<10){
      return m*(0.1)
    }
    else
    {return 1}
    }
    x = yr+m*(0.1)
    return x;
}
function deleteData(uid){
    console.log(uid)
    console.log('clicked')  
    document.getElementById(uid).remove(); 
}





function result(str){

    let newStr = str.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    let condition = new RegExp("^[a-zA-Z ]*[']{0,1}[a-zA-Z ]*$");
    if(str.match(/\d+/g) != null){
        return "Name contains number !!!"
    }
    else if(newStr != str){
        return "Name contains whitespace characters !!"
    }
    else if(!condition.test(str)){
        return "Apostrophes occururing multiple times !!"
    }
    return false;
}

    