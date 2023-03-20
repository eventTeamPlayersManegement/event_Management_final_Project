import dash from "../../content/data.json";
import React from "react";
import "../Dashboard/style.scss";
import img1 from "../../assets/4.jpeg";
import img2 from "../../assets/clown2.jpg";
import img3 from "../../assets/torte.jpg";
import img4 from "../../assets/text.jpg";
import img5 from "../../assets/rentauto.jpg";
import { capitalize } from "../lib/ultilitis.js";

function FlipImg() {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img1} alt="" />
          </div>
          <ul className="flip-card-back">
            <li>
              <a href={`/dashboard/${dash.dashboard.paths[0]}`}>
                Manage Here Data
                <br />
                {capitalize(dash.dashboard.paths[0])}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img3} alt="" />
          </div>
          <ul className="flip-card-back">
            <li>
              <a href={`/dashboard/${dash.dashboard.paths[1]}`}>
                Manage Here Data
                <br />
                {capitalize(dash.dashboard.paths[1])}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img5} alt="" />
          </div>
          <ul className="flip-card-back">
            <li>
              <a href={`/dashboard/${dash.dashboard.paths[2]}`}>
                Manage Here Data
                <br />
                {capitalize(dash.dashboard.paths[2])}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img2} alt="" />
          </div>
          <ul className="flip-card-back">
            <li>
              <a href={`/dashboard/${dash.dashboard.paths[3]}`}>
                Manage Here Data
                <br />
                {capitalize(dash.dashboard.paths[3])}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img4} alt="" />
          </div>
          <ul className="flip-card-back">
            <li>
              <a href={`/dashboard/${dash.dashboard.paths[4]}`}>
                Manage Here Data
                <br />
                {capitalize(dash.dashboard.paths[4])}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FlipImg;
