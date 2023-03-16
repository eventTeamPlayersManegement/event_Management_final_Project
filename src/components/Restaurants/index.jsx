import React, { useState, useEffect } from "react";
import "./style.scss";
import { getPath } from "../../library/api";
import text from "../../content/data.json";

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
        {/* <h1> {restaurant.name}</h1> */}
        <>
          {restaurant.fotos.map((el) => (
            <div className="photo-card__container--polaroid" key={el._id}>
              <img
                className="photo-card--image__item"
                src={el.url}
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
    <>
      <h1>{text.restaurant.title} </h1>
      {database.map((el) => (
        <Restaurant key={el._id} restaurant={el} />
      ))}
    </>
  );
}
