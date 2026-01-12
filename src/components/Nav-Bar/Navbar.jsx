import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextData } from "../../ContectContent/ContextContent";

export default function NavBar() {
  const { UserToken, setUserToken } = useContext(ContextData);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("UserToken");
    setUserToken(null); // <-- Navbar يتحدث فورًا
    navigate("/");
  };

  const isLoggedIn = !!UserToken;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-film"></i> MovieApp
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    <i className="bi bi-house"></i> Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="trendingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-graph-up"></i> Trending
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="trendingDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/people">
                        <i className="bi bi-people"></i> People
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bi bi-tv"></i> TV
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleSignOut}
                  >
                    <i className="bi bi-person-x"></i> SignOut
                  </button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    <i className="bi bi-person-plus"></i> SignUp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    <i className="bi bi-box-arrow-in"></i> Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
