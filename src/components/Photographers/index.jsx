import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import "./style.scss";
import text from "../../content/data.json";


function Index() {
    const [data, setData] = useState([])
    async function getData () {
        const daten = await getPath("photographer");
        setData(daten);
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(data)
  const Photograph = ({ photograph }) => {
    return (
      <>
        <div className="home-galerie__container">
            {photograph.fotos.map((el, i) => (
                <Images key={i} image={el} />
                ))}

        </div>
      </>
    );
  };
  const Profilepicture = ({ photograph }) => {
    return (
      <>
        <div className="profile-picture__container">
            <img className='profile-picture--image__item' src={photograph.profilepicture} alt="photograph" />

        </div>
      </>
    );
  };
  const Images = ({ image }) => {
    return (
      <div className="photo-card__container--polaroid">
        <img className='photo-card--image__item' src={image.url} alt="image" />
        <div className='photo-card--image__text'>
            <p>{image.title}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1>{text.photographer.title}</h1>
      {data.map((el, i) => (
        <Profilepicture key={i} photograph={el} />
      ))}
      {data.map((el, i) => (
        <Photograph key={i} photograph={el} />
      ))}
    </>
  );
}

export default Index;
