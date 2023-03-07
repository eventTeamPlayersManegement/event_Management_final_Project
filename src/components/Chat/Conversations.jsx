import { useEffect, useState } from "react";
import config from "../../content/data.json";

function Conversations({ user, setSelected, createConversation }) {
  const [conversationList, setConversationList] = useState(user);

  const setSelection = async (id) => {
    const res = await fetch(`${config.baseURL}/api/conversation/${id}`);
    const data = await res.json();
    setSelected(data);
  };

  useEffect(() => {
    if (user.admin) {
      fetch(`${config.baseURL}/api/conversation`)
        .then((res) => res.json())
        .then((json) => {
          setSelected(json[json.length - 1]);
          setConversationList({ ...user, conversations: json });
        });
    } else {
      setSelected(user.conversations[0]);
      setConversationList(user);
    }
  }, [user.conversations.length]);

  return (
    <div className="conversations">
      <button onClick={createConversation}>create</button>
      {conversationList?.conversations?.map((el) => (
        <button
          onClick={() => {
            setSelection(el._id);
          }}
          key={el._id}
        >
          {new Date(el.createdAt).toLocaleString("de", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
          {user.admin && <p>{el.chats[0]?.writer.data.name}</p>}
        </button>
      ))}
    </div>
  );
}

export default Conversations;
