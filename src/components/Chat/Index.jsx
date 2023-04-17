import "./style.scss";
import ChatInput from "./ChatInput.jsx";
import ChatList from "./ChatList.jsx";
import Conversations from "./Conversations.jsx";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { EventContext } from "../../context/Context.jsx";
import { fetcher } from "../../library/api.jsx";

export default function () {
  const [data, setData] = useContext(EventContext);
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(`/api/users/${data.id}`, fetcher, {
    refreshInterval: 1000,
  });

  const [selected, setSelected] = useState("");

  if (error) return <div className="chatList">failed to load</div>;
  if (isLoading) return <div className="chatList">loading...</div>;
  const customStyles = {
    alone: { gridTemplateColumns: "1fr" },
    multiple: { gridTemplateColumns: "1fr 100px" },
  };
  return (
    <div className="chat">
      <div
        className={` top ${!selected && "notSelected"}`}
        style={!selected ? customStyles.alone : customStyles.multiple}
      >
        {selected && <ChatList selected={selected._id} />}
        <Conversations
          user={user}
          setSelected={setSelected}
          // createConversation={createConversation}
        />
      </div>
      {selected && (
        <ChatInput conversationId={selected._id} userId={user._id} />
      )}
    </div>
  );
}
