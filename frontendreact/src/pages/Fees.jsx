import DashboardLayout from "../layouts/Dashboardlayout";
import { getfees } from "../api/feesapi";
import { useState,useEffect } from "react";
import { use } from "react";
function Fees() {
  const[fees,setFess]=useState([]);
  useEffect(()=>{
    async function loadFees() {
      const feesdata=await getfees();
      setFess(feesdata);
    }
    loadFees();
  },[]);
  return (
    <DashboardLayout>

      <div className="page-header">
        <div>
          <h1>Fees</h1>
          <p>Manage student fees and payments.</p>
        </div>

        <button className="primary-button">
          + Add Fee
        </button>
      </div>

      <div className="content-card">

        <div className="section-title">
          <h2>Fee Records</h2>
          <span>{fees.length} Records</span>
        </div>

        <div className="student-table">

          <div className="table-row table-header">
            <span>Student</span>
            <span>Amount</span>
            <span>Due Date</span>
            <span>Status</span>
          </div>
        {fees.map((item)=>
        <div className="table-row">
            <span>{item.student.name}</span>
            <span>{item.amount}</span>
            <span>{item.due_date}</span>
   <span className={`status ${item.status === "Paid" ? "Paid" : "UnPaid"}`}>
      {item.status}
    </span>          </div>

        )}
          
  

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Fees;