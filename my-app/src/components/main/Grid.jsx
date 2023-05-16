import React, { useState, useEffect } from "react";
import "./css/grid.css";
import Result from "./Result";
import GridItem from "./GridItem";
import Loadmore from "./Loadmore";
import { getData } from "../../data/getData";

const Grid = (props) => {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);

  var domain = "https://loainguycap.ceid.gov.vn/";

  const girdData = async () => {
    const arrData = await getData(
      "https://loainguycap.ceid.gov.vn/api/loaicongbo?paginate=true&page=1&perpage=18"
    );
    if (arrData) {
      let arr = arrData.list;
      let arrResult = arrData.pagination;

      setItems(arr);
      setResult(arrResult);
      setLoading(false);
    } else {
      alert("Khong co du lieu");
    }
  };

  useEffect(() => {
    girdData();
  }, []);

  if (loading) {
    return <div className="container loading"></div>;
  } else {
    return (
      <div className="render-grid container">
        <Result result={result.total} />

        {items.length === 0 ? (
          <div className="no-data">Không có dữ liệu</div>
        ) : items.length > 0 && items.length <= 6 ? (
          <ul className="list-grid-item">
            {items.map((item, index) => (
              <GridItem
                key={index}
                isShowImgae={true}
                src={domain + item.attachments[0].path}
                name={item.ten}
                kingdom={item.kingdom ? item.kingdom.ten : ""}
                phylumn={item.phylumn ? item.phylumn.ten : ""}
                ten_khoa_hoc={item.ten_khoa_hoc}
                loai_hien_trang={
                  item.loai_hien_trang
                    ? item.loai_hien_trang.ten
                    : "Chưa xác định"
                }
                sach_do={item.sach_dos[0] ? item.sach_dos[0].ma_danh_muc : ""}
                iucn={item.iucns[0] ? item.iucns[0].ma_danh_muc : ""}
              />
            ))}
          </ul>
        ) : (
          <div className="list-grid">
            <ul className="list-grid-item">
              {items.slice(0, 6).map((item, index) => (
                <GridItem
                  key={index}
                  isShowImgae={true}
                  src={domain + item.attachments[0].path}
                  name={item.ten}
                  kingdom={item.kingdom ? item.kingdom.ten : ""}
                  phylumn={item.phylumn ? item.phylumn.ten : ""}
                  ten_khoa_hoc={item.ten_khoa_hoc}
                  loai_hien_trang={
                    item.loai_hien_trang
                      ? item.loai_hien_trang.ten
                      : "Chưa xác định"
                  }
                  sach_do={item.sach_dos[0] ? item.sach_dos[0].ma_danh_muc : ""}
                  iucn={item.iucns[0] ? item.iucns[0].ma_danh_muc : ""}
                />
              ))}
            </ul>
            <hr />
            <h3 className="other-result"> Kết quả khác </h3>
            <ul className="list-grid-item">
              {items.slice(6, items.length).map((item, index) => (
                <GridItem
                  key={index}
                  isShowImgae={false}
                  src={domain + item.attachments[0].path}
                  name={item.ten}
                  kingdom={item.kingdom ? item.kingdom.ten : ""}
                  phylumn={item.phylumn ? item.phylumn.ten : ""}
                  ten_khoa_hoc={item.ten_khoa_hoc}
                  loai_hien_trang={
                    item.loai_hien_trang
                      ? item.loai_hien_trang.ten
                      : "Chưa xác định"
                  }
                  sach_do={item.sach_dos[0] ? item.sach_dos[0].ma_danh_muc : ""}
                  iucn={item.iucns[0] ? item.iucns[0].ma_danh_muc : ""}
                />
              ))}
            </ul>
          </div>
        )}
        <Loadmore />
      </div>
    );
  }
};

export default Grid;
