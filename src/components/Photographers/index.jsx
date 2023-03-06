import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import "./style.scss"


function Index() {
    const [data, setData] = useState([])
    async function getData () {
        const daten = await getPath("photographer");
        setData(daten)
    }
    console.log(data)
    useEffect(() => {
        getData();
    }, [])
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
      <h1>Photographers</h1>
      {data.map((el, i) => (
        <Photograph key={i} photograph={el} />
      ))}
    </>
  );
}

export default Index;
