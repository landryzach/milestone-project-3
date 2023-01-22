import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div>
        <div className="links">
          <Link to="/">
            Home
          </Link>
          <Link to="/new">
            New Listing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
