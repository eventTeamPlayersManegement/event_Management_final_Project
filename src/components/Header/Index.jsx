import { useState, useContext } from "react";
import "./style.scss";
import navitems from "../../content/data.json";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo2.svg";
import Footer from "../Footer/Index.jsx";
import { EventContext } from "../../context/Context.jsx";

import Index from "../Chat/Index.jsx";
import { MdDashboard } from "react-icons/md";
import Switch from "react-switch";
import LanguageSwitcher from "../Switchlanguage/Index.jsx";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const [toggle, setToggle] = useState(false);
  const [toggleChat, setToggleChat] = useState(false);

  const navigate = useNavigate();
  const [data, setData] = useContext(EventContext);
  const { theme, setTheme, toggleModus } = useContext(EventContext)[2];
  // console.log(t("navItems", { returnObjects: true }));
  return (
    <header className="header">
      {toggleChat && <Index />}
      <nav className="nav container">
        <img
          src={Logo}
          className="nav__logo"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <label className="switchmodus">
          <span>{theme === "light" ? " 🌞 " : " 🌙 "}</span>
          <div className="switch">
            <Switch
              onChange={toggleModus}
              checked={theme === "light"}
              onColor={"#9505e3"}
              width={40}
              height={20}
            />
          </div>
        </label>
        <LanguageSwitcher />

        <ul className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          {navitems.navItems.map((el, i) => {
            return (
              <li
                className="nav__item"
                key={i}
                onClick={() => setToggle(!toggle)}
              >
                <Link to={`/${el}`} className="nav__link">
                  {t("navItems", { returnObjects: true })
                    [i].charAt(0)
                    .toUpperCase() +
                    t("navItems", { returnObjects: true })[i].slice(1)}
                </Link>
              </li>
            );
          })}

          <img className="logo" src={Logo} alt="logo" />
          <i
            className="uil uil-times-circle nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </ul>

        <div className="nav__icons">
          {data.user && (
            <div className="userData">
              <img
                src={data?.user?.user?.picture}
                alt="avatar"
                className="avatar"
              />
              <p className="nickName">{data?.user?.user?.nickname}</p>
            </div>
          )}
          {data.user ? (
            <i
              className="uil uil-signin"
              onClick={() => {
                navigate("/signin");
              }}
            ></i>
          ) : (
            <i
              className="uil uil-signout"
              onClick={() => {
                navigate("/signin");
              }}
            ></i>
          )}
          {data?.id && (
            <i
              className="uil uil-comment-message"
              onClick={() => setToggleChat(!toggleChat)}
            ></i>
          )}
          {data.dbuser?.admin && (
            <MdDashboard onClick={() => navigate("/dashboard")} />
          )}
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-bars nav__icon"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
