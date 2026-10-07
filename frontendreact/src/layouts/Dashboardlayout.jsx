import Sidebar from "../components/Sidebar";

function Dashboardlayout({children})
{
 return (
<div className="dashboard-layout">

    <Sidebar/>
    <main className="dashboard-content">
        {children}
    </main>
</div>
 );
}
export default Dashboardlayout;