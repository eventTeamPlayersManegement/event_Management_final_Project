import { useContext, useEffect, useState } from "react";
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
    fetch(`/api/conversation`, {
      method: "POST",
      body: JSON.stringify({
        conversationsWriter: data.id,
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
  }, [user.conversations.length]);
  const customStyles = {
    alone: {
      display: "grid",
      placeContent: "center",
    },
    multiple: {},
  };
  return (
    <div
      className="conversations"
      style={
        user.conversations.length === 0
          ? customStyles.alone
          : customStyles.multiple
      }
    >
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
          {user.admin && <p>{el?.conversationsWriter?.data?.name}</p>}
        </button>
      ))}
    </div>
  );
}

export default Conversations;
