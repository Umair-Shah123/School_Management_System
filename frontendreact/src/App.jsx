// import {BrowserRouter,Routes,Route,Navigate} from"react-router-dom";

// import Login from "./pages/login";
// import Dashboard from "./pages/Dashboard";

// function App()
// {
//   return
//   (


//  <BrowserRouter>
//     <Routes>
//        <Route path='/login'element={<Login/>}/>
       
       
//       <Route path="/Dasboard" element={<Dashboard/>}/>
//     </Routes>
//     <Route path="*" element={<Navigate to='login/'replace/>}/>
//     </BrowserRouter>
  



//   );

  
// }
// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Class from "./pages/Class";
import Subject from "./pages/Subject";
import Attendance from "./pages/Attendence";
import Exams from "./pages/Exam";
import Fees from "./pages/Fees";
import Timetable from "./pages/Timetable";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/student" element={<Student/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/class" element={<Class/>}/>
        <Route path="/subject" element={<Subject/>}/>
        <Route path="attendance/"element={<Attendance/>}/>
        <Route path="exams/"element={<Exams/>}/>
        <Route path="fees/"element={<Fees/>}/>
        <Route path="timetable/"element={<Timetable/>}/>



        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;