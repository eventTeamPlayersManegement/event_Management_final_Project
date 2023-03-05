import "./style.scss";
import ChatInput from "./ChatInput.jsx";
import ChatList from "./ChatList.jsx";

export default function () {
  return (
    <div className="chat">
      <ChatList />
      <ChatInput />
    </div>
  );
}
