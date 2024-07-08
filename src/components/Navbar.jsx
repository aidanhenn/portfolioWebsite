import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  console.log("Home rendered"); // Debugging log

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            class="social-icon-link Github"
            to="https://github.com/aidanhenn"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-github" />
          </Link>
          <Link
            class="social-icon-link linkedin"
            to="https://www.linkedin.com/in/aidan-hennessy/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin" />
          </Link>

          <Link
            class="social-icon-link Resume"
            to="https://drive.google.com/file/d/1t-if2LuZs7DuIe-sAI6Q0Q-KDr7h69f3/view?usp=sharing"
            target="_blank"
            aria-label="Resume"
          >
            <i class="fa fa-file-text" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
    
            <li className="nav-item">
              <Link
                to="/contact-me"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
               Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
