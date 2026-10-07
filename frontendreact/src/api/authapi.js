const API_URL=" http://127.0.0.1:8000/api/auth"
export  async function loginUser(username,password)
{
    const response=await fetch(`${API_URL}/login/`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            username:username,
            password:password
        }),
    });
    if(!response.ok)
    {
        throw new Error("Login Failed");
        
    }
    return response.json();
}
