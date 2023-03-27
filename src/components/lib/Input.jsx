import React from "react";
import storePicture from "../../library/storePicture.js";
import { capitalize } from "../lib/ultilitis.js";

function Input({ data, handleChange }) {
  const { name, type, placeholder, multiple = false, options = [] } = data;
  const handleData = (e) => {
    handleChange(
      (prev) => (prev = { ...prev, [e.target.name]: e.target.value })
    );
  };
  const handleFile = async (e) => {
    let url = [];
    if (e.target.name === "avatar") {
      url = await storePicture(e.target.files[0]);
      handleChange(
        (prev) =>
          (prev = {
            ...prev,
            [e.target.name]: url,
          })
      );
    } else {
      Object.keys(e.target.files).forEach(async (el) => {
        storePicture(e.target.files[el]).then((res) => {
          handleChange(
            (prev) => (prev = { ...prev, fotos: [...prev.fotos, res] })
          );
        });
      });
    }
  };

  const getInputType = (type) => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            cols={28}
            rows={10}
            name={name}
            onChange={handleData}
            placeholder={placeholder}
            style={{ resize: false }}
          />
        );
      case "text":
        return (
          <input
            name={name}
            type={type}
            onChange={handleData}
            placeholder={placeholder}
          />
        );
      case "number":
        return (
          <input
            name={name}
            type={type}
            onChange={handleData}
            placeholder={placeholder}
          />
        );
      case "file":
        return (
          <input
            name={name}
            type={type}
            onChange={handleFile}
            placeholder={placeholder}
            multiple={multiple}
          />
        );
      case "select":
        return (
          <select
            name={name}
            type={type}
            onChange={handleData}
            placeholder={placeholder}
          >
            {options.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
        );
      default:
        break;
    }
  };

  return (
    <label>
      {capitalize(name)}
      {getInputType(type)}
    </label>
  );
}

export default Input;
