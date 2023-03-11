import { useEffect, useState } from "react";
import config from "../../content/data.json";
import CustomButton from "../lib/CustomButton.jsx";

function Conversations({ user, setSelected, createConversation }) {
  const [conversationList, setConversationList] = useState(user);

  const setSelection = async (id) => {
    const res = await fetch(`/api/conversation/${id}`);
    const data = await res.json();
    setSelected(data);
  };

  useEffect(() => {
    if (user.admin) {
      fetch(`/api/conversation`)
        .then((res) => res.json())
        .then((json) => {
          setSelected(json[json.length - 1]);
          setConversationList({ ...user, conversations: json });
        });
    } else {
      setConversationList(user);
      setSelected(user.conversations[0]);
    }
  }, [user.conversations.length]);

  return (
    <div className="conversations">
      <CustomButton
        dispach={createConversation}
        style={"customBtnDefault"}
        submit={"Create"}
      />
      {conversationList?.conversations?.map((el) => (
        <button
          className="usersChatsList"
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
