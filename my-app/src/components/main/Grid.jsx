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

  var domain = "https://loainguycap.ceid.gov.vn/";

  const girdData = async () => {
    const arrData = await getData(props.api);
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
  }, [props.api]);

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
                  src={
                    item.attachments[0]
                      ? domain + item.attachments[0].path
                      : "https://loainguycap.ceid.gov.vn/static/img/image4.5aecb9b5.png"
                  }
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
              {items
                .slice(6, items.length)
                .map((item, index) => renderItem(domain, item, index))}
            </ul>
          </div>
        )}
        <Loadmore api={props.api} filter={props.filter} />
      </div>
    );
  }
};
function renderItem(domain, item, index) {
  return (
    <GridItem
      key={index}
      isShowImgae={false}
      src={domain + item.attachments[0].path}
      name={item.ten}
      kingdom={item.kingdom ? item.kingdom.ten : ""}
      phylumn={item.phylumn ? item.phylumn.ten : ""}
      ten_khoa_hoc={item.ten_khoa_hoc}
      loai_hien_trang={
        item.loai_hien_trang ? item.loai_hien_trang.ten : "Chưa xác định"
      }
      sach_do={item.sach_dos[0] ? item.sach_dos[0].ma_danh_muc : ""}
      iucn={item.iucns[0] ? item.iucns[0].ma_danh_muc : ""}
    />
  );
}
export default Grid;
// const Grid = (props) => {
//   console.log(props);
//   var domain = "https://loainguycap.ceid.gov.vn/";
//   return (
//     <div className="render-grid container">
//       <Result result={props.data.total} />

//       {props.data.length === 0 ? (
//         <div className="no-data">Không có dữ liệu</div>
//       ) : props.data.length > 0 && props.data.length <= 6 ? (
//         <ul className="list-grid-item">
//           {props.data.map((item, index) => (
//             <GridItem
//               key={index}
//               isShowImgae={true}
//               src={domain + props.attachments[0].path}
//               name={props.ten}
//               kingdom={props.kingdom ? props.kingdom.ten : ""}
//               phylumn={props.phylumn ? props.phylumn.ten : ""}
//               ten_khoa_hoc={props.ten_khoa_hoc}
//               loai_hien_trang={
//                 props.loai_hien_trang
//                   ? props.loai_hien_trang.ten
//                   : "Chưa xác định"
//               }
//               sach_do={props.sach_dos[0] ? props.sach_dos[0].ma_danh_muc : ""}
//               iucn={props.iucns[0] ? props.iucns[0].ma_danh_muc : ""}
//             />
//           ))}
//         </ul>
//       ) : (
//         <div className="list-grid">
//           <ul className="list-grid-props">
//             {props.data.slice(0, 6).map((props, index) => (
//               <GridItem
//                 key={index}
//                 isShowImgae={true}
//                 src={domain + props.attachments[0].path}
//                 name={props.ten}
//                 kingdom={props.kingdom ? props.kingdom.ten : ""}
//                 phylumn={props.phylumn ? props.phylumn.ten : ""}
//                 ten_khoa_hoc={props.ten_khoa_hoc}
//                 loai_hien_trang={
//                   props.loai_hien_trang
//                     ? props.loai_hien_trang.ten
//                     : "Chưa xác định"
//                 }
//                 sach_do={props.sach_dos[0] ? props.sach_dos[0].ma_danh_muc : ""}
//                 iucn={props.iucns[0] ? props.iucns[0].ma_danh_muc : ""}
//               />
//             ))}
//           </ul>
//           <hr />
//           <h3 className="other-result"> Kết quả khác </h3>
//           <ul className="list-grid-props">
//             {props.data
//               .slice(6, props.length)
//               .map((item, index) => renderItem(domain, item, index))}
//           </ul>
//         </div>
//       )}
//       <Loadmore />
//     </div>
//   );
// };
// function renderItem(domain, item, index) {
//   return (
//     <GridItem
//       key={index}
//       isShowImgae={false}
//       src={domain + item.attachments[0].path}
//       name={item.ten}
//       kingdom={item.kingdom ? item.kingdom.ten : ""}
//       phylumn={item.phylumn ? item.phylumn.ten : ""}
//       ten_khoa_hoc={item.ten_khoa_hoc}
//       loai_hien_trang={
//         item.loai_hien_trang ? item.loai_hien_trang.ten : "Chưa xác định"
//       }
//       sach_do={item.sach_dos[0] ? item.sach_dos[0].ma_danh_muc : ""}
//       iucn={item.iucns[0] ? item.iucns[0].ma_danh_muc : ""}
//     />
//   );
// }
// export default Grid;
