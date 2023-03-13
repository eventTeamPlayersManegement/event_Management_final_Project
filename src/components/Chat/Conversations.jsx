import { useContext, useEffect, useState } from "react";
import config from "../../content/data.json";
import { EventContext } from "../../context/Context.jsx";
import CustomButton from "../lib/CustomButton.jsx";
function Conversations({ user, setSelected }) {
  const [data, setData] = useContext(EventContext);
  const [conversationList, setConversationList] = useState(user);

  const setSelection = async (id) => {
    const res = await fetch(`/api/conversation/${id}`);
    const data = await res.json();
    setSelected(data);
  };
  const createConversation = () => {
    console.log(user);
    fetch(`/api/conversation`, {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
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
    if (!user?.conversations.length && !user.admin) {
      createConversation();
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
          {/* {user.admin && <p>{el.chats[0]?.writer.data.name}</p>} */}
        </button>
      ))}
    </div>
  );
}

export default Conversations;
