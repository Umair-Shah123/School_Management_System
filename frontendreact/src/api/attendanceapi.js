const API_URL="http://127.0.0.1:8000/api/attendance"
export async function getattendance() {
    const response=await fetch(`${API_URL}/all/`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    });
    if(!response.ok)
    {
        throw new Error("Failed to fetch attendance");
    }
    return response.json();
}

export async function createattendance(attendanceData) {
    const token = localStorage.getItem("access");

    const response = await fetch(`${API_URL}/create_attendance/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(attendanceData),
    });

    const data = await response.json();

    console.log("Create Attendance Response:", data);

    if (!response.ok) {
        throw new Error("Failed to Create attendance");
    }

    return data;
}

export async function updateattendance(id,attendanceData) {
const token=localStorage.getItem("access");
const response=await fetch(`${API_URL}/update_attendance/${id}`,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(attendanceData),
}
    
);
const data=await response.json();

if(!response.ok)
{
    console.log("Update Attendance Error:",data)
    throw new Error("Failed to update attendance");
}
    
}