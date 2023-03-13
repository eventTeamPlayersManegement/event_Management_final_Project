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
        category: "",
        location: "",
        date: "",
        guestNumber: "",
        outIndoor: "",
        entertainment: "",
    };
    //entertainment sub: dj, band,
    const navigate = useNavigate();

    const [values, setValues] = useState(inicialValues);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // const cityOptions = city.map((city, i) => (
    //     <option key={i} value={city.name}>
    //         {city.name}
    //     </option>
    // ));

    function handleOptionChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("submited");

        // const fd = new FormData();
        // fd.append("venue", values.venue);
        // fd.append("city", values.city);

        // const obj = Object.fromEntries(fd);
        // console.log(obj, values, fd);
        const json = JSON.stringify(values);
        localStorage.setItem("onSubmitHandler", json);

        setValues(inicialValues);
        setSelectedDate(new Date());

        // navigate("/Invoice/Index.jsx", { replace: true });
        window.location.href = "confirm.html"; //redirect navigate
    };
    console.log("Venue type: " + values.venue);
    console.log("City name: " + values.city);

    return (
        <>
            {/* <Navigate to="../Invoice/Index.jsx" replace={true} /> */}
            <h1 className="title">chose data</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="venue">Event</label>
                    <br />
                    <select
                        name="venue"
                        value={values.venue}
                        onChange={handleOptionChange}
                    >
                        <option value="" selected disabled hidden></option>
                        <option value="wedding">wedding</option>
                        <option value="birthday">birthday</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <br />
                    <select
                        name="city"
                        value={values.city}
                        onChange={handleOptionChange}
                    >
                        <option value="" selected disabled hidden></option>
                        <option value="berlin">Berlin</option>
                        <option value="munich">Munich</option>
                        <option value="hamburg">Hamburg</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>{" "}
        </>
    );
}

{
    /* <form onSubmit={onSubmitHandler}>
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
          <div>
            <DatePicker
              className="datepicker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
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
      </form> */
}
