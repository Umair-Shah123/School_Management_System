import { useState } from "react";
import { loginUser } from "../api/authapi";
import {  useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const data=await loginUser(username,password);
    console.log("LOGIN DATA:", data);
  console.log("ACCESS TOKEN:", data.access);

  localStorage.setItem("access", data.access);
  navigate("/dashboard");
  }

  return (
    <div className="login-page">

      {/* Background decorations */}
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      {/* Left Content */}
      <div className="welcome-section">
        <div className="logo">
          🎓
        </div>

        <h1>
          School
          <span>Management System</span>
        </h1>

        <p className="welcome-text">
          Manage your school smarter, faster, and more efficiently.
          Keep students, teachers, classes, attendance, exams, and
          fees organized in one powerful platform.
        </p>

        <div className="features">
          <div className="feature">
            <span>✓</span>
            Student Management
          </div>

          <div className="feature">
            <span>✓</span>
            Teacher & Classroom Management
          </div>

          <div className="feature">
            <span>✓</span>
            Attendance & Examination
          </div>

          <div className="feature">
            <span>✓</span>
            Fees & Timetable Management
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="login-container">

        <h2>Welcome Back</h2>

        <p className="login-subtitle">
          Sign in to access your dashboard
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit">
            Sign In
          </button>

        </form>

        <p className="login-footer">
          Secure access to your school management portal
        </p>

      </div>

    </div>
  );
}

export default Login;