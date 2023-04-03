import React, { useState, useEffect } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import { capitalizeName, capitalize } from "../lib/ultilitis";

export default function index() {
  const [database, setData] = useState([]);
  async function getData() {
    const daten = await getPath("entertainment");
    setData(daten);
  }
  useEffect(() => {
    getData();
  }, []);
  const Entertainment = ({ entertainment }) => {
    return (
      <div className="entertainment-main__container">
        <div className="entertainment-text__container">
          <h3>{capitalizeName(entertainment.name)}</h3>
          <p>{capitalize(entertainment.description)}</p>
          <p>Price: €{entertainment.price}</p>
          <p>{capitalize(entertainment.city)}</p>
        </div>
        <div className="entertainment-gallery__container">
          {entertainment.fotos.map((fotos) => (
            <div className="photo-card__container--polaroid" key={fotos._id}>
              <img
                className="photo-card--image__item"
                src={fotos}
                alt="entertainment"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="entertainments">
      <h2>Entertainments</h2>
      {database.map((el) => (
        <Entertainment key={el._id} entertainment={el} />
      ))}
    </section>
  );
}
