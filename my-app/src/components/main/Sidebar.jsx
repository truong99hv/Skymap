import React, { useEffect, useState } from "react";
import { getData } from "../../data/getData";
import ItemSidebar from "./ItemSidebar";
import { AiFillCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import "./css/sidebar.css";

const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  function handleClickToggle() {
    setIsToggle((prevState) => !prevState);
  }
  let listApi = [
    "https://loainguycap.ceid.gov.vn/api/loaihientrangs",
    "https://loainguycap.ceid.gov.vn/api/provinces",
    "https://loainguycap.ceid.gov.vn/api/danhmuccha?ma_danh_mucs[]=REDBOOK",
    "https://loainguycap.ceid.gov.vn/api/danhmuccha?ma_danh_mucs[]=IUCN",
  ];

  const sidebarData = async () => {
    const arrItemSidebar = await getData(
      "https://loainguycap.ceid.gov.vn/api/loaihientrangs"
    );
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
            />
          ))}
        </ul>
      )}

      <hr />
    </div>
  );
};

export default Sidebar;
