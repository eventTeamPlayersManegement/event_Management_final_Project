import React from "react";
import "./style.scss";
import { useState } from "react";
import ServiceData from "../../content/data.json";
import CustomButton from "../lib/CustomButton.jsx";
const submit = "submit";
export default function Service() {
  const [option, setOption] = useState("");

  function handleOptionChange(event) {
    setOption(event.target.value);
  }
  const handleClick = (event) => {
    event.preventDefault();
    console.log("submited");
  };

  return (
    <>
      <h1 className="title">{ServiceData.Services.title}</h1>
      <form onClick={handleClick}>
        <div className="input-select-container">
          <label>Select an option:</label>
          <select
            id="option-select"
            value={option.value}
            onChange={handleOptionChange}
          >
            <option value={option.value}>
              {ServiceData.Services.select.select1}
            </option>
            <option value={option.value}>
              {ServiceData.Services.options.option1}
            </option>
            <option value={option.value}>
              {ServiceData.Services.options.option2}
            </option>
          </select>
          <select
            id="option-select"
            value={option.value}
            onChange={handleOptionChange}
          >
            <option value={option.value}>
              {ServiceData.Services.select.select2}
            </option>
            <option value={option.value}>Locations</option>
          </select>
          <select
            id="option-select"
            value={option.value}
            onChange={handleOptionChange}
          >
            <option value={option.value}>
              {ServiceData.Services.select.select3}
            </option>
            <option value={option.value}>Date</option>
          </select>
          <select
            id="option-select"
            value={option.value}
            onChange={handleOptionChange}
          >
            <option value={option.value}>
              {ServiceData.Services.select.select4}
            </option>
            <option value={option.value}>Space</option>
          </select>
          <select
            id="option-select"
            value={option.value}
            onChange={handleOptionChange}
          >
            <option value={option.value}>
              {ServiceData.Services.select.select5}
            </option>
            <option value={option.value}>Deckor</option>
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
