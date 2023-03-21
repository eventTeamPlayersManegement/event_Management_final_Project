import { useState, useEffect } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import SuppliersNav from "../SuppliersNav";

export default function Supliers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getPath("suppliers");
      setData(data);
    }
    getData();
  }, []);

  const Images = ({ image }) => {
    return <img style={{ width: "200px" }} src={image} alt="image" />;
  };
  return (
    <div className="ourSuppliers">

      <SuppliersNav />

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
