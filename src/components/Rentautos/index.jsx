import React, { useEffect, useState } from "react";
import "./style.scss";
import { getPath } from "../../library/api";
import { capitalizeName, capitalize } from "../lib/ultilitis";

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
      <>
        <div className="home-galerie__container1">
          {/* <h1>{rentauto.name}</h1> */}
          {rentauto.provider.address && <p>Provider City: {rentauto.city}</p>}
          <h3> {capitalizeName(rentauto.name)}</h3>
          <p>{capitalize(rentauto.description)}</p>
          <p>Price ${rentauto.price}</p>
        </div>
        <div className="home-galerie__container">
          {rentauto.fotos.map((el) => (
            <div className="photo-card__container--polaroid" key={el._id}>
              <img
                className="photo-card--image__item"
                src={el}
                alt="rentauto"
                />
              <div className="photo-card--image__text"></div>
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <section id="rentautos">

      {database.map((el) => (
        <Rentauto key={el._id} rentauto={el} />
      ))}
    </section>
  );
}
