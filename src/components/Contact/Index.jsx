import React from "react";
import "./style.scss";
import contact from "../../content/data.json";
import { useState } from "react";

export default function Contact() {
  const initial = {
    title: "",
    message: "",
  };
  const [values, setValues] = useState(initial);
  const handlerInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(values);
    setValues(initial);
  };
  return (
    <div className="form-container">
      <h1>{contact.contactUs[0]}</h1>
      <form onSubmit={onSubmitHandler}>
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
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
