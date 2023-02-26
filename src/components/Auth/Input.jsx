import React from "react";

function Input({ data, handleChange, dataUser }) {
  return (
    <input
      className="input"
      type={data.type}
      name={data.name}
      placeholder={data.name}
      onChange={handleChange}
      value={dataUser[data.name]}
    />
  );
}

export default Input;
