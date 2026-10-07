// import Sidebar from "../components/Sidebar";
import Dashboardlayout from "../layouts/Dashboardlayout";

function Dashboard()
{
return (
     <div className="dashboard-layout">

      {/* <Sidebar /> */}

      {/* <main className="dashboard-content"> */}

       <Dashboardlayout>     
          <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back to your School Management System.</p>
          </div>

          <div className="admin-profile">
            <div className="profile-icon">👤</div>

            <div>
              <h3>Admin</h3>
              <span>Administrator</span>
            </div>
          </div>
        </header>
        <div className="stats-grid">

  <div className="stat-card">
    <div className="stat-icon">👨‍🎓</div>
    <div>
      <p>Total Students</p>
      <h2>120</h2>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">👨‍🏫</div>
    <div>
      <p>Total Teachers</p>
      <h2>25</h2>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">🏫</div>
    <div>
      <p>Total Classes</p>
      <h2>12</h2>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">📚</div>
    <div>
      <p>Total Subjects</p>
      <h2>18</h2>
    </div>
  </div>
  <div className="dashboard-section">

  <div className="section-header">
    <div>
      <h2>Recent Students</h2>
      <p>Recently added students</p>
    </div>

    <button className="view-button">
      View All
    </button>
  </div>

  <div className="student-table">

    <div className="table-row table-header">
      <span>Name</span>
      <span>Roll No</span>
      <span>Class</span>
      <span>Status</span>
    </div>

    <div className="table-row">
      <span>Ali Khan</span>
      <span>001</span>
      <span>10th</span>
      <span className="status active">Active</span>
    </div>

    <div className="table-row">
      <span>Ahmed Raza</span>
      <span>002</span>
      <span>10th</span>
      <span className="status active">Active</span>
    </div>

    <div className="table-row">
      <span>Hassan Ali</span>
      <span>003</span>
      <span>9th</span>
      <span className="status active">Active</span>
    </div>

    <div className="table-row">
      <span>Usman Ahmed</span>
      <span>004</span>
      <span>8th</span>
      <span className="status inactive">Inactive</span>
    </div>

  </div>

</div>

</div>
</Dashboardlayout>
 
      {/* </main> */}

    </div>
    
);
}

export default Dashboard;