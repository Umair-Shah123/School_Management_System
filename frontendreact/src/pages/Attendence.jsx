import DashboardLayout from "../layouts/Dashboardlayout";
import { getattendance,createattendance } from "../api/attendanceapi";
import { useState,useEffect } from "react";
import { getstudents } from "../api/studentapi";
import { getteachers } from "../api/teacherapi";
import { getclasses } from "../api/classapi";


function Attendance() {
const[attendance,setAttendance]=useState([]);
  const[student,setStudent]=useState([]);
  const[selectedstudent,setSelectedstudent]=useState("");
  const[selectedstatus,setSelectedstatus]=useState("");
  const[teachers,setTeacher]=useState([]);
  const[selectedteacher,setSelectedteacher]=useState("");
  const[classes,setClasses]=useState([]);
  const[selectedclass,setSelectedclass]=useState("");
const [editingAttendance, setEditingAttendance] = useState(null);
useEffect(()=>{
  async function loadAttendance() {
    const attendancedata= await getattendance();
    setAttendance(attendancedata);

  }
  loadAttendance();
},[]);
useEffect(()=>{
  async function loadStudents(params) {
    const studentdata=await getstudents();
    setStudent(studentdata);

    
  }
  loadStudents();
},[]);

useEffect(()=>{
  async function loadTeachers() {
    const teacherdata=await getteachers();
    console.log("teacher:",teacherdata);
    setTeacher(teacherdata);
  }
  loadTeachers();
},[]);
useEffect(()=>{
  async function loadClasses() {
    const classdata=await getclasses();
    setClasses(classdata);
  }
  loadClasses();
},[]);

async function handleSaveAttendance()
{
  const attendanceData={
    student_id:selectedstudent,
    teacher_id:selectedteacher,
    classes_id:selectedclass,
    date : new Date().toISOString().split("T")[0],
    status:selectedstatus
  }
  const result= createattendance(attendanceData);
    console.log("Result:", result);
}

  return (
    <DashboardLayout>

      <div className="page-header">
    
        <div>
          <h1>Attendance</h1>
          <p>Manage student attendance.</p>
        </div>

        <button className="primary-button">
          + Mark Attendance
        </button>
      </div>
          <div className="content-card">
  <div className="section-title">
    <h2>Mark Attendance</h2>
  </div>

  <div className="form-group">
    <label>Student</label>
    <select value={selectedstudent} onChange={(e)=>setSelectedstudent(e.target.value)}>
      <option value="">Select Student</option>
      {student.map((student)=>
      <option value={student.id} key={student.id}>{student.name}</option>
      )}
    </select>
  </div>
  <div className="form-group">
  <label>Status</label>

  <select value={selectedstatus} onChange={(e)=>setSelectedstatus(e.target.value)}>
    <option value="">Select Status</option>
    <option value="Present">Present</option>
    <option value="Absent">Absent</option>
  </select>
</div>
<div className="form-group">
  <label>Teacher</label>

  <select
    value={selectedteacher}
    onChange={(e) => setSelectedteacher(e.target.value)}
  >
    <option value="">Select Teacher</option>

    {teachers.map((teacher) => (
      <option key={teacher.id} value={teacher.id}>
        {teacher.name}
      </option>
    ))}
  </select>
</div>
<div className="form-group">
  <label>Class</label>

  <select
    value={selectedclass}
    onChange={(e) => setSelectedclass(e.target.value)}
  >
    <option value="">Select Class</option>

    {classes.map((classroom) => (
      <option key={classroom.id} value={classroom.id}>
        {classroom.name} - {classroom.section}
      </option>
    ))}
  </select>
</div>
<button className="primary-button" onClick={handleSaveAttendance} >
  Save Attendance
</button>
</div>

      <div className="content-card">

        <div className="section-title">
          <h2>Today's Attendance</h2>
          <span>{attendance.length} Students</span>
        </div>

        <div className="student-table">

          <div className="table-row table-header attendance-row">
            <span>Student</span>
            <span>Roll No</span>
            <span>Class</span>
            <span>section</span>
            <span>Teacher</span>
            <span>date</span>
            <span>Status</span>
          </div>
        {attendance.map((attendance)=>
        <div className="table-row attendance-row" key={attendance.id}>
            <span>{attendance.student.name}</span>
            <span>{attendance.student.roll_no}</span>
            <span>{attendance.classes?.name}</span>
            <span>{attendance.classes?.section}</span>
            <span>{attendance.teacher?.name}</span>
            <span>{attendance.date}</span>
   <span className={`status ${attendance.status === "Present" ? "Present" : "Absent"}`}>
      {attendance.status}
    </span>         
    <button className="secondary-button" onClick={()=>setEditingAttendance(attendance)}>
  Edit
</button>
     </div>
)}
          
          
         
         
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Attendance;