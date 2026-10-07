import DashboardLayout from "../layouts/Dashboardlayout";
import { getsubjects } from "../api/subjectapi";
import { useState,useEffect } from "react";
function Subject() {
  const [subjects,setSubject]=useState([]);
  useEffect(()=>{
    async function loadSubjects() {
      const subjectdata=await getsubjects();
      setSubject(subjectdata);
    }
    loadSubjects();
  },[]);
  return (
    <DashboardLayout>

      <div className="page-header">
        <div>
          <h1>Subjects</h1>
          <p>Manage all subjects in the school.</p>
        </div>

        <button className="primary-button">
          + Add Subject
        </button>
      </div>

      <div className="content-card">

        <div className="section-title">
          <h2>Subject List</h2>
          <span>{subjects.length} Subjects</span>
        </div>

        <div className="student-table">

          <div className="table-row table-header">
            <span>Subject</span>
            <span>Teacher</span>
            <span>Class</span>
            <span>Section</span>
            {/* <span>Status</span> */}
          </div>
        {subjects.map((subject)=>
        
        <div className="table-row"key={subject.id}>
            <span>{subject.name}</span>
            <span>{subject.teacher.name}</span>
            <span>{subject.classes.name}</span>
            <span>{subject.classes.section}</span>
            {/* <span>{subject.teacher.name}</span> */}
            {/* <span className="status active">Active</span> */}
          </div>
        
        )}
        
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Subject;