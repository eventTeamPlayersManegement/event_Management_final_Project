import "./style.scss";
import SuppliersNav from "../SuppliersNav";
import Photographers from "../Photographers";
import Restaurants from "../Restaurants";
import Rentautos from "../Rentautos";
import Entertainments from "../Entertainments";

export default function Supliers() {
  return (
    <div className="ourSuppliers">

      <SuppliersNav />
      <Restaurants />
      <Photographers />
      <Entertainments />
      <Rentautos />
     
    </div>
  );
}
