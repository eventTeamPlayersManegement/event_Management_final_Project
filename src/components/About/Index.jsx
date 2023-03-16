import React from "react";
import "./style.scss";
import about from "../../content/data.json";
import img1 from "../../assets/bilderEvent/adult.jpg";
// import img2 from "../../assets/bilderEvent/cakk.jpg";
import img3 from "../../assets/bilderEvent/img3.webp";
import img4 from "../../assets/bilderEvent/img4.jpg";
import img5 from "../../assets/bilderEvent/img5.jpg";
import img6 from "../../assets/bilderEvent/img6.jpg";
import img7 from "../../assets/bilderEvent/img7.jpg";
import img8 from "../../assets/bilderEvent/img8.jpg";
import img9 from "../../assets/bilderEvent/img9.jpg";
import img10 from "../../assets/bilderEvent/img10.jpg";
import img11 from "../../assets/bilderEvent/img11.jpg";
import img12 from "../../assets/bilderEvent/img12.jpg";
import img13 from "../../assets/bilderEvent/img13.jpg";
import img14 from "../../assets/bilderEvent/img14.jpg";
import img15 from "../../assets/bilderEvent/img15.jpg";
import img16 from "../../assets/bilderEvent/img16.jpg";
import img17 from "../../assets/bilderEvent/img17.jpg";
import img18 from "../../assets/bilderEvent/img18.jpg";
import img19 from "../../assets/bilderEvent/img19.jpg";
import img20 from "../../assets/bilderEvent/img20.jpg";
import img21 from "../../assets/bilderEvent/img21.webp";
import img22 from "../../assets/bilderEvent/img22.png";
import img23 from "../../assets/bilderEvent/img23.png";
import img24 from "../../assets/bilderEvent/img24.png";
import img25 from "../../assets/bilderEvent/img25.jpg";
import img26 from "../../assets/bilderEvent/img26.jpg";
import img27 from "../../assets/bilderEvent/img27.jpg";
import img28 from "../../assets/bilderEvent/img28.webp";
import img29 from "../../assets/bilderEvent/img29.jpg";
import img30 from "../../assets/bilderEvent/img30.jpg";
import img31 from "../../assets/bilderEvent/img31.jpg";
import img32 from "../../assets/bilderEvent/img32.jpg";
import img33 from "../../assets/bilderEvent/img33.jpg";
import img34 from "../../assets/bilderEvent/img34.webp";
import weddingVideo from "../../assets/bilderEvent/wedding1.mp4";
import birthVideo from "../../assets/bilderEvent/birth.mp4";

import { useState, useEffect } from "react";

export default function About() {
  const images = [
    img1,

    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const index = (currentIndex + 1) % images.length;
      setCurrentIndex(index);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const lastIndex = (currentIndex + 3) % images.length;
    const visibleImages = [];
    for (let i = currentIndex; i <= lastIndex; i++) {
      visibleImages.push(images[i % images.length]);
    }
    return visibleImages;
  };
  return (
    <div className="about">
      <h1 className="about__title">{about.aboutUs[0].title}</h1>

      <section className="about__description">
        <p>{about.aboutUs[0].description}</p>

        <div className="wedding-video">
          <video className="Video" controls autoPlay muted>
            <source src={weddingVideo} type="video/mp4" />
          </video>
          <p>{about.aboutUs[0].wedding}</p>
        </div>
        <div className="wedding-video">
          <video className="Video" controls autoPlay muted>
            <source src={birthVideo} type="video/mp4" />
          </video>
          <p>TEXT</p>
        </div>
      </section>

      <div className="carousel">
        <div className="carousel-inner">
          {getVisibleImages().map((el, i) => (
            <img key={i} src={el} alt="" />
          ))}
        </div>
        <div className="carousel-controls">
          <button onClick={goToPrevious}>{"<"}</button>
          <button onClick={goToNext}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
