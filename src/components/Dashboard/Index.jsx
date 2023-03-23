import dash from "../../content/data.json";

import { capitalize } from "../lib/ultilitis.js";
import FlipImg from "./FlipImg.jsx";
import "../Dashboard/style.scss";

export default function Dashboard() {
  return (
    <div className="dashboardCont">
      <h1>{dash.dashboard.title}</h1>
      <div className="dashPart">
        <FlipImg />
      </div>
    </div>
  );
}
