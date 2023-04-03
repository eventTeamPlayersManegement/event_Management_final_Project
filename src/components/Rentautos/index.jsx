import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import { capitalizeName, capitalizeSentence } from "../lib/ultilitis";

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
      <div className="supplier-main__container">
        <div  className="supplier-text__container">
          {rentauto.provider.address && <p>Provider City: {rentauto.city}</p>}
          <h3> {capitalizeName(rentauto.name)}</h3>
          <p>{capitalizeSentence(rentauto.description)}</p>
          <p>Price €{rentauto.price}</p>
        </div>
        <div className="supplier-gallery__container">
          {rentauto.fotos.map((el) => (
            <img
              className="supplier-card__image"
              src={el}
              alt="rentauto"
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <section id="rentautos">
      <h2>Rent Autos</h2>
      <div className="supplier">
        {database.map((el) => (
          <Rentauto key={el._id} rentauto={el} />
        ))}
      </div>
    </section>
  );
}
