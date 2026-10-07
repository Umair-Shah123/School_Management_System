// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <aside className="sidebar">

//       <div className="sidebar-logo">
//         🎓
//         <span>School System</span>
//       </div>

//       <nav>
//         <Link href="/dashboard">🏠 Dashboard </Link>
//         <Link href="/students">👨‍🎓 Students</Link>
//         <Link href="/teachers">👨‍🏫 Teachers</Link>
//         <Link href="/classes">🏫 Classes</Link>
//         <Link href="/subjects">📚 Subjects</Link>
//         <Link href="/attendance">📅 Attendance</Link>
//         <Link href="/exams">📝 Exams</Link>
//         <Link href="/fees">💰 Fees</Link>
//         <Link href="/timetable">🕐 Timetable</Link>
//       </nav>

//     </aside>
//   );
// }

// export default Sidebar;

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        🎓
        <span>School System</span>
      </div>

      <nav>
        <Link to="/dashboard">🏠 Dashboard</Link>
        <Link to="/student">👨‍🎓 Students</Link>
        <Link to="/teacher">👨‍🏫 Teachers</Link>
        <Link to="/class">🏫 Classes</Link>
        <Link to="/subject">📚 Subject</Link>
        <Link to="/attendance">📅 Attendance</Link>
        <Link to="/exams">📝 Exams</Link>
        <Link to="/fees">💰 Fees</Link>
        <Link to="/timetable">🕐 Timetable</Link>
      </nav>

    </aside>
  );
}

export default Sidebar;