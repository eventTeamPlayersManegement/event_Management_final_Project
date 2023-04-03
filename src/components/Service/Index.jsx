import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ServiceData from "../../content/data.json";
import CustomButton from "../lib/CustomButton.jsx";
import DatePicker from "react-datepicker";
import city from "../../content/city.json";
import { getPath, getPathonId } from "../../library/api.jsx";
import { capitalizeName } from "../lib/ultilitis.js";
import Offer from "./Offer.jsx";
import { EventContext } from "../../context/Context.jsx";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import HappyCustomers from "./HappyCustomers.jsx";
import { useTranslation } from "react-i18next";

export default function Service() {
  const { t } = useTranslation();

  const data = useContext(EventContext);
  const [user, setUser] = data;
  const inicialValues = {
    event: "",
    location: "",
    date: new Date(),
    indoor: true,
    entertainment: "",
    guestNumber: 10,
    budget: 500,
    rentAuto: false,
    photographer: false,
  };
  const partners = ["entertainment", "rentauto", "photographer"];
  const navigator = useNavigate();
  const [values, setValues] = useState(inicialValues);
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    Promise.all(partners.map((el) => getPath(el))).then((res) => {
      const modified = partners.reduce((acc, el, i) => {
        acc[el] = res[i];
        return acc;
      }, {});
      setSuppliers(modified);
    });
  }, []);

  const cityOptions = city.map((city, i) => (
    <option key={i} value={city.name}>
      {city.name}
    </option>
  ));

  function handleOptionChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!user.id) {
      navigator("/signin");
    }
    const restaurants = fetch("api/restaurant/filtered", {
      method: "POST",
      body: JSON.stringify({
        eventType: values.event.toLowerCase(),
        indoor: values.indoor,
        city: values.location.toLowerCase(),
        capacity: values.guestNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const rentcar = getPathonId("rentauto", values.rentAuto);
    const photographer = getPathonId("photographer", values.photographer);
    const entertainment = getPathonId("entertainment", values.entertainment);

    Promise.all([restaurants]).then((res) =>
      Promise.all([
        ...res.map((el) => el.json()),
        rentcar,
        entertainment,
        photographer,
      ]).then((json) => {
        const [restaurants, rent, entertainement, photo] = json;

        if (restaurants.length) {
          const updated = restaurants.map(
            (el) => (el = { ...el, rent, entertainement, photo })
          );
          const checkBudget = updated
            .filter((el) => {
              const cost =
                +el.price * +values.guestNumber +
                +el.rent.price +
                +el.entertainement.price +
                +el.photo.price;
              const diff = +values.budget - cost > 0;
              return diff;
            })
            .map((el) => {
              const cost =
                +el.price * +values.guestNumber +
                +el.rent.price +
                +el.entertainement.price +
                +el.photo.price;
              return { ...el, cost: cost };
            });
          sessionStorage.setItem("offers", JSON.stringify(checkBudget));
          setUser((prev) => (prev = { ...prev, filtred: checkBudget }));
        }
      })
    );

    //     const result = res.map((el) => el.json());
    //     return result;
    //   })
    //   .then((json) => setValues((prev) => (prev = { ...prev, filtred: json })));

    // // console.log("submited");
    // const json = JSON.stringify(values);
    // localStorage.setItem("onSubmitHandler", json);
    // setValues(inicialValues);
    // navigate("/invoice");
    // setSelectedDate(new Date());
  };

  return (
    <div className="servicesBlock">
      <div className="formBlock">
        <h1 className="title">{t("Services.title")}</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="input-select-container">
            <label htmlFor="location"></label>
            <select
              id="location"
              name="location"
              value={values.location}
              onChange={handleOptionChange}
              required
            >
              <option>{t("Services.select.location")}</option>
              {cityOptions}
            </select>
            <label htmlFor="event"></label>
            <select
              id="event"
              name="event"
              value={values.event}
              onChange={handleOptionChange}
            >
              <option>{t("Services.select.event")}</option>
              <option value="Birthday">
                {t("Services.options.event.option1")}
              </option>
              <option value="Wedding">
                {t("Services.options.event.option2")}
              </option>
            </select>

            <DatePicker
              className="datepicker"
              selected={values.date}
              onChange={(date) =>
                setValues((prev) => (prev = { ...prev, date }))
              }
            />

            <label htmlFor="inOutdoor"></label>
            <select
              id="inOutdoor"
              value={values.indoor}
              name="indoor"
              onChange={handleOptionChange}
            >
              <option value="">{t("Services.select.inOutdoor")}</option>
              <option value={true}>
                {t("Services.options.inOutdoor.option1")}
              </option>
              <option value={false}>
                {t("Services.options.inOutdoor.option2")}
              </option>
            </select>
            <label htmlFor="guestNumber">
              {t("Services.select.guestNumber")}
            </label>
            <input
              className="guests"
              type="number"
              id="guestNumber"
              name="guestNumber"
              onChange={handleOptionChange}
              value={values.guestNumber}
              min="10"
              max="200"
            ></input>
            <label htmlFor="entertainment"></label>
            <select
              id="entertainment"
              value={values.entertainment}
              name="entertainment"
              onChange={handleOptionChange}
            >
              <option value="">{t("Services.select.entertainment")}</option>
              {suppliers?.entertainment?.map((enter) => {
                return (
                  <option key={enter._id} value={enter._id}>
                    {capitalizeName(enter.name)}
                  </option>
                );
              })}
            </select>

            <label htmlFor="rentAuto"></label>
            <select
              id="rentAuto"
              name="rentAuto"
              value={values.rentAuto}
              onChange={handleOptionChange}
            >
              <option value="">{t("Services.select.rentAuto")}</option>
              {suppliers?.rentauto?.map((auto) => {
                return (
                  <option key={auto._id} value={auto._id}>
                    {capitalizeName(auto.name)}
                  </option>
                );
              })}
            </select>
            <label htmlFor="photographer"></label>
            <select
              id="photographer"
              name="photographer"
              value={values.photographer}
              onChange={handleOptionChange}
            >
              <option value="">{t("Services.select.photographer")}</option>
              {suppliers?.photographer?.map((photo) => {
                return (
                  <>
                    <option
                      key={photo._id}
                      value={photo._id}
                      // style={{ backgroundImage: `url(${photo.avatar})` }}
                    >
                      {<img src={photo.avatar} height="30px" width="30px" />}
                      {capitalizeName(photo.name)}
                    </option>
                  </>
                );
              })}
            </select>
            <label htmlFor="budget"></label>
            <select
              id="budget"
              value={values.budget}
              name="budget"
              onChange={handleOptionChange}
            >
              <option value="">{t("Services.select.budget")}</option>
              <option value="2000">
                {ServiceData.Services.options.budget.option1}
              </option>
              <option value="5000">
                {ServiceData.Services.options.budget.option2}
              </option>
              <option value="10000">
                {ServiceData.Services.options.budget.option3}
              </option>
            </select>

            <CustomButton
              type="submit"
              submit={t("Services.submit")}
              style={"customBtnDefault"}
            />
          </div>
        </form>
      </div>

      {!user.filtred?.length ? (
        <HappyCustomers />
      ) : (
        <Offer offer={user.filtred} />
      )}
    </div>
  );
}
