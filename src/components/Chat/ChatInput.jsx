import React, { useContext, useState } from "react";
import { EventContext } from "../../context/Context.jsx";
import CustomButton from "../lib/CustomButton.jsx";

import config from "../../content/data.json";
function ChatInput({ conversationId, userId }) {
  const [message, setMessage] = useState("");
  const [data, setData] = useContext(EventContext);
  const saveNewMessage = async (e) => {
    e.preventDefault();
    await fetch(`/api/conversation/${conversationId}`, {
      method: "PATCH",
      body: JSON.stringify({
        writer: userId,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    });
    setMessage("");
  };
  return (
    <form onSubmit={saveNewMessage} className="chatInput">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={!conversationId}
        placeholder={"Type your text..."}
      />
      {message.length > 0 && (
        <CustomButton submit={"Send"} style={"customBtnDefault"} />
      )}
    </form>
  );
}

export default ChatInput;
