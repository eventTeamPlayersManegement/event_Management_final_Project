import React from "react";
import "./style.scss";

import { getPath } from "../../library/api";

const database = await getPath("rentauto");
console.log(database);
export default function index() {
  const Rentauto = ({ rentauto }) => {
    return (
      <>
        <h1> {rentauto.provider.name}</h1>
        {rentauto.provider.address && (
          <p>Provider City: {rentauto.provider.address.city}</p>
        )}
        <h1> {rentauto.model}</h1>
        <p> {rentauto.jahr}</p>
        <p> {rentauto.price}</p>

        {rentauto.fotos.map((el) => (
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
      <h1>Rent Autos</h1>
      {database.map((el) => (
        <Rentauto key={el._id} rentauto={el} />
      ))}
    </div>
  );
}
