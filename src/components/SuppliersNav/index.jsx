import React from "react";
import "./style.scss";

function SuppliersNav() {
  return (
    <div className="suppliers__nav--container">

      <ul className="suppliers__nav--ul">
        <li className="suppliers__nav--li">
          <a className="suppliers__nav--a" href="#restaurants">Restaurants</a>
        </li>
        <li className="suppliers__nav--li">
          <a className="suppliers__nav--a" href="#photographers">Photographers</a>
        </li>
        <li className="suppliers__nav--li">
          <a className="suppliers__nav--a" href="#entertainments">Entertainments</a>
        </li>
        <li className="suppliers__nav--li">
          <a className="suppliers__nav--a" href="#rentautos">Rent Autos</a>
        </li>
      </ul>
      
    </div>
  );
}

export default SuppliersNav;
