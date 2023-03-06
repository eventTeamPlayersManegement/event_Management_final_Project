import { useEffect, useState } from "react";

function Conversations({ conversations, setSelected, createConversation }) {
  const [conversationList, setConversationList] = useState(conversations);

  const setSelection = async (id) => {
    const res = await fetch(
      "https://final-project-backend-lkvb.onrender.com/api/conversation/" + id
    );
    const data = await res.json();
    setSelected(data);
  };

  useEffect(() => {
    if (conversations.admin) {
      fetch("https://final-project-backend-lkvb.onrender.com/api/conversation")
        .then((res) => res.json())
        .then((json) => setConversationList(json));
    }
  }, []);

  console.log(conversations.admin);
  console.log(conversations);
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
          {new Date(el.createdAt).toLocaleString()}
        </button>
      ))}
    </div>
  );
}

export default Conversations;