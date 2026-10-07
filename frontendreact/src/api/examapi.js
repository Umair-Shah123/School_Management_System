const API_URL="http://127.0.0.1:8000/api/exam"
export async function getexams() {
    const response=await fetch(`${API_URL}/all/`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    });
    if(!response.ok)
    {
        throw new Error("Failed to fetch Exams");
    }
    return response.json();
}