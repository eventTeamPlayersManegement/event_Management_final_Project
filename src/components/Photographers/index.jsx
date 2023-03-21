import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import text from "../../content/data.json";
import { capitalizeName } from "../lib/ultilitis";

function Index() {
  const [data, setData] = useState([]);
  async function getData() {
    const daten = await getPath("photographer");
    setData(daten);
  }
  useEffect(() => {
    getData();
  }, []);
  const Photograph = ({ photograph }) => {
    return (
      <>
        <div className="home-galerie__container">
          {photograph.fotos.map((el, i) => (
            <Images key={i} image={el} />
          ))}
        </div>
      </>
    );
  };
  const Profilepicture = ({ photograph }) => {
    return (
      <>
        <div className="profile-picture__image--container">
          <img
            className="profile-picture--image__item"
            src={photograph.avatar}
            alt="photograph"
          />
          <div>
            <p className="profile-picture--image__text">{capitalizeName(photograph.name)}</p>
          </div>
        </div>
        <div className="profile-picture__image--container"></div>
      </>
    );
  };
  const Images = ({ image }) => {
    return (
      <div className="photo-card__container--polaroid">
        <img className="photo-card--image__item" src={image} alt="image" />
        {/* <div className="photo-card--image__text"></div> */}
      </div>
    );
  };

  return (
    <>
      <h1>{text.photographer.title}</h1>
      <div className="home-galerie__container">
        {data.map((el, i) => (
          <Profilepicture key={i} photograph={el} />
        ))}
      </div>
      {data.map((el, i) => (
        <Photograph key={i} photograph={el} />
      ))}
    </>
  );
}

export default Index;
