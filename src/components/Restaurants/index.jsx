import React, { useState, useEffect } from "react";
import "./style.scss";
import { getPath } from "../../library/api";

export default function index() {
  const [database, setData] = useState([])
  async function getData () {
    const daten = await getPath("restaurant");
    setData(daten);
  };
  useEffect(() => {
      getData();
  }, []);
  const Restaurant = ({ restaurant }) => {
    return (
      <>
        <h1> {restaurant.name}</h1>
        {/* {restaurant.createdAt}
        {restaurant.updatedAt} */}

        {restaurant.fotos.map((el) => (
          <div key={el._id}>
            <h2>{el.title}</h2>
            <img src={el.url} alt="restaurant" />
          </div>
        ))}
      </>
    );
  };
  return (
    <div>
      <h1>Restaurants</h1>
      {database.map((el) => (
        <Restaurant key={el._id} restaurant={el} />
      ))}
    </div>
  );
}
