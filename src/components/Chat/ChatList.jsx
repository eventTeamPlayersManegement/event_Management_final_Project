import useSWR from "swr";
import { fetcher } from "../../library/api.jsx";

function ChatList({ selected }) {
  const {
    data: conversations,
    error,
    isLoading,
  } = useSWR(`/api/conversation/${selected}`, fetcher, {
    refreshInterval: 1000,
  });
  if (error) return <div className="chatList">failed to load</div>;
  if (isLoading) return <div className="chatList">loading...</div>;
  return (
    <div className="chatList">
      {conversations?.chats?.map((el) => (
        <div className="message" key={el._id}>
          <div className="userBlock">
            <img src={el.writer.data.picture} />
            <p>{el.writer.data.name}:</p>
          </div>
          <div className="messages">
            <p>{el.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
