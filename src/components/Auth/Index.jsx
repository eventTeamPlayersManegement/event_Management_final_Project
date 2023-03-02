import "./style.scss";
import CustomButton from "../lib/CustomButton.jsx";
import logo from "../../assets/Logo.svg";

import { useAuth0 } from "@auth0/auth0-react";

export default function Index() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <div className="signContainer">
      <div className="center">
        <h1>With One Click</h1>
        {isAuthenticated ? (
          <CustomButton
            submit={"SignOut"}
            style={"customBtnDefault"}
            dispach={() =>
              logout({
                logoutParams: { returnTo: window.location.origin },
              })
            }
          />
        ) : (
          <CustomButton
            submit={"SignIn"}
            style={"customBtnDefault"}
            dispach={loginWithRedirect}
          />
        )}
        <img className="img" src={logo} alt="logo" />
      </div>
    </div>
  );
}
