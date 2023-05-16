import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdTableRows } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";
import "./css/nav.css";
import Grid from "./Grid";
import Table from "./Table";
import Statistical from "./Statistical";
import Sidebar from "./Sidebar";

const ListItem = (props) => {
  return (
    <div className="navbar-item">
      <button
        className={"btn btn-nav-main " + props.classTag}
        onClick={props.onClick}
      >
        <span>{props.icon}</span> {props.ItemChildren}
      </button>
    </div>
  );
};

const arr = [
  {
    classTag: "nav-link ",
    icon: <CgMenuGridO />,
    ItemChildren: "LƯỚI",
  },
  {
    classTag: "nav-link ",
    icon: <MdTableRows />,
    ItemChildren: "BẢNG",
  },
  {
    classTag: "nav-link ",
    icon: <IoStatsChart />,
    ItemChildren: "THỐNG KÊ",
  },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // create a state for activeIndex
  const [activeContent, setActiveContent] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    setActiveContent(index);
  };

  const renderedContent = () => {
    switch (activeContent) {
      case 0:
        return <Grid />;
      case 1:
        return <Table />;
      case 2:
        return <Statistical />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="navbar-main container">
        <div className="navbar-left"></div>

        <div className="navbar-right">
          <div className="list-nav">
            {arr.map((item, index) => {
              return (
                <ListItem
                  key={`item-${index}`}
                  classTag={
                    item.classTag + (activeIndex === index ? " active" : "")
                  }
                  icon={item.icon}
                  ItemChildren={item.ItemChildren}
                  onClick={() => handleClick(index)}
                />
              );
            })}
          </div>

          <div className="excel">
            <button className="btn btn-excel">
              <SiMicrosoftexcel />
            </button>
          </div>
        </div>
      </div>
      <div className="content-wrap container">
        <Sidebar />
        {renderedContent()}
      </div>
    </>
  );
};

export default Navbar;
