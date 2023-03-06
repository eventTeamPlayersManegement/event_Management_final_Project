import useSWR from "swr";
import { fetcher } from "../../library/api.jsx";
import config from "../../content/data.json";

function ChatList({ selected }) {
  console.log(selected);
  const {
    data: conversations,
    error,
    isLoading,
  } = useSWR(`${config.baseURL}/api/conversation/${selected}`, fetcher, {
    refreshInterval: 1000,
  });
  if (error) return <div className="chatList">failed to load</div>;
  if (isLoading) return <div className="chatList">loading...</div>;

  return (
    <div className="chatList">
      {conversations?.chats?.map((el) => (
        <div className="message">
          <img src={el.writer.data.picture} />
          <p>{el.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
