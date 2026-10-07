console.log("Dashboard connected");
const username=localStorage.getItem("username");
const role=localStorage.getItem("role");

console.log("username",username);
console.log("role",role);

const userElementname=document.getElementById("username");
const roleElement=document.getElementById("userRole");
const welcomeUsername=document.getElementById("welcomeUsername");

if(username){
    userElementname.textContent=username;
    welcomeUsername.textContent=username;
}
if(role)
{
    roleElement.textContent=role;
}

const token=localStorage.getItem("accessToken");

fetch("http://127.0.0.1:8000/api/student/all/",{
    method:"GET",
    headers:{"Authorization":"Bearer "+token}
})
.then(response=>{
    if(!response.ok)
    {
        throw new Error ("Request Failed:"+response.status);
        
        
    }
    return response.json();
}).then(data=>{console.log("Students:",data);


}).catch(error=>{console.log("Student API Error:",error);

});
