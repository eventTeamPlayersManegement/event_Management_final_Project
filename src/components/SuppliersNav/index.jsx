import React from "react";
import "./style.scss";
import suppliers from "../../content/data.json";

function SuppliersNav() {
  return (

    <div className="suppliers__nav--container">
      {/* <h1>{suppliers.suppliers.title}</h1> */}

      <ul className="suppliers__nav--ul">
        <li className="suppliers__nav--li">
          <a href="/restaurant">Restaurants</a>
        </li>
        <li className="suppliers__nav--li">
          <a href="/photographer">Photographers</a>
        </li>
        <li className="suppliers__nav--li">
          <a href="/rentauto">Rent Autos</a>
        </li>
        <li className="suppliers__nav--li">
          <a href="/entertainment">Entertainments</a>
        </li>
      </ul>
      
    </div>
  );
}

export default SuppliersNav;
