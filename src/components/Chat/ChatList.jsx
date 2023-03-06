import useSWR from "swr";
import { fetcher } from "../../library/api.jsx";

function ChatList({ selected }) {
  console.log(selected);
  const {
    data: conversations,
    error,
    isLoading,
  } = useSWR(
    "https://final-project-backend-lkvb.onrender.com/api/conversation/" +
      selected,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );
  if (error) return <div className="chatList">failed to load</div>;
  if (isLoading) return <div className="chatList">loading...</div>;
  console.log(conversations);
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