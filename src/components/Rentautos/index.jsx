import React, { useEffect, useState } from "react";
import "./style.scss";
import { getPath } from "../../library/api";
import text from "../../content/data.json";

export default function index() {
  const [database, setData] = useState([]);
  async function getData() {
    const daten = await getPath("rentauto");
    setData(daten);
  }
  useEffect(() => {
    getData();
  }, []);
  const Rentauto = ({ rentauto }) => {
    return (
      <div>
        <>
          <div className="home-galerie__container1">
            <h1> {rentauto.provider.name}</h1>

            {rentauto.provider.address && (
              <p>Provider City: {rentauto.provider.address.city}</p>
            )}
            <p> {rentauto.model}</p>
            <p> {rentauto.jahr}</p>
            <p> {rentauto.price}</p>
          </div>
          <div className="home-galerie__container">
            {rentauto.fotos.map((el) => (
              <div className="photo-card__container--polaroid" key={el._id}>
                <img
                  className="photo-card--image__item"
                  src={el.url}
                  alt="rentauto"
                />
                <div className="photo-card--image__text">
                  <p>{el.title}</p>
                </div>
              </div>
            ))}{" "}
          </div>
        </>
      </div>
    );
  };
  return (
    <div>
      <h1>{text.rentauto.title}</h1>
      {database.map((el) => (
        <Rentauto key={el._id} rentauto={el} />
      ))}
    </div>
  );
}
