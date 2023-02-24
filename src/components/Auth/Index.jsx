import { useState } from "react";
import Input from "./Input.jsx";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
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
  return (
    <div className="formContainer">
      <h1>{data.submit}</h1>
      <form className="form" onSubmit={handleSubmit}>
        {Object.keys(data.fields).map((el, id) => (
          <Input
            key={id}
            data={{ name: el, type: data.fields[el] }}
            handleChange={handleChange}
            dataUser={dataUser}
          />
        ))}
        <button>{data.submit}</button>
      </form>
      <NavLink to={data.submit === "signin" ? "/signup" : "/signin"}>
        Go to the {data.submit === "signin" ? "signup" : "signin"}
      </NavLink>
    </div>
  );
}
