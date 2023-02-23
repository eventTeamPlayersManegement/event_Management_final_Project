import React from "react";
import contact from "../../content/data.json";

export default function Contact() {
  return (
    <div>
      <h1>{contact.contactUs[0]}</h1>
      <form>
        <div>
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
