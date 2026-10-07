import DashboardLayout from "../layouts/Dashboardlayout";
import { gettimetable } from "../api/timetableapi";
import { useState,useEffect } from "react";

function Timetable() {
  const [timetable,setTimetable]=useState([]);
  useEffect(()=>{
    async function loadTime()
    {
      const timedata=await gettimetable();
      console.log("Time:",timedata)
      setTimetable(timedata);
    }
    loadTime();
  },[]);
  return (
    <DashboardLayout>

      <div className="page-header">
        <div>
          <h1>Timetable</h1>
          <p>Manage class schedules and timings.</p>
        </div>

        <button className="primary-button">
          + Add Schedule
        </button>
      </div>

      <div className="content-card">

        <div className="section-title">
          <h2>Class Timetable</h2>
          <span>{timetable.length} Schedules</span>
        </div>

        <div className="student-table">

          <div className="table-row table-header attendance-row">
            <span>Day</span>
            <span>Subject</span>
            <span>Class</span>
            <span>Section</span>

            <span>Teacher</span>
            <span>Slot</span>
          </div>
        {timetable.map((time)=>
        <div className="table-row attendance-row" key={time.id}>
            <span>{time.day}</span>
            <span>{time.subject?.name}</span>
            <span>{time.classroom?.name}</span>
            <span>{time.classroom?.section}</span>
            <span>{time.teacher?.name}</span>
            <span>{time.start_time}</span>
          </div>
)}
       
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Timetable;