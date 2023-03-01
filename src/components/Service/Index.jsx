import React from "react";
import "./style.scss";
import { useState } from "react";
import ServiceData from "../../content/data.json";
import CustomButton from "../lib/CustomButton.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { City } from "country-state-city";

export default function Service() {
  const inicialValues = {
    select1: "",
    select2: "",
    select4: "",
    select5: "",
    select6: "",
    select7: "",
  };

  const [values, setValues] = useState(inicialValues);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const germanyCities = City.getCitiesOfCountry("DE");

  const cityOptions = germanyCities.map((city) => (
    <option key={city.name} value={city.name}>
      {city.name}
    </option>
  ));

  function handleOptionChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submited");
    setValues(inicialValues);
    setSelectedDate(new Date());
  };

  return (
    <>
      <h1 className="title">{ServiceData.Services.title}</h1>

      <form onSubmit={onSubmitHandler}>
        <div className="input-select-container">
          <label htmlFor="option1"></label>
          <select
            id="option1"
            name="select1"
            value={values.select1}
            onChange={handleOptionChange}
          >
            <option value="">{ServiceData.Services.select.select1}</option>
            <option value="option1">
              {ServiceData.Services.options.option1}
            </option>
            <option value="option2">
              {ServiceData.Services.options.option2}
            </option>
          </select>

          <label htmlFor="city"></label>
          <select
            id="city"
            name="select2"
            value={values.select2}
            onChange={handleOptionChange}
          >
            <option>{ServiceData.Services.select.select2}</option>
            {cityOptions}
          </select>
          <p>
            <DatePicker
              className="datepicker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </p>
          <label htmlFor="option4"></label>
          <select
            id="option4"
            value={values.select4}
            name="select4"
            onChange={handleOptionChange}
          >
            <option value="select4">
              {ServiceData.Services.select.select4}
            </option>
            <option value="option1">Space</option>
          </select>

          <label htmlFor="option5"></label>
          <select
            id="option5"
            value={values.select5}
            name="select5"
            onChange={handleOptionChange}
          >
            <option value="">{ServiceData.Services.select.select5}</option>
            <option value="option1">Deckor</option>
          </select>
          <label htmlFor="option6"></label>
          <select
            id="option6"
            value={values.select6}
            name="select6"
            onChange={handleOptionChange}
          >
            <option value="">{ServiceData.Services.select.select6}</option>
            <option value="option1">Deckor</option>
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
