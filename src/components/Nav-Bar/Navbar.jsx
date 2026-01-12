import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextData } from "../../ContectContent/ContextContent";

export default function NavBar() {
  const { UserToken, setUserToken } = useContext(ContextData);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false); // state للهامبرغر

  const handleSignOut = () => {
    localStorage.removeItem("UserToken");
    setUserToken(null);
    navigate("/");
    setIsOpen(false); // اغلق القائمة بعد SignOut
  };

  const isLoggedIn = !!UserToken;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-film"></i> MovieApp
        </Link>

        {/* Toggle button للهامبرغر */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/home"
                    onClick={() => setIsOpen(false)}
                  >
                    <i className="bi bi-house"></i> Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="bi bi-graph-up"></i> Trending
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/people"
                        onClick={() => setIsOpen(false)}
                      >
                        <i className="bi bi-people"></i> People
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() => setIsOpen(false)}
                      >
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
                  <NavLink
                    className="nav-link"
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                  >
                    <i className="bi bi-person-plus"></i> SignUp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={() => setIsOpen(false)}
                  >
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
