import React from "react";
import { getPath } from "../../library/api";
const database = await getPath("entertainment");
console.log("entertainment", database);
export default function index() {
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
