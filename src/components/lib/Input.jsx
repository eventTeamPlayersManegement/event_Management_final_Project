import React from "react";
import storePicture from "../../library/storePicture.js";
import { capitalize } from "../lib/ultilitis.js";

function Input({ data, handleChange }) {
  const { name, type, placeholder, multiple = false } = data;
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
            (prev) =>
              (prev = {
                fotos: [...prev.fotos, res],
              })
          );
        });
      });
    }
  };
  return (
    <label>
      {capitalize(name)}
      <input
        name={name}
        type={type}
        onChange={type === "file" ? handleFile : handleData}
        placeholder={placeholder}
        multiple={multiple}
      />
    </label>
  );
}

export default Input;
