import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import { capitalizeName, capitalizeSentence } from "../lib/ultilitis";

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
      <div className="photographer__container">
      
        <div className="profile-picture__container">
          <img
            className="profile-picture__image--item"
            src={photograph.avatar}
            alt="photograph"
          />
          <div className="profile-picture__text--container">
            <h3 className="profile-picture__text--title">{capitalizeName(photograph.name)}</h3>
            <p className="profile-picture__text--paragraph">{capitalizeSentence(photograph.description)}</p>
            <p className="profile-picture__text--price">Price €{photograph.price}</p> 
          </div>
        </div> 
        <div className="photographer-gallery__container">
          {photograph.fotos.map((el) => (
            // <div className="photo-card__container--polaroid">
            <img className="photo-card--image__item" src={el} alt="image" />
          // </div>
          ))}
        </div>
      </div>
    );   
  };
  
  return (
    <section id="photographers">
      <h2>Photographers</h2>
      <div className="home-galerie__container">
        {data.map((el, i) => (
          <Profilepicture key={i} photograph={el} />
          ))}
      </div>
    
    </section>
  );
}

export default Index;
