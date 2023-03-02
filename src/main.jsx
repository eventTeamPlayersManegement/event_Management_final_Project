import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import Context from "./context/Context";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const CLIENT = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Auth0Provider
          domain={DOMAIN}
          clientId={CLIENT}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);
