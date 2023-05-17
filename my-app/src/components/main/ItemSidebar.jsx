import React, { useEffect, useState } from "react";
import "./css/sidebar.css";
import Api from "../../data/api";

const ItemSidebar = (props) => {
  let { name, valueApi, id, api, filter } = props;
  let filterParams = api;
  const [isChecked, setIsChecked] = useState(false);
  // const [checkedItems, setCheckedItems] = useState([]);
  const [value, setValue] = useState("");
  // const [apiFilter, setApiFilter] = useState();

  const handleCheckboxChange = (event) => {
    let content = "";
    setIsChecked(event.target.checked);
    content = "&loaihientrang_ids[]=" + event.target.value;
    if (event.target.checked) {
      setValue(event.target.value);
      filterParams += content;
    } else {
      setValue("");
      filterParams = filterParams.replace(content, "");
    }
    filter(filterParams);
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
    </li>
  );
};

export default ItemSidebar;
