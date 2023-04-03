import { useState } from "react";
import { capitalizeName } from "../lib/ultilitis.js";
import "./customSelect.scss";

function CustomSelect({ description, name, setValue, dataArr }) {
  const [selected, setSelected] = useState({
    show: false,
    name: description,
  });
  return (
    <div className="select-container">
      <span onClick={() => setSelected({ ...selected, show: !selected.show })}>
        {capitalizeName(selected.name)}
      </span>
      <ul className={!selected.show ? "hidden" : ""}>
        {dataArr?.map((el) => {
          return (
            <li
              onClick={() => {
                setSelected({ show: false, name: el.name });
                setValue((prev) => (prev = { ...prev, [name]: el._id }));
              }}
            >
              <img src={el?.avatar} alt="" />
              <span>{capitalizeName(el.name)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomSelect;
