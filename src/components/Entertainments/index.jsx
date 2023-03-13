import React, { useState, useEffect } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
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
        {/* <h1> {entertainment.name} </h1> */}
        <>
          {entertainment.fotos.map((fotos) => (
            <div className="photo-card__container--polaroid" key={fotos._id}>
              <img
                className="photo-card--image__item"
                src={fotos.url}
                alt="entertainment"
              />
              <div className="photo-card--image__text">
                <p>{fotos.title}</p>
              </div>
            </div>
          ))}
        </>
      </div>
    );
  };
  return (
    <div>
      {database.map((el) => (
        <Entertainment key={el._id} entertainment={el} />
      ))}
    </div>
  );
}
