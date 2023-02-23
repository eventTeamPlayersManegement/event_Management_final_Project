import React from "react";
import "./style.scss";
import contact from "../../content/data.json";

export default function Contact() {
  return (
    <div className="form-container">
      <h1>{contact.contactUs[0]}</h1>
      <form>
        <input type="text" placeholder="Title" />

        <textarea
          id="textarea-field"
          name="textarea-field"
          placeholder="Send as your message:"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
