import img1 from "../../assets/5.jpg";
import img2 from "../../assets/7.jpg";
import data from "../../content/data.json";
import "./style.scss";
import Video from "./Video.jsx";

export default function Landing() {
  return (
    <div className="landingPageContainer">
      <div className="landingImg">
        <img src={img1} alt="happycouple" />
      </div>
      <div className="moto">
        <p>{data.landingText.wish}</p>
        <p>{data.landingText.our}</p>
      </div>
      <div className="landingImg">
        <img src={img2} alt="decor" />
      </div>
    </div>
  );
}
