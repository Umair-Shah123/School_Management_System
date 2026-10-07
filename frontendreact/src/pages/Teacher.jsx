import DashboardLayout from "../layouts/Dashboardlayout";
import { getteachers } from "../api/teacherapi";
import { useEffect,useState } from "react";

function Teacher() {
const [teachers,setTeachers]=useState([]);
useEffect(()=>{
    async function loadTeachers() {
        const teacherdata= await getteachers();
        console.log("Teacher Data:",teacherdata);
        setTeachers(teacherdata);
        
    }
    loadTeachers();

},[]);


  return (
    <DashboardLayout>

      <div className="page-header"style={{marginleft:"40px"}}>
        <div>
          <h1>Teachers</h1>
          <p>Manage all teachers in the school.</p>
        </div>

        <button className="primary-button">
          + Add Teacher
        </button>
      </div>

      <div className="content-card">

        <div className="section-title">
          <h2>Teacher List</h2>
          <span>{teachers.length} Teachers</span>
        </div>

        <div className="student-table">

          <div className="table-row table-header">
            <span>Name</span>
            <span>Subject</span>
            <span>Phone</span>
            <span>Status</span>
          </div>
{teachers.map((teacher) => (
  <div className="table-row" key={teacher.id}>
    <span>{teacher.name}</span>
    <span>{teacher.subject}</span>
    <span>{teacher.phone}</span>
    <span className="status active">Active</span>
  </div>
))}
         
          

          
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Teacher;