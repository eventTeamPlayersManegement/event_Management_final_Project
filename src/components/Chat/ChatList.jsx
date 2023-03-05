import { useContext } from "react";
import useSWR from "swr";
import { EventContext } from "../../context/Context.jsx";
import { fetcher } from "../../library/api.jsx";

function ChatList() {
  const [data, setData] = useContext(EventContext);
  const {
    data: messages,
    error,
    isLoading,
  } = useSWR("http://localhost:3000/api/users/" + data.id, fetcher, {
    refreshInterval: 1,
  });

  if (error) return <div className="chatList">failed to load</div>;
  if (isLoading) return <div className="chatList">loading...</div>;
  console.log(messages);
  return (
    <div className="chatList">
      {messages.chats.map((el) => (
        <div className="message">
          <img src={messages.data.picture} alt="avatar" />
          <p>{el.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
