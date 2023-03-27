import React, { useState, useEffect } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import SuppliersNav from "../SuppliersNav";
// const database = await getPath("entertainment");
// console.log(database);
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
      <div className="home-galerie__container">
        <>
          {entertainment.fotos.map((fotos) => (
            
            <div className="photo-card__container--polaroid" key={fotos._id}>
              <img
                className="photo-card--image__item"
                src={fotos}
                alt="entertainment"
              />
              {/* <div className="photo-card--image__text">
                <p>{fotos.title}</p>
              </div> */}
            </div>
          ))}
        </>
      </div>
    );
  };
  return (
    <section id="entertainments">
      {database.map((el) => (
        <Entertainment key={el._id} entertainment={el} />
      ))}
    </section>
  );
}
