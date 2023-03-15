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
        select1: "",
        select2: "",
        select4: "",
        select5: "",
        select6: "",
        guestNumber: 10,
        budget: 100,
        // catering: "",
        // rentCar: true,
        // photographer: true,
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
                    <label htmlFor="option1"></label>
                    <select
                        id="option1"
                        name="select1"
                        value={values.select1}
                        onChange={handleOptionChange}
                    >
                        <option value="">
                            {ServiceData.Services.select.select1}
                        </option>
                        <option value="">
                            {ServiceData.Services.options.event.option1}
                        </option>
                        <option value="">
                            {ServiceData.Services.options.event.option2}
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
                        <option value="">
                            {" "}
                            {ServiceData.Services.options.inOutdoor.option1}
                        </option>
                        <option value="">
                            {ServiceData.Services.options.inOutdoor.option2}
                        </option>
                    </select>

                    <label htmlFor="option5"></label>
                    <select
                        id="option5"
                        value={values.select5}
                        name="select5"
                        onChange={handleOptionChange}
                    >
                        <option value="">
                            {ServiceData.Services.select.select5}
                        </option>
                        <option value="">
                            {ServiceData.Services.options.decor.option1}
                        </option>
                        <option value="">
                            {ServiceData.Services.options.decor.option2}
                        </option>
                    </select>
                    <label htmlFor="option6"></label>
                    <select
                        id="option6"
                        value={values.select6}
                        name="select6"
                        onChange={handleOptionChange}
                    >
                        <option value="">
                            {ServiceData.Services.select.select6}
                        </option>
                        <option value="">
                            {ServiceData.Services.options.entertainment.option1}
                        </option>
                        <option value="">
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
                    <label htmlFor="budget">
                        {ServiceData.Services.select.budget}
                    </label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        onChange={handleOptionChange}
                        value={values.budget}
                        min="100"
                        max="1000000"
                    ></input>

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
