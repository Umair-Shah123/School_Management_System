const API_URL="http://127.0.0.1:8000/api/subject"
export async function getsubjects() {
    const response=await fetch(`${API_URL}/all/`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    });
    if(!response.ok)
    {
        throw new Error("Failed to fetch subjects");
    }
    return response.json();
}