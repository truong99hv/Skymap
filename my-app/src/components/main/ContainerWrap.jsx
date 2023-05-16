import React, { useState } from "react";
import Api from "../../data/api";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const ContainerWrap = (props) => {
  let [tab, setTab] = useState(0);
  let [apiLHT, setApiLHT] = useState(Api.loaihientrangs);
  let [apiPlace, setApiPlace] = useState(Api.provinces);
  let [apiUICN, setapiUICN] = useState(Api.sachDo);
  return (
    <div>
      <Navbar onSetTab={setTab} api={props.api} />
      {/* <Sidebar
        api={props.api}
        filter={props.filter}
        apiLHT={apiLHT}
        apiPlace={apiPlace}
        apiUICN={apiUICN}
      /> */}

      {/* <Navbar tab={tab} api={props.api} filter={props.filter} /> */}
    </div>
  );
};

export default ContainerWrap;
