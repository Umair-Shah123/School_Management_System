import DashboardLayout from "../layouts/Dashboardlayout";
import { getexams } from "../api/examapi";
import { useState,useEffect } from "react";
function Exams() {
const [exam,setExam]=useState([]);
useEffect(()=>{
  async function loadExam()
  {
    const examdata=await getexams();
    setExam(examdata);
  }
  loadExam();

},[]);
  return (
    <DashboardLayout>

      <div className="page-header">
        <div>
          <h1>Exams</h1>
          <p>Manage school examinations and results.</p>
        </div>

        <button className="primary-button">
          + Add Exam
        </button>
      </div>

      <div className="content-card">

        <div className="section-title">
          <h2>Exam List</h2>
          <span>{exam.length} Exams</span>
        </div>

        <div className="student-table">

          <div className="table-row table-header">
            <span>Exam</span>
            {/* <span>Class</span> */}
            <span>Date</span>
            {/* <span>Status</span> */}
          </div>

        {exam.map((item)=> 
           <div className="table-row" key={item.id}>
            <span>{item.name}</span>
            <span>{item.date}</span>
            {/* <span className="status active">Upcoming</span> */}
          </div>
)}
        

        
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Exams;