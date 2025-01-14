import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import data from "./Data";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo"> {/* Use Link for navigation */}
          <h3>Felix<span>o.</span></h3>
        </Link>
        <ul className="nav__links">
          {
            data.map(item => (
              <li key={item.id}>
                <Link to={item.link}>{item.title}</Link> {/* Use Link for navigation */}
              </li>
            ))
          }
        </ul>
        <div className="app__navbar-smallScreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="app__navbar-smallScreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul className="app__navbar-smallScreen-links">
                <li className="p__opensans">
                  <Link to="/">Home</Link> {/* Use Link for navigation */}
                </li>
                <li className="p__opensans">
                  <Link to="/about">About</Link> {/* Use Link for navigation */}
                </li>
                <li className="p__opensans">
                  <Link to="/portfolio">Portfolio</Link> {/* Use Link for navigation */}
                </li>
                <li className="p__opensans">
                  <Link to="/achievements">Achievement</Link> {/* Use Link for navigation */}
                </li>
                <li className="p__opensans">
                  <Link to="/contact">Contacts</Link> {/* Use Link for navigation */}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
