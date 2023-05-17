import React, { useEffect, useState } from "react";
import { getData } from "../../data/getData";
import Table from "./Table";
import Statistical from "./Statistical";
import Grid from "./Grid";

const RenderApi = (props) => {
  const [dataGrid, setDataGrid] = useState([]);
  const [dataTale, setDataTale] = useState([]);

  useEffect(() => {
    const gridApi = async () => {
      let listDataGrid = await getData(props.api);
      setDataGrid(listDataGrid.list);
    };

    gridApi();
  }, [props.api]);

  useEffect(() => {
    const tableApi = async () => {
      const listDataTable = await getData(props.api);
      setDataTale(listDataTable.list);
    };
    tableApi();
  }, [props.api]);
  let activeContent = null;
  switch (props.tab) {
    case 0:
      activeContent = (
        <Grid data={dataGrid} api={props.api} filter={props.filter} />
      );
      break;
    case 1:
      activeContent = (
        <Table data={dataTale} api={props.api} filter={props.filter} />
      );
      break;
    case 2:
      activeContent = <Statistical />;
      break;
    default:
      activeContent = (
        <Grid data={dataGrid} api={props.api} filter={props.filter} />
      );
      break;
  }
  return <div className="content container">{activeContent}</div>;
};

export default RenderApi;
