import Form from "../lib/Form.jsx";
import "./style.scss";
import { useEffect, useState } from "react";
import { getPath } from "../../library/api";
import { capitalizeName, capitalize } from "../lib/ultilitis.js";

function Index({ path }) {
  const [dataBase, setDataBase] = useState([]);

  useEffect(() => {
    async function getData() {
      const daten = await getPath(path);

      setDataBase(daten);
    }
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
          name: "portfolio",
          type: "text",
          placeholder: "portfolio",
          default: "",
        },

        {
          name: "description",
          type: "textarea",
          placeholder: "description",
          default: "",
        },
        {
          name: "location",
          type: "text",
          placeholder: "location",
          default: "",
        },
        {
          name: "fotos",
          type: "file",
          placeholder: "",
          multiple: true,
          default: [],
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
    restaurant: {
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
          name: "description",
          type: "textarea",
          placeholder: "decsription",
          default: "",
        },
        {
          name: "capacitymin",
          type: "number",
          placeholder: "capacity",
          default: 5,
        },
        {
          name: "capacitymax",
          type: "number",
          placeholder: "capacity",
          default: 200,
        },
        {
          name: "street",
          type: "text",
          placeholder: "street",
          default: "",
        },
        {
          name: "houseNumber",
          type: "text",
          placeholder: "street",
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
        {
          name: "price",
          type: "text",
          placeholder: "price",
          default: "",
        },
      ],
      greeting: "Add here data for ",
    },
    rentauto: {
      fields: [
        {
          name: "name",
          type: "text",
          placeholder: "model",
          default: "",
        },
        {
          name: "avatar",
          type: "file",
          placeholder: "avatar",
          default: "",
        },
        {
          name: "provider",
          type: "text",
          placeholder: "provider",
          default: "",
        },
        {
          name: "city",
          type: "text",
          placeholder: "city",
          default: "",
        },
        {
          name: "zipCode",
          type: "text",
          placeholder: "zipCode",
          default: "",
        },
        {
          name: "fotos",
          type: "file",
          placeholder: "",
          multiple: true,
          default: [],
        },
        {
          name: "description",
          type: "textarea",
          placeholder: "description",
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
          type: "textarea",
          placeholder: "decsription",
          default: "",
        },
        {
          name: "street",
          type: "text",
          placeholder: "street",
          default: "",
        },
        {
          name: "houseNumber",
          type: "text",
          placeholder: "houseNumber",
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
      {path === "message" ? (
        <div className="blockMessage">
          {dataBase.map((el) => {
            return (
              <div key={el._id} className="oneEmail">
                <h2> From: {capitalizeName(el.name)}</h2>

                <a href={`mailto:${el.email}`}>{el.email}</a>
                <h3>Subject: {capitalize(el.title)}</h3>
                <div>{el.message}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="blockContainer">
          <div className="blockInputs">
            <Form data={data} path={path} />
          </div>
          <div className="block">
            <h1>
              We have {dataBase.length} supplires as {capitalize(path)}
            </h1>
            <div className="blockData">
              {dataBase.map((el) => {
                return (
                  <div key={el._id} className="data">
                    <div className="top">
                      <img src={el.avatar} alt="avatar" />
                      <h3>{capitalizeName(el.name)}</h3>
                    </div>
                    <div className="details">
                      <p>{capitalize(el.description)}</p>
                    </div>
                    <div className="bottom">
                      {path === "restaurant" && (
                        <p className="capacity">
                          Capacity: {el.capacitymin} - {el.capacitymax} pers.
                        </p>
                      )}
                      {path === "photographer" && (
                        <a href={el.portfolio} target={"_blank"}>
                          {el.portfolio}
                        </a>
                      )}
                      <h4> Price: {el.price} €</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="back">
        <a className="backButton" href={"/dashboard"}>
          Back
        </a>
      </div>
    </div>
  );
}

export default Index;
