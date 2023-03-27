import img from "../../assets/team/ella.jpg";
import img1 from "../../assets/team/marcel.jpg";
import img2 from "../../assets/team/vaso.jpg";
import img3 from "../../assets/team/propfilbild.png";
import img4 from "../../assets/team/vladi.png";
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
                <p>{developers.developers[i].located}</p>
                <br />
                <a href={developers.developers[i].linkedin} target={"_blank"}>
                  <BsLinkedin />
                </a>
                <a href={developers.developers[i].github} target={"_blank"}>
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Team;
