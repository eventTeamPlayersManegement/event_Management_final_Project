import React from "react";
import "./style.scss";
import about from "../../content/data.json";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__title">{about.aboutUs[0].title}</h1>

      <section className="about__description">
        <p>{about.aboutUs[0].description}</p>
        <img
          className="about__image"
          src={about.aboutUs[0].image}
          alt="married"
        />
        <p className="about__text">{about.aboutUs[0].text}</p>
        <div className="about__images">
          <img src={about.aboutUs[0].url1} alt="" />
          <img src={about.aboutUs[0].url2} alt="" />
          <img src={about.aboutUs[0].url2} alt="" />
        </div>
      </section>
    </div>
  );
}
