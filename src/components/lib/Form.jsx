import { useState } from "react";
import Input from "./Input.jsx";

const getInitial = (arr) => {
  return arr.reduce((acc, el) => {
    acc[el.name] = el.default;
    return acc;
  }, {});
};

const Form = ({ data, path }) => {
  const { fields, greeting } = data;
  const [formData, setFormData] = useState(getInitial(fields));

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/${path}`, {
      method: "POST",
      body: JSON.stringify(formData).toLowerCase(),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{`${greeting}${path}`}</h1>
      {fields.map((field) => (
        <Input data={field} handleChange={setFormData} />
      ))}
      <button>Save Data</button>
    </form>
  );
};

export default Form;
