import React, { useState } from "react";
import "./style.scss";
import navitems from "../../content/data.json";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          {navitems.navItems.map((el, i) => {
            return (
              <ul key={i} className="nav__list">
                <li className="nav__item" key={i}>
                  <Link key={i} to={`/${el}`} className="nav__link">
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
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-bars nav__icon"></i>
        </div>
      </nav>
    </header>
  );
}
