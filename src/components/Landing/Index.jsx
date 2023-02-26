import img1 from "../../assets/5.jpg";
import img2 from "../../assets/7.jpg";
import data from "../../content/data.json";
import "./style.scss";

export default function Landing() {
  return (
    <div className="landingPageContainer">
      <div>
        <img className="landingImg" src={img1} alt="happycouple" />
      </div>
      <div className="moto">
        <p>{data.landingText.wish}</p>
        <p>{data.landingText.our}</p>
      </div>
      <div>
        <img className="landingImg" src={img2} alt="decor" />
      </div>
    </div>
  );
}
