import React, { useState } from "react";
import "./css/sidebar.css";

const ItemSidebar = (props) => {
  let { name, valueApi, id } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setValue(event.target.value);
      console.log(value);
    } else {
      setValue("");
    }
  };
  return (
    <li className="item-sidebar">
      <input
        type="checkbox"
        name={name}
        id={id}
        value={valueApi}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={name}>{name}</label>
      <hr className="hr-sidebar" />
      <p>value: {value}</p>
    </li>
  );
};

export default ItemSidebar;
