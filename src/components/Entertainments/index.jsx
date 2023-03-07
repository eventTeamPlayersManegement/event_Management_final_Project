import React, { useState, useEffect } from "react";
import { getPath } from "../../library/api";
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
      <>
        <h1> {entertainment.name} </h1>
        {entertainment.fotos.map((fotos) => (
          <div key={fotos._id}>
            <h2>{fotos.title}</h2>
            <img src={fotos.url} alt="entertainment" />
          </div>
        ))}
      </>
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
