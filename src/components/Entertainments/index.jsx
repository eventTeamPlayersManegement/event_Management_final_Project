import React, { useState, useEffect } from "react";
import { getPath } from "../../library/api";
import { capitalizeName, capitalize, capitalizeSentence } from "../lib/ultilitis";

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
      <div className="supplier-main__container">
        <div className="supplier-text__container">
          <h3>{capitalizeName(entertainment.name)}</h3>
          <p>{capitalizeSentence(entertainment.description)}</p>
          <p>{capitalize(entertainment.city)}</p>
          <p>Price: €{entertainment.price}</p>
        </div>
        <div className="supplier-gallery__container">
          {entertainment.fotos.map((el) => (
            <img
              className="supplier-card__image"
              src={el}
              alt="entertainment"
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="entertainments">
      <h2>Entertainments</h2>
      <div className="supplier">
        {database.map((el) => (
          <Entertainment key={el._id} entertainment={el} />
        ))}
      </div>
    </section>
  );
}
