import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  return (

    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}

        <NavLink
          to="/"
          className="logo"
        >

          <img
            src={logo}
            alt="NextGoal Fitness"
          />

        </NavLink>

        {/* Desktop Menu */}

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
          >

            <i className="bi bi-x-lg"></i>

          </button>

          <ul>

            <li>

              <NavLink to="/">
                Home
              </NavLink>

            </li>

            <li>

              <NavLink to="/about">
                About
              </NavLink>

            </li>

<li className="dropdown">

  <span
    onClick={() => setProgramOpen(!programOpen)}
  >
    Programs

    <i
      className={`bi ${
        programOpen
          ? "bi-chevron-up"
          : "bi-chevron-down"
      }`}
    ></i>

  </span>

  <ul className={`dropdown-menu ${programOpen ? "show" : ""}`}>

                <li>

                  <NavLink
                    to="/gym"
                    onClick={() => setMenuOpen(false)}
                  >

                    Gym

                  </NavLink>

                </li>

                <li>

                  <NavLink
                    to="/sports-academy"
                    onClick={() => setMenuOpen(false)}
                  >

                    Sports Academy

                  </NavLink>

                </li>

              </ul>

            </li>

                        <li>

              <NavLink to="/fees">

                Fees & Offers

              </NavLink>

            </li>

            <li>

              <NavLink to="/contact">

                Contact

              </NavLink>

            </li>

          </ul>

        </nav>

        {/* Right Section */}

        <div className="nav-right">

          <div className="call-box">

            <div className="call-icon">

              <i className="bi bi-telephone-fill"></i>

            </div>

            <div className="call-text">

              <span>

                Call Anytime

              </span>

              <h4>

                +91 95788 52900

              </h4>

            </div>

          </div>

        <Link to="/cta" className="join-btn">
  JOIN NOW
  <i className="bi bi-arrow-right"></i>
</Link>

        </div>

        {/* Mobile Menu */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >

          <i className="bi bi-list"></i>

        </button>

      </div>

      {menuOpen && (

        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>

      )}

    </header>

  );

}

export default Navbar;