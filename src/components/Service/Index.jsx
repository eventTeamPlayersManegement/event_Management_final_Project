import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ServiceData from "../../content/data.json";
import CustomButton from "../lib/CustomButton.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import city from "../../content/city.json";
export default function Service() {
  const inicialValues = {
    event: "",
    location: "",
    date: "",
    inOutdoor: "",
    entertainment: "",
    guestNumber: 10,
    budget: 100,
    rentAuto: false,
    photographer: false,
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(inicialValues);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const cityOptions = city.map((city, i) => (
    <option key={i} value={city.name}>
      {city.name}
    </option>
  ));

  function handleOptionChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submited");
    const json = JSON.stringify(values);
    localStorage.setItem("onSubmitHandler", json);
    setValues(inicialValues);
    navigate("/invoice");
    setSelectedDate(new Date());
  };

  return (
    <>
      <h1 className="title">{ServiceData.Services.title}</h1>

      <form onSubmit={onSubmitHandler}>
        <div className="input-select-container">
          <label htmlFor="event"></label>
          <select
            id="event"
            name="event"
            value={values.event}
            onChange={handleOptionChange}
          >
            <option>{ServiceData.Services.select.event}</option>
            <option value="Birthday">
              {ServiceData.Services.options.event.option1}
            </option>
            <option value="Wedding">
              {ServiceData.Services.options.event.option2}
            </option>
          </select>

          <label htmlFor="location"></label>
          <select
            id="location"
            name="location"
            value={values.location}
            onChange={handleOptionChange}
          >
            <option>{ServiceData.Services.select.location}</option>
            {cityOptions}
          </select>
          <div>
            <DatePicker
              className="datepicker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
          <label htmlFor="inOutdoor"></label>
          <select
            id="inOutdoor"
            value={values.inOutdoor}
            name="inOutdoor"
            onChange={handleOptionChange}
          >
            <option value="">{ServiceData.Services.select.inOutdoor}</option>
            <option value="Indoor">
              {" "}
              {ServiceData.Services.options.inOutdoor.option1}
            </option>
            <option value="Outdoor">
              {ServiceData.Services.options.inOutdoor.option2}
            </option>
          </select>

          {/* <label htmlFor="decor"></label>
                    <select
                        id="decor"
                        value={values.decor}
                        name="decor"
                        onChange={handleOptionChange}
                    >
                        <option value="">
                            {ServiceData.Services.select.decor}
                        </option>
                        <option value="Flowers">
                            {ServiceData.Services.options.decor.option1}
                        </option>
                        <option value="Paintings">
                            {ServiceData.Services.options.decor.option2}
                        </option>
                    </select> */}
          <label htmlFor="entertainment"></label>
          <select
            id="entertainment"
            value={values.entertainment}
            name="entertainment"
            onChange={handleOptionChange}
          >
            <option value="">
              {ServiceData.Services.select.entertainment}
            </option>
            <option value="DJ">
              {ServiceData.Services.options.entertainment.option1}
            </option>
            <option value="Music Band">
              {ServiceData.Services.options.entertainment.option2}
            </option>
          </select>

          <label htmlFor="guestNumber">
            {ServiceData.Services.select.guestNumber}
          </label>
          <input
            type="number"
            id="guestNumber"
            name="guestNumber"
            onChange={handleOptionChange}
            value={values.guestNumber}
            min="10"
            max="1000"
          ></input>
          <label htmlFor="budget"></label>
          <select
            id="budget"
            value={values.budget}
            name="budget"
            onChange={handleOptionChange}
          >
            <option value="">{ServiceData.Services.select.budget}</option>
            <option value="€">
              {ServiceData.Services.options.budget.option1}
            </option>
            <option value="€€">
              {ServiceData.Services.options.budget.option2}
            </option>
            <option value="€€€">
              {ServiceData.Services.options.budget.option3}
            </option>
          </select>

          {/* <label htmlFor="catering"></label>
                    <select
                        id="catering"
                        name="catering"
                        value={values.catering}
                        onChange={handleOptionChange}
                    >
                        <option value="">
                            {ServiceData.Services.select.catering}
                        </option>
                        <option value="Fine dinning">
                            {ServiceData.Services.options.catering.option1}
                        </option>
                        <option value="Finger food">
                            {ServiceData.Services.options.catering.option2}
                        </option>
                    </select> */}
          <label htmlFor="rentAuto"></label>
          <select
            id="rentAuto"
            name="rentAuto"
            value={values.rentAuto}
            onChange={handleOptionChange}
          >
            <option value="">{ServiceData.Services.select.rentAuto}</option>
            <option value="Limousine">
              {ServiceData.Services.options.rentAuto.option1}
            </option>
            <option value="Party bus">
              {ServiceData.Services.options.rentAuto.option2}
            </option>
          </select>
          <label htmlFor="photographer"></label>
          <select
            id="photographer"
            name="photographer"
            value={values.photographer}
            onChange={handleOptionChange}
          >
            <option value="">{ServiceData.Services.select.photographer}</option>
            <option value="Max Gar">
              {ServiceData.Services.options.photographer.option1}
            </option>
            <option value="Maya Trune">
              {ServiceData.Services.options.photographer.option2}
            </option>
          </select>
          <CustomButton
            type="submit"
            submit={ServiceData.Services.submit}
            style={"customBtnDefault"}
          />
        </div>
      </form>
    </>
  );
}
