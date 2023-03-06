import "./style.scss";
import ChatInput from "./ChatInput.jsx";
import ChatList from "./ChatList.jsx";
import Conversations from "./Conversations.jsx";
import { useContext, useState } from "react";
import useSWR from "swr";
import { EventContext } from "../../context/Context.jsx";
import { fetcher } from "../../library/api.jsx";
import config from "../../content/data.json";

export default function () {
  const [data, setData] = useContext(EventContext);
  const [selected, setSelected] = useState([]);

  const createConversation = () => {
    fetch(`${config.baseURL}/api/conversation`, {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const {
    data: conversations,
    error,
    isLoading,
  } = useSWR(`${config.baseURL}/api/users/sub/${data.id}`, fetcher, {
    refreshInterval: 1000,
  });
  if (error) return <div className="chatList">failed to load</div>;
  if (isLoading) return <div className="chatList">loading...</div>;

  if (!conversations?.conversations.length && !conversations?.admin) {
    createConversation();
  }
  return (
    <div className="chat">
      <div className="top">
        <ChatList selected={selected._id} />
        <Conversations
          conversations={conversations}
          setSelected={setSelected}
          createConversation={createConversation}
        />
      </div>
      <ChatInput conversationId={selected._id} userId={conversations._id} />
    </div>
  );
}
