import "./style.scss";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../context/Context.jsx";
import config from "../../content/data.json";

export default function Index() {
  const [data, setData] = useContext(EventContext);
  return (
    <div className="signContainer">
      <div className="center">
        <h1>With One Click</h1>
        {!data.user ? (
          <a href={`/login`}>Sign In</a>
        ) : (
          <a href={`/logout`}>Sign Out</a>
        )}

        <img className="img" src={logo} alt="logo" />
      </div>
    </div>
  );
}
