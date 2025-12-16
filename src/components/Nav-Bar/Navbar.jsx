import Riact, { useState } from "react";
import { Link, NavLink } from "react-router";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-film"></i> MovieApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item ">
              <NavLink
                className={`nav-link ${
                  activeLink === "home" ? "active-link" : ""
                }`}
                to="/"
                onClick={() => setActiveLink("home")}
              >
                <i className="bi bi-house"></i> Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={`nav-link dropdown-toggle ${
                  activeLink === "trending" ? "active-link" : ""
                }`}
                to="move"
                id="trendingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setActiveLink("trending")}
              >
                <i className="bi bi-graph-up"></i> Trending
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="trendingDropdown">
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
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  activeLink === "signup" ? "active-link" : ""
                }`}
                to="/signup"
                onClick={() => setActiveLink("signup")}
              >
                <i className="bi bi-person-plus"></i> SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  activeLink === "login" ? "active-link" : ""
                }`}
                to="/login"
                onClick={() => setActiveLink("login")}
              >
                <i className="bi bi-box-arrow-in"></i> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
