import DashboardLayout from "../layouts/Dashboardlayout";
import { getclasses } from "../api/classapi";
import { useState,useEffect } from "react";
import Teacher from "./Teacher";

function Class() {
  const [classes,setClass]=useState([]);
  useEffect(()=>{
    async function  loadClasses() {
      const classdata=await getclasses();
      setClass(classdata);
      
    }
    loadClasses();
  },[]);
  return (
    <DashboardLayout>

      <div className="page-header">
        <div>
          <h1>Classes</h1>
          <p>Manage all classes in the school.</p>
        </div>

        <button className="primary-button">
          + Add Class
        </button>
      </div>

      <div className="content-card">

        <div className="section-title">
          <h2>Class List</h2>
          <span>{classes.length} Classes</span>
        </div>

        <div className="student-table">

          <div className="table-row table-header">
            <span>Class</span>
            <span>Section</span>
            <span>Teacher</span>
          </div>
        {classes.map((classroom)=>
          <div className="table-row" key={classroom.id}>
            <span>{classroom.name}</span>
            <span>{classroom.section}</span>
            <span>{classroom.teacher.name}</span>

          </div>
  ) 
         

        } 
         
          
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Class;