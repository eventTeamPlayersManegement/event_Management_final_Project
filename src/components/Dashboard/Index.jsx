import dash from "../../content/data.json";
// import img1 from "../../assets/4.jpeg";
// import img2 from "../../assets/clown2.jpg";
// import img3 from "../../assets/torte.jpg";
// import img4 from "../../assets/text.jpg";
// import img5 from "../../assets/rentauto.jpg";
import { capitalize } from "../lib/ultilitis.js";
import FlipImg from "./FlipImg.jsx";
import "../Dashboard/style.scss";

export default function Dashboard() {
  // const imgs = [img1, img2, img3, img4, img5];
  return (
    <div className="dashboardCont">
      <h1>{dash.dashboard.title}</h1>
      <div className="dashPart">
        <FlipImg />
      </div>
    </div>
  );
}
