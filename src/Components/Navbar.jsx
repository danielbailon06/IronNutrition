import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
          <img src={logo} alt="Iron Nutrition" />
      </div>
    </nav>
  );
}

export default Navbar;