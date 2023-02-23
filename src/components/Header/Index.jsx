import React, { useState } from "react";
import "./style.scss";
import navitems from "../../content/data.json";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <header className="header">
      <nav className="nav container">
        <img src={Logo} className="nav__logo" alt="" />

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          {navitems.navItems.map((el, i) => {
            return (
              <ul className="nav__list">
                <li className="nav__item" key={i}>
                  <Link to={`/${el}`} className="nav__link">
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                  </Link>
                </li>
              </ul>
            );
          })}

          <i
            className="uil uil-times-circle nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__icons">
          <i className="uil uil-signin"></i>
          <i className="uil uil-comment-message"></i>

          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-bars nav__icon"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
