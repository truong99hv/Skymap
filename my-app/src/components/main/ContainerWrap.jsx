import React, { useState } from "react";
import Api from "../../data/api";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RenderApi from "./RenderApi";

const ContainerWrap = (props) => {
  let [tab, setTab] = useState(0);
  return (
    <div>
      <Navbar onSetTab={setTab} api={props.api} />
      <div className="content-wrap container">
        <Sidebar api={props.api} filter={props.filter} />
        <RenderApi tab={tab} api={props.api} filter={props.filter} />
      </div>
    </div>
  );
};

export default ContainerWrap;
