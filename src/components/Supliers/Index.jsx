import { useState, useEffect } from "react";
import suppliers from "../../content/data.json";
import { getPath } from "../../library/api";
import "./style.scss";
import Photographer from "../Photographers"

export default function Supliers() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const data = await getPath("suppliers");
  //     setData(data);
  //   }
  //   getData();
  // }, []);

  // const Images = ({ image }) => {
  //   return <img style={{ width: "200px" }} src={image} alt="image" />;
  // };
  return (
    <div className="ourSuppliers">
      <h1>{suppliers.suppliers.title}</h1>
      <ul>
        <li><a href="/restaurant">Restaurant</a></li>
        <li><a href="/photographer">Photograph</a></li>
        <li><a href="/rentauto">Rent Auto</a></li>
        <li><a href="/entertainment">Entertainment</a></li>
      </ul>
      {/* <Photographer /> */}
     
      {/* <div className="caruselContainer">
        <div className="restaurants"></div>
        <div className="entertainement"></div>
        <div className="rentcar"></div>
      </div>
      <div className="mobile_grid_photos">
        {data.map((el, id) => (
          <Images key={id} image={el} />
        ))}
      </div> */}
    </div>
  );
}
