
import Dashboardlayout from "../layouts/Dashboardlayout";
import { getstudents } from "../api/studentapi";
import { useState,useEffect } from "react";
function Student() {
  const [students,setStudents]=useState([]);
  useEffect(()=>{

    async function loadStudents() {
      const studentdata=await getstudents();
      console.log("DATA:",studentdata);
      setStudents(studentdata);
    }
    loadStudents();
  },[]);
  return (
   
    <div className="page-container">
      <Dashboardlayout>

      <div className="page-header">
        <div>
          <h1>Students</h1>
          <p>Manage all students in the school.</p>
        </div>

        <button className="primary-button">
          + Add Student
        </button>
      </div>

      <div className="content-card">

        <div className="section-title">
          <h2>Student List</h2>
          <span>{students.length} Students</span>
        </div>
        <div className="table-row table-header">
    <span>Name</span>
    <span>Roll No</span>
    <span>Class</span>
    <span>Status</span>
  </div>


        <div className="student-table">

          {
            students.map((student)=>(
             
              <div className="table-row"key={student.id}>
              <span>{student.name}</span>
              <span>{student.roll_no}</span>
              <span>{student.class_name}</span>
              <span className={`status ${student.status === "active" ? "active" : "inactive"}`}>
      {student.status}
    </span>
              </div>
            )
            
            )
          }

          

        </div>

      </div>
</Dashboardlayout>
    </div>
  );
}

export default Student;