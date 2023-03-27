import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import text from "../../content/data.json";
import { capitalizeName, capitalize } from "../lib/ultilitis";
import SuppliersNav from "../SuppliersNav";

function Index() {
  const [data, setData] = useState([]);
  async function getData() {
    const daten = await getPath("photographer");
    setData(daten);
  }
  useEffect(() => {
    getData();
  }, []);

  const Profilepicture = ({ photograph }) => {
    return (
      <>
       <section className="profilbild__container">
          <div className="card">

            <div className="cover" style={{backgroundImage: `url(${photograph.avatar})`}}  >

              <h3>{capitalizeName(photograph.name)}</h3>
              {/* <span className="price">€{photograph.price}</span> */}
              <div className="card-back">
                <span>{capitalize(photograph.description)}</span>
              </div>

            </div>

          </div>
        </section>
        <div className="home-galerie__container">
          {photograph.fotos.map((el, i) => (
            <Images key={i} image={el} />
            ))}
        </div>
      </>
      );
     
        {/*-----Profil Picture round  */}
        {/* <div className="profile-picture__image--container">
          <img
            className="profile-picture--image__item"
            src={photograph.avatar}
            alt="photograph"
          />
          <div>
            <h3 className="profile-picture--image__title">{capitalizeName(photograph.name)}</h3>
            <p className="profile-picture--image__text">{capitalize(photograph.description)}</p>
          </div>
        </div> */}
  };
  const Images = ({ image }) => {
    return (
      <div className="photo-card__container--polaroid">
        <img className="photo-card--image__item" src={image} alt="image" />
        {/* <div className="photo-card--image__text">Test</div> */}
      </div>
    );
  };
  
  return (
    <section className="photographers__container" id="photographers">
      <h2>{text.photographer.title}</h2>
      <div className="home-galerie__container">
        {data.map((el, i) => (
          <Profilepicture key={i} photograph={el} />
          ))}
      </div>
    </section>
  );
}

export default Index;
