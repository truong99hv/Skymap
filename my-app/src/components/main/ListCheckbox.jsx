import React, { useState } from "react";
import ItemSidebar from "./ItemSidebar";
import { AiFillCaretRight, AiOutlineCaretDown } from "react-icons/ai";

const ListCheckbox = (props) => {
  console.log(props);
  const [items, setItems] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  function handleClickToggle() {
    setIsToggle((prevState) => !prevState);
  }
  return (
    <div>
      {" "}
      <h3 className="title-item-sidebar" onClick={handleClickToggle}>
        <span className="icon-toggle">
          {!isToggle ? <AiFillCaretRight /> : <AiOutlineCaretDown />}
        </span>
      </h3>
      {isToggle && (
        <ItemSidebar filter={props.filter} name={props.name} api={props.api} />
      )}
    </div>
  );
};

export default ListCheckbox;
