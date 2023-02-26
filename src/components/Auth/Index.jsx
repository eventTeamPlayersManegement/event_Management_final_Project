import { useState } from "react";
import Input from "./Input.jsx";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import "./style.scss";
import CustomButton from "../lib/CustomButton.jsx";
import logo from "../../assets/Logo.svg";

export default function Index({ data }) {
  const INITIAL = Object.keys(data.fields).reduce((acc, el) => {
    acc[el] = "";
    return acc;
  }, {});
  const [dataUser, setDataUser] = useState(INITIAL);
  const handleChange = (e) => {
    setDataUser(
      (prev) => (prev = { ...prev, [e.target.name]: e.target.value })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const sign = toast.loading(`try to ${data.submit}`);
    fetch(
      "https://final-project-backend-lkvb.onrender.com/api/users/" +
        data.submit,
      {
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.aprooved) {
          toast.success(`${json.message}`, { id: sign });
          setDataUser(INITIAL);
        } else {
          toast.error(
            `${data.submit} fail.
           ${json.message}`,
            { id: sign }
          );
        }
      });
  };
  const capitalize = (str) => {
    const result =
      str[0].toUpperCase() +
      str.slice(1, -2) +
      str[str.length - 2].toUpperCase() +
      str.slice(-1);
    return result;
  };
  return (
    <div className="formContainer">
      <img className="logo" src={logo} alt="logo" />
      <h1>{capitalize(data.submit)}</h1>
      <form className="form" onSubmit={handleSubmit}>
        {Object.keys(data.fields).map((el, id) => (
          <Input
            key={id}
            data={{ name: el, type: data.fields[el] }}
            handleChange={handleChange}
            dataUser={dataUser}
          />
        ))}
        <CustomButton
          submit={capitalize(data.submit)}
          style={"customBtnDefault"}
        />
      </form>
      <p className="routeText">
        {data.submit === "register"
          ? "Have already an account"
          : "Create an account"}{" "}
        <NavLink to={data.submit === "signin" ? "/signup" : "/signin"}>
          {data.submit === "signup" ? "SignIn" : "SignUp"}
        </NavLink>
      </p>
    </div>
  );
}
