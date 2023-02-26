import React, { useState } from "react";
import "./style.scss";
import navitems from "../../content/data.json";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Footer from "../Footer/Index.jsx";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="nav container">
        <img
          src={Logo}
          className="nav__logo"
          alt="logo"
          onClick={() => navigate("/about")}
        />

        <ul className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          {navitems.navItems.map((el, i) => {
            return (
              <li
                className="nav__item"
                key={i}
                onClick={() => setToggle(!toggle)}
              >
                <Link to={`/${el}`} className="nav__link">
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </Link>
              </li>
            );
          })}
          <img className="logo" src={Logo} alt="logo" />
          <i
            className="uil uil-times-circle nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
          <Footer />
        </ul>

        <div className="nav__icons">
          <i
            className="uil uil-signin"
            onClick={() => {
              navigate("/signin");
            }}
          ></i>
          <i
            className="uil uil-comment-message"
            onClick={() => navigate("/chat")}
          ></i>

          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-bars nav__icon"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
