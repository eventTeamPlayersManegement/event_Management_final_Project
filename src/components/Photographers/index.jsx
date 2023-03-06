import React, { useEffect, useState } from "react";
import { getPath } from "../../library/api";


function Index() {
    const [data, setData] = useState([])
    async function getData () {
        const daten = await getPath("photographer");
        setData(daten)
    }
    useEffect(() => {
        getData();
    }, [])
  const Photograph = ({ photograph }) => {
    return (
      <>
        <h2>{photograph.name}</h2>
        {photograph.fotos.map((el, i) => (
          <Images key={i} image={el} />
        ))}
      </>
    );
  };
  const Images = ({ image }) => {
    return (
      <div className="image">
        <p>{image.title}</p>
        <img src={image.url} alt="image" />
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
