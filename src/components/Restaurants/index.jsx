import React, { useState, useEffect } from "react";
import "./style.scss";
import { getPath } from "../../library/api";
import text from "../../content/data.json";
import SuppliersNav from "../SuppliersNav";
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
      <div className="home-galerie__container">
        <h1>{capitalizeName(restaurant.name)}</h1>
        <>
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
        </>
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
