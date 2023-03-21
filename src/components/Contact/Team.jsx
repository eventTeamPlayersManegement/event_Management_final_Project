import img from "../../assets/test.jpg";

function Team() {
  return (
    <div className="container">
      <img src={img} alt="" className="image" />
      <div className="overlay">
        <div className="text">name</div>
      </div>
    </div>
  );
}

export default Team;
