import React from "react";
import "./style.scss";
import contact from "../../content/data.json";
import { useState } from "react";

export default function Contact() {
  const initial = {
    name: "",
    email: "",
    title: "",
    message: "",
  };
  const [values, setValues] = useState(initial);

  const [isSuccess, setIsSuccess] = useState(false);

  const handlerInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValues(initial);
        setInterval(() => {
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 3000);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="form-container">
      <h1>{contact.contactUs[0]}</h1>

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handlerInput}
          value={values.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handlerInput}
          value={values.email}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handlerInput}
          value={values.title}
        />

        <textarea
          id="textarea-field"
          name="message"
          onChange={handlerInput}
          value={values.message}
          placeholder="Send as your message:"
          rows={25}
        ></textarea>

        <button type="submit">Send</button>
        {isSuccess && (
          <div className="success-message">Message sent successfully!!!!</div>
        )}
      </form>
    </div>
  );
}
