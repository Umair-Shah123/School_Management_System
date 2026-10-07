const API_URL="http://127.0.0.1:8000/api/teacher"
export async function getteachers() {
    const response=await fetch(`${API_URL}/all/`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    });
    if (!response.ok)
    {
        throw new Error("Teachers not Found");
    }
    return response.json();
}