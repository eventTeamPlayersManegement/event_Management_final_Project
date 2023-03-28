import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import text from "../../content/data.json";
import { capitalizeName, capitalize } from "../lib/ultilitis";

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
       {/* 3d Card 
          <section className="profilbild__container">
          <div className="card">

            <div className="cover" style={{backgroundImage: `url(${photograph.avatar})`}}  >

              <h3>{capitalizeName(photograph.name)}</h3>
              <span className="price">€{photograph.price}</span> 
              <div className="card-back">
                <span>{capitalize(photograph.description)}</span>
              </div>

            </div>

          </div>
        </section> */}
        
        <div className="profile-picture__container">
          <img
            className="profile-picture__image--item"
            src={photograph.avatar}
            alt="photograph"
          />
          <div className="profile-picture__text--container">
            <h3 className="profile-picture__text--title">{capitalizeName(photograph.name)}</h3>
            <p className="profile-picture__text--paragraph">{capitalize(photograph.description)}</p>
            <p className="profile-picture__text--price">Price €{photograph.price}</p> 
          </div>
        </div> 
        {photograph.fotos.map((el, i) => (
          <Images key={i} image={el} />
        ))}
       
      </div>
    );
     
        
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
    <section id="photographers">
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
