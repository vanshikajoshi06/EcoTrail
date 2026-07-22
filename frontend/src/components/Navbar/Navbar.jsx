import { useState } from "react";
import "./Navbar.css";

function Navbar() { //reacts functional component?? ans: A JavaScript function that returns JSX and represents a reusable piece of UI.

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Explore",
    "AI Planner",
    "Journal",
    "About",
    "Contact"
  ];

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="nav-left">

        <div className="logo">
          🌿 EcoTrail
        </div>

          <ul className="nav-links desktop-nav">

            {navLinks.map((link) => (

              <li key={link}>
                <a href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>

      </div>

      <div className="nav-right">

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>

        <button
          className="menu-btn"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

      </div>
    </nav> //javaScript syntax
  );
}

export default Navbar; //This makes the component available to other files.