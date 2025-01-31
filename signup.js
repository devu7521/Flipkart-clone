// This JavaScript code is using the localStorage object to retrieve data stored under the key "usersdata" and then parsing it as JSON using JSON.parse(). If the data is not present or if there is an issue parsing it, it defaults to an empty array [].

let getUsersdata=JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signup(){
    let username = document.getElementById("naam").value;
    let mobile = document.getElementById("phone").value;
    let password = document.getElementById("pass").value;
    if (mobile.length==0){
        alert("Enter the mobile number");
    }
    else if (mobile.length!==10){
        alert("mobile number should have 10 digits");
    }
    
    else{
        let userData={
            username:username,
            mobile:mobile,
            password:password
        }
        // the overall purpose of this code is to create a new user data object (userData) with the provided values for username, mobile, and password, and then add this user data object to an array (users) by creating a copy of the existing user data array (getUsersdata) and appending the new user data object to it.
        let users=[...getUsersdata,userData];
        
        // When sending this array data to a local storage, the data has to be a string.Convert a JavaScript object into a string with JSON.stringify().userdata-it is used to define in which keys you want to store data in backend 
        localStorage.setItem("usersdata",JSON.stringify(users));
        alert("Signup Successfull");
        // after succesfully signup the user will go to signin page
        window.location.href="signin.html";
     }
    
}