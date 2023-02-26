import img1 from "../../assets/5.jpg";
import img2 from "../../assets/7.jpg";

export default function Landing() {
  return (
    <div className="landingPageContainer">
      <div>
        <img src={img1} alt="happycouple" />
      </div>
      <div>
        <p>Your Event, Your Wish</p>
        <p>Our Pleasure</p>
      </div>
      <img src={img2} alt="decor" />
    </div>
  );
}
