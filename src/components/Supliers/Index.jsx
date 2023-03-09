import { useState } from "react";
import suppliers from "../../content/data.json";
import { getPath } from "../../library/api";
import "./style.scss";

const daten = await getPath("suppliers");
const photo = await getPath("photographer");
export default function Supliers() {
  const Images = ({ image }) => {
    return <img style={{ width: "200px" }} src={image.url} alt="image" />;
  };
  return (
    <div className="ourSuppliers">
      <h1>{suppliers.suppliers.title}</h1>
      <div className="caruselContainer">
        <div className="photo">
          {/* <img
            style={{ width: "200px" }}
            src={photo[0].fotos.url}
            alt="image"
          /> */}
        </div>
        <div className="restaurants"></div>
        <div className="entertainement"></div>
        <div className="rentcar"></div>
      </div>
      <div className="mobile_grid_photos">
        {daten.map((el, id) => (
          <Images key={id} image={el} />
        ))}
      </div>
    </div>
  );
}
