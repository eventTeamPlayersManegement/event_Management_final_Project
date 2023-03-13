import Form from "../lib/Form.jsx";
import "./style.scss";

function Index({ path }) {
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
          placeholder: "",
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
      greeting: "Hallo",
    },
    restaurants: {
      fields: [],
      greeting: "",
    },
    rentauto: {
      fields: [],
      greeting: "",
    },
    entertainment: {
      fields: [],
      greeting: "",
    },
  }[path];
  return (
    <div>
      <Form data={data} path={path} />
    </div>
  );
}

export default Index;
