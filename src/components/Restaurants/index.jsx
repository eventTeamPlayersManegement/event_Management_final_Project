import React, { useState, useEffect } from "react";
import "./style.scss";
import { getPath } from "../../library/api";
import text from "../../content/data.json";

import { capitalizeName, capitalize } from "../lib/ultilitis";

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
      <div className="restaurant-main__container">
        <div className="restaurant-text__container">
          <h3>{capitalizeName(restaurant.name)}</h3>
          <p>{capitalize(restaurant.description)}</p>
          <p>Price per person: ${restaurant.price}</p> 
          <p>{capitalize(restaurant.street)}</p>
          <p>{capitalize(restaurant.city)}</p>
        </div>
        <div className="restaurant-gallery__container">
          {restaurant.fotos.map((el) => (
            <div className="photo-card__container--polaroid" key={el._id}>
              <img
                className="photo-card--image__item"
                src={el}
                alt="restaurant"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="restaurants">
      <h2>Restaurants</h2>
      {database.map((el) => (
        <Restaurant key={el._id} restaurant={el} />
      ))}
    </section>
  );
}
