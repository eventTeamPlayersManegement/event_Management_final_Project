import data from "../../content/data.json";

export default function Supliers() {
  return (
    <div>
      <h1>{data.suppliers.title}</h1>
      <div className="caruselContainer">
        <div className="photo"></div>
        <div className="restaurants"></div>
        <div className="entertainement"></div>
        <div className="rentcar"></div>
      </div>
      <div className="mobile_grid_photos"></div>
    </div>
  );
}
