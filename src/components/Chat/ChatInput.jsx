import React, { useContext, useState } from "react";
import { EventContext } from "../../context/Context.jsx";
import CustomButton from "../lib/CustomButton.jsx";
function ChatInput({ conversationId, userId }) {
  const [message, setMessage] = useState("");
  const [data, setData] = useContext(EventContext);
  const saveNewMessage = async (e) => {
    e.preventDefault();
    await fetch(
      "https://final-project-backend-lkvb.onrender.com/api/conversation/" +
        conversationId,
      {
        method: "PATCH",
        body: JSON.stringify({
          writer: userId,
          message: message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    setMessage("");
  };
  return (
    <form onSubmit={saveNewMessage} className="chatInput">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        // disabled={!conversationId}
      />
      <CustomButton submit={"send"} style={"customBtnDefault"} />
    </form>
  );
}

export default ChatInput;
