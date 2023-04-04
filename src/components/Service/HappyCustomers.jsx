import { t } from "i18next";
import { useTranslation } from "react-i18next";

import "./happy.scss";

function HappyCustomers() {
  const customers = [1, 2, 3, 4];
  const customersPic = [1, 2, 3, 4, 5, 6];
  const customerName = [
    "Jenny & Mark",
    "Birthdays Party",
    "Lessy & John",
    "Andrew & Tanny",
  ];
  const { t } = useTranslation();

  return (
    <div className="happyBlock">
      <h1>{t("customers.0")}</h1>

      {customers.map((el, i) => (
        <>
          <h2 key={i}>{customerName[i]}</h2>
          <div className="gallery">
            {customersPic.map((pic) => {
              return (
                <div className={`gallery__item gallery__item--${pic}`}>
                  <img
                    src={`/happycustomers/${el}/${pic}.jpg`}
                    className="gallery__img"
                    alt={`Image ${pic}`}
                  />
                </div>
              );
            })}
          </div>
        </>
      ))}
    </div>
  );
}

export default HappyCustomers;
