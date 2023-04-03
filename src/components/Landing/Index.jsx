import img1 from "../../assets/5.jpg";
import img2 from "../../assets/7.jpg";
import data from "../../content/data.json";
import Next from "./Next.jsx";
// import NextBtn from "./NextBtn.jsx";
import "./style.scss";
import Video from "./Video.jsx";
import { useTranslation } from "react-i18next";
export default function Landing() {
  const { t } = useTranslation();

  return (
    <div className="landingPageContainer">
      <div className="video">
        <Video />
      </div>
      <div className="landingImg">
        <img src={img1} alt="happycouple" />
      </div>
      <div className="moto">
        <p>{t("landingText.wish")}</p>
        <p>{t("landingText.our")}</p>
      </div>
      <Next />
      <div className="landingImg">
        <img src={img2} alt="decor" />
      </div>
    </div>
  );
}
