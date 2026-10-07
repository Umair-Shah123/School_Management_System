const API_URL=" http://127.0.0.1:8000/api/student"
export async function getstudents(){
    const token=localStorage.getItem("access");
    const response=await fetch(`${API_URL}/all/`,{
    method:"GET",
    headers:
    {
        "Authorization":`Bearer ${token}`,
        "Content-Type":"application/json",
    },
    });
    if(!response.ok)
    {
        throw new Error("Failed to fetch students");
    }
    return response.json();
}
