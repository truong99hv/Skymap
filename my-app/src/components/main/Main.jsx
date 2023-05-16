import React, { useState, useEffect } from "react";

import "./css/main.css";
import ContainerWrap from "./ContainerWrap";

const Main = (props) => {
  return (
    <div className="main">
      <ContainerWrap api={props.api} filter={props.filter} />
    </div>
  );
};

export default Main;
