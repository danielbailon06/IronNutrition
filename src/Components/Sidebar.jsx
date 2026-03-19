import './Sidebar.css'
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Admin panel</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/new-product">Add product</Link>
      <Link to="/about">About</Link>
    </div>

  )
}

export default Sidebar
