import React, { useContext } from "react";
import { EventContext } from "../../context/Context.jsx";

import {
  capitalizeName,
  capitalizeSentence,
  splitSentence,
} from "../lib/ultilitis.js";
import "./offer.scss";

const handleSelect = async (obj, id) => {
  const res = await fetch("/api/stripe/create", {
    method: "POST",
    body: JSON.stringify({
      name: obj.name,
      amount: +obj.cost * 100,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await res.json();
  await fetch(`/api/event`, {
    method: "POST",
    body: JSON.stringify({
      user: id,
      stripe: json,
      photographer: obj.photo._id,
      restaurant: obj._id,
      rentauto: obj.rent._id,
      entertainment: obj.entertainement._id,
      city: obj.city,
      cost: obj.cost,
      restname: obj.name,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  // const jsonEvent = await resEvent.json();
  const resPayment = await fetch("/api/stripe/createpayment", {
    method: "POST",
    body: JSON.stringify({ price: json.default_price, quantity: 1 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const jsonPayment = await resPayment.json();
  window.location.replace(jsonPayment);
};

function Offer({ offer }) {
  const [user] = useContext(EventContext);

  return (
    <>
      <div className="offers">
        {offer.map((el) => {
          console.log(el);
          return (
            <div key={el._id} className="offerCard">
              <div className="rest">
                <img src={el.avatar} alt="restaurant" className="img" />
                <div className="restText">
                  <h2>
                    <span>{capitalizeName(el.name)}</span>
                  </h2>
                  <p>{capitalizeSentence(el.description)}</p>
                  <h3> Price {el.price}€ Pers</h3>
                </div>
              </div>

              <div className="cardsOffers">
                {el.rent.avatar && (
                  <div className="small">
                    <h1>RentAuto</h1>
                    <img src={el.rent.avatar} alt="rent" className="img1" />
                    <div className="small_tip">
                      <h3>More Info</h3>
                      <p className="name"> {capitalizeName(el.rent.name)} </p>
                      <p>
                        {capitalizeSentence(splitSentence(el.rent.description))}
                        ...
                      </p>
                      <p className="price"> {el.rent.price}€ </p>
                      <a href={"/rentauto"}>More Info</a>
                    </div>
                  </div>
                )}

                {el.entertainement.avatar && (
                  <div className="small">
                    <h1>Entertainment</h1>
                    <img
                      src={el.entertainement.avatar}
                      alt="entertainement"
                      className="img2"
                    />
                    <div className="small_tip">
                      <h3>More Info</h3>
                      <p className="name">
                        {capitalizeName(el.entertainement.name)}
                      </p>
                      <p>
                        {capitalizeSentence(
                          splitSentence(el.entertainement.description)
                        )}
                        ...
                      </p>
                      <p className="price">{el.entertainement.price}€</p>
                      <a href={"/entertainment"}>More Info</a>
                    </div>
                  </div>
                )}
                {el.photo.avatar && (
                  <div className="small">
                    <h1>Photographer</h1>
                    <img
                      src={el.photo.avatar}
                      alt="photograph"
                      className="img3"
                    />
                    <div className="small_tip">
                      <h3>More Info</h3>
                      <p className="name"> {capitalizeName(el.photo.name)}</p>
                      <p>
                        {capitalizeSentence(
                          splitSentence(el.photo.description)
                        )}
                        ...
                      </p>
                      <p className="price"> {el.photo.price}€</p>
                      <a href={"/photographer"}>More Info</a>
                    </div>
                  </div>
                )}
              </div>
              <div className="costs">
                <button onClick={() => handleSelect(el, user.id, navigator)}>
                  Get Your Event {el.cost}€
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Offer;
