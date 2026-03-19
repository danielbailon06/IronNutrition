import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">
          <img src={logo} alt="Iron Nutrition" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;