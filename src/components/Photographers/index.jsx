import React from "react";
import { getPath } from "../../library/api";

async function index({ photo }) {
  const daten = await getPath("photographer");
  // const [data, setData] = useState(daten)
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
      {daten.map((el, i) => (
        <Photograph key={i} photograph={el} />
      ))}
    </>
  );
}

export default index;
