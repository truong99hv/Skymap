import React, { useEffect, useState } from "react";
import { getData } from "../../data/getData";
import ItemSidebar from "./ItemSidebar";
import { AiFillCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import "./css/sidebar.css";
import Api from "../../data/api";

const Sidebar = (props) => {
  const [items, setItems] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  function handleClickToggle() {
    setIsToggle((prevState) => !prevState);
  }

  const sidebarData = async () => {
    const arrItemSidebar = await getData(Api.loaihientrangs);
    if (arrItemSidebar) {
      setItems(arrItemSidebar);
    } else {
      alert("Khong co du lieu");
    }
  };
  useEffect(() => {
    sidebarData();
  }, []);

  return (
    <div className="sidebar ">
      <h3 className="title-item-sidebar" onClick={handleClickToggle}>
        <span className="icon-toggle">
          {!isToggle ? <AiFillCaretRight /> : <AiOutlineCaretDown />}
        </span>
        Hiện trạng loài
      </h3>
      {isToggle && (
        <ul className="list-item-loaiHienTrang">
          {items.map((item, index) => (
            <ItemSidebar
              className="item-sidebar"
              key={`input ${index}`}
              name={item.ten}
              id={`itemSidebar-${item.id}`}
              valueApi={item.id}
              filter={props.filter}
              api={props.api}
            />
          ))}
        </ul>
      )}

      <hr />
    </div>
  );
};

export default Sidebar;
