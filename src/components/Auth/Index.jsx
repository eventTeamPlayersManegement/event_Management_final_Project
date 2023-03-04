import "./style.scss";
import logo from "../../assets/Logo.svg";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../context/Context.jsx";

export default function Index() {
  const [data, setData] = useContext(EventContext);
  return (
    <div className="signContainer">
      <div className="center">
        <h1>With One Click</h1>
        {!data.user ? (
          <Link to={"http://localhost:3000/login"}>Login</Link>
        ) : (
          <Link to={"http://localhost:3000/logout"}>Logout</Link>
        )}

        <img className="img" src={logo} alt="logo" />
      </div>
    </div>
  );
}
