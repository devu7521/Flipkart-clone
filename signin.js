let getUsersdata=JSON.parse(localStorage.getItem("usersdata"))|| [];
function Signin(){
    let mobile = document.getElementById("phone").value;
    let password = document.getElementById("pass").value;
    let count=0;
    if (mobile.length==0){
        alert("Enter the mobile number");
    }
    else if (mobile.length!==10){
        alert("mobile number should have 10 digits");
    
    }
    else{

    
    for (let i=0;i<getUsersdata.length;i++){
        if(mobile==getUsersdata[i].mobile){
            if(password==getUsersdata[i].password){
                alert("Sign in Successful")
                window.location.href="index.html"
            }
            else{
                alert("Invalid Password")
            }
        }
        else{
            count++;
        }

    }
     }
// count has been traversed through entire array but have not find the mobile number
    if(count==getUsersdata.length){
        alert("User is Not registered,Signup to Continue")
        window.location.href="signup.html"
    }
}