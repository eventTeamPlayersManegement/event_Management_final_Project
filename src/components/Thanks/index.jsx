import CustomButton from "../lib/CustomButton.jsx";
import { useNavigate } from "react-router-dom";
import "./style.scss";
export default function () {
  const navigate = useNavigate();

  const getConfetti = (num) => {
    const res = [];
    for (let i = 0; i < num; i++) {
      res.push(<div class={`confetti-${i}`}></div>);
    }
    return res;
  };
  setTimeout(() => {
    navigate("/");
  }, 6000);
  return (
    <div className="wrapper">
      {getConfetti(500)}
      <div className="thanks">
        <p>Thank you for being our valued customer.</p>
        <p>We hope we will meet your expectations.</p>
        <p>
          Let us know if you have any questions directly on &nbsp;
          <span>Live Chat</span>
          &nbsp;or per &nbsp;
          <span>E-Mail</span>
        </p>
      </div>
    </div>
  );
}
