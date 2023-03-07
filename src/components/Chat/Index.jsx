import "./style.scss";
import ChatInput from "./ChatInput.jsx";
import ChatList from "./ChatList.jsx";
import Conversations from "./Conversations.jsx";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { EventContext } from "../../context/Context.jsx";
import { fetcher } from "../../library/api.jsx";
import config from "../../content/data.json";

export default function () {
  const [data, setData] = useContext(EventContext);
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(`${config.baseURL}/api/users/sub/${data.id}`, fetcher, {
    refreshInterval: 1000,
  });

  const [selected, setSelected] = useState({});

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

  if (error) return <div className="chatList">failed to load</div>;
  if (isLoading) return <div className="chatList">loading...</div>;

  if (!user?.conversations.length && !user?.admin) {
    createConversation();
  }

  return (
    <div className="chat">
      <div className="top">
        {selected._id && <ChatList selected={selected._id} />}
        <Conversations
          user={user}
          setSelected={setSelected}
          createConversation={createConversation}
        />
      </div>
      <ChatInput conversationId={selected._id} userId={user._id} />
    </div>
  );
}
