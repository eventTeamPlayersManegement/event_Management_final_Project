import Form from "../lib/Form.jsx";
import "./style.scss";
import { useEffect, useState } from "react";
import { getPath } from "../../library/api";

function Index({ path }) {
  const [message, setMessage] = useState([]);
  console.log(message);
  async function getData() {
    const daten = await getPath("message");
    setMessage(daten);
  }
  useEffect(() => {
    getData();
  }, []);

  const data = {
    photographer: {
      fields: [
        {
          name: "name",
          type: "text",
          placeholder: "name",
          default: "",
        },
        {
          name: "avatar",
          type: "file",
          placeholder: "avatar",
          default: "",
        },
        {
          name: "fotos",
          type: "file",
          placeholder: "",
          multiple: true,
          default: [{ title: "" }, { description: "" }, { url: [] }],
        },
        {
          name: "price",
          type: "text",
          placeholder: "price",
          default: "",
        },
        {
          name: "location",
          type: "text",
          placeholder: "location",
          default: "",
        },
      ],
      greeting: "Add here data for ",
    },
    restaurants: {
      fields: [
        {
          name: "name",
          type: "text",
          placeholder: "name",
          default: "",
        },
        {
          name: "description",
          type: "text",
          placeholder: "decsription",
          default: "",
        },
        {
          name: "capacity",
          type: "text",
          placeholder: "capacity",
          default: "",
        },
        {
          name: "address",
          type: "text",
          placeholder: "address",
          default: "",
        },
        {
          name: "zipCode",
          type: "text",
          placeholder: "zipCode",
          default: "",
        },
        {
          name: "city",
          type: "text",
          placeholder: "city",
          default: "",
        },
        {
          name: "fotos",
          type: "file",
          placeholder: "",
          multiple: true,
          default: [],
        },
      ],
      greeting: "Add here data for ",
    },
    rentauto: {
      fields: [],
      greeting: "Add here data for ",
    },
    entertainment: {
      fields: [
        {
          name: "name",
          type: "text",
          placeholder: "name",
          default: "",
        },
        {
          name: "description",
          type: "text",
          placeholder: "decsription",
          default: "",
        },
        {
          name: "price",
          type: "text",
          placeholder: "price",
          default: "",
        },
      ],
      greeting: "Add here data for ",
    },
    messages: {
      fields: [],
      greeting: "Manage customers  ",
      messages: [],
    },
  }[path];

  return (
    <div className="manageBlock">
      <Form data={data} path={path} />
      {/* <div>
        {message.map((el) => {
          return (
            <div className="oneEmail">
              <h3>{el.name}</h3>
              <h4>{el.email}</h4>
              <h5>{el.title}</h5>
              <div>{el.message}</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Index;
