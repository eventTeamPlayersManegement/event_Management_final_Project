import { useState, useEffect } from "react";
import suppliers from "../../content/data.json";
import { getPath } from "../../library/api";
import "./style.scss";

export default function Supliers() {
  const [data, setData] = useState([]);
  async function getData() {
    const data = await getPath("suppliers");
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  const Images = ({ image }) => {
    return <img style={{ width: "200px" }} src={image.url} alt="image" />;
  };
  return (
    <div className="ourSuppliers">
      <h1>{suppliers.suppliers.title}</h1>
      <div className="caruselContainer">
        <div className="restaurants"></div>
        <div className="entertainement"></div>
        <div className="rentcar"></div>
      </div>
      <div className="mobile_grid_photos">
        {data.map((el, id) => (
          <Images key={id} image={el} />
        ))}
      </div>
    </div>
  );
}
