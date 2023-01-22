import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar">
        <div className="navbar">
          <Link to="/" className="navbar">
            home
          </Link>
          <Link to="/new" className="navbar">
            new listing
          </Link>
          <Link to="/marketplace" className="navbar">
            marketplace
          </Link>
        </div>
      </div>
    </nav>
  );
};

module.exports = NavBar;