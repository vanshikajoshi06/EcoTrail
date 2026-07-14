import "./Navbar.css";

function Navbar() { //reacts functional component?? ans: A JavaScript function that returns JSX and represents a reusable piece of UI.
  return (
    <nav className="navbar"> 
      {/* Logo */}
      <div className="logo">
        🌿 EcoTrail
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">AI Planner</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Action Buttons */}
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav> //javaScript syntax
  );
}

export default Navbar; //This makes the component available to other files.