import React, { useState, useEffect } from "react";
import { getPath } from "../../library/api";
import text from "../../content/data.json";

import { capitalizeName, capitalize, capitalizeSentence } from "../lib/ultilitis";

export default function index() {
  const [database, setData] = useState([]);
  async function getData() {
    const daten = await getPath("restaurant");
    setData(daten);
  }
  useEffect(() => {
    getData();
  }, []);
  const Restaurant = ({ restaurant }) => {
    return (
      <div className="supplier-main__container">
        <div className="supplier-text__container">
          <h3>{capitalizeName(restaurant.name)}</h3>
          <p>{capitalizeSentence(restaurant.description)}</p>
          <p>{capitalize(restaurant.street)}</p>
          <p>{capitalize(restaurant.city)}</p>
          <p>{text.suppliers.price}{restaurant.price}</p> 
        </div>
        <div className="supplier-gallery__container">
          {restaurant.fotos.map((el) => (
            <img
              className="supplier-card__image"
              src={el}
              alt="restaurant"
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="restaurants">
      <h2>Restaurants</h2>
      <div className="supplier">
        {database.map((el) => (
          <Restaurant key={el._id} restaurant={el} />
        ))}
      </div>
    </section>
   
  );
}
