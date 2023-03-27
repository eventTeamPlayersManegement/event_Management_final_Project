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
      <div >
        <h2>{capitalizeName(restaurant.name)}</h2>
        <p>{capitalize(restaurant.description)}</p>
        <p>Price per person: ${restaurant.price}</p> 
        <p>{capitalize(restaurant.street)}</p>
        <p>{capitalize(restaurant.city)}</p>
        <div className="restaurant-gallery__container">
          {restaurant.fotos.map((el) => (
            <div className="photo-card__container--polaroid" key={el._id}>
              <img
                className="photo-card--image__item"
                src={el}
                alt="restaurant"
              />

              <div className="photo-card--image__text"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="restaurants">
      
      {database.map((el) => (
        <Restaurant key={el._id} restaurant={el} />
      ))}
    </section>
  );
}
