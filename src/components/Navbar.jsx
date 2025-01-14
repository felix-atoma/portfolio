import React, { useState } from "react";
import "./Navbar.css"
import data from './Data'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <h3>Felix<span>o.</span></h3>
        </a>
        <ul className="nav__links">
          {
            data.map(item => <li key={item.id}> <a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        {/* <button className="menu__icon" onClick={menu}><IoMenuOutline /></button> */}
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
                  <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                  <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="p__opensans">
                  <a href="#achievements">Achievement</a>
                </li>
                <li className="p__opensans">
                  <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav >
  )
}

export default Navbar;
