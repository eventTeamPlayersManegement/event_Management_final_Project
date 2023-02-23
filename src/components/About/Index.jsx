import React from "react";
import "./style.scss";
import about from "../../content/data.json";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__title">{about.aboutUs.map((el) => el.title)}</h1>

      <section className="about__description">
        {about.aboutUs.map((el) => el.description)}
      </section>
      <section className="about__image-title">
        {about.aboutUs.map((el) => (
          <img src={el.image} alt="" />
        ))}
      </section>
      <section className="about__text">
        {about.aboutUs.map((el) => (
          <p>{el.text}</p>
        ))}
      </section>
      <section className="about__images">
        {about.aboutUs.map((el) => (
          <img src={el.url} alt="" />
        ))}
      </section>
    </div>
  );
}
