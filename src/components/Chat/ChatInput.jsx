import React, { useContext, useState } from "react";
import { EventContext } from "../../context/Context.jsx";
function ChatInput() {
  const [message, setMessage] = useState("");
  const [data, setData] = useContext(EventContext);
  const saveNewMessage = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      body: JSON.stringify({
        writer: data.id,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setMessage("");
  };
  return (
    <form onSubmit={saveNewMessage} className="chatInput">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>send</button>
    </form>
  );
}

export default ChatInput;
