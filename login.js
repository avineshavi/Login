function validate(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "avinesh" || username == "varsha"  && password=="avinesh" || password=="varsha"){
        alert("Login Succesfully");
        return false;
    
    
    }
    else{

        alert("Login Failed");

    }
}