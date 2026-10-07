const loginForm=document.getElementById("loginForm");
const loginButton=document.querySelector(".login-btn");
loginForm.addEventListener("submit",function(event){
event.preventDefault();

const username=document.getElementById("username").value.trim();
const password=document.getElementById("password").value;

const loginMessage=document.getElementById("loginMessage");

console.log("username",username);
// console.log("password",password);

loginMessage.textContent="";

if(username=="")
{
    loginMessage.textContent="Please enter the username";
    loginForm.style.color="red";
    return;
}

if(password=="")
{
    
    loginMessage.textContent="Please enter the password";
    loginForm.style.color="red";
    return;
}
if(password.length<6)
{
    loginMessage.textContent="Password must be greater then 6 characters";
    loginForm.style.color="red";

    return;
}
loginButton.textContent="Logging in ....";
loginButton.ariaDisabled=true;

fetch("http://127.0.0.1:8000/api/auth/login/",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        username:username,
        password:password
    })

}).then(response=>response.json()).then(data=>{console.log("Django Found:",JSON.stringify(data,null,2));
console.log("Username:", data.username);
console.log("Role:", data.role);
    if(data.access)
    {
        localStorage.setItem("accessToken:",data.access);
        console.log("Access Token Saved",localStorage.getItem("accessToken"))
        localStorage.setItem("resfreshToken:",data.refresh);
        const tokenParts=data.access.split(".");
        const payLoad=JSON.parse(atob(tokenParts[1]));
        console.log("JWT payload:",payLoad);
        localStorage.setItem("username",payLoad.username);
        localStorage.setItem("role",payLoad.role)
        console.log("Login Successful")

    } 
})
.catch(error=>{console.log("Login Error:",error);

    loginMessage.textContent="Something Went Wrong";
    loginMessage.style.color="red";
}).finally(()=>{
    loginButton.textContent="Login";
    loginButton.disabled=false
});


// setTimeout(function(){
// loginMessage.textContent="Login infromation is Valid!";

// loginMessage.style.color="green";


// loginButton.textContent="Login";
// loginButton.disabled=false;

// },2000);


});

