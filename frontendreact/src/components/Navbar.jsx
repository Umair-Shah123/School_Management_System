function Navbar({username,role})
{
    return (
<nav>
    <h2>School Managements system</h2>
    <p>Welcome,{username} {role}</p>
    <p>Role:{role}</p>
</nav>
    )
}

export default Navbar