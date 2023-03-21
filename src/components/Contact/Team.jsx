import img from "../../assets/test.jpg";
import img1 from "../../assets/test.jpg";
import img2 from "../../assets/test.jpg";
import img3 from "../../assets/test.jpg";
import img4 from "../../assets/test.jpg";
import developers from "../../content/data.json";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import "./team.scss";

function Team() {
  const imgs = [img, img1, img2, img3, img4];
  return (
    <>
      {imgs.map((imgs, i) => (
        <div className="containerTeam">
          <img src={imgs} alt="avatar" className="image" />
          <div className="overlay">
            <div className="text">
              <div key={i}>
                <p>{developers.developers[i].name}</p>
                <a href={developers.developers[i].portfolio} target="_blank">
                  Portfolio
                </a>
                <a href={developers.developers[i].linkedin} target={"_blank"}>
                  <BsLinkedin />
                </a>
                <a href={developers.developers[i].github} target={"_blank"}>
                  <BsGithub />
                </a>
                <a href={developers.developers[i].instagram} target={"_blank"}>
                  <BsInstagram />
                </a>
                <p>{developers.developers[i].located}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Team;
