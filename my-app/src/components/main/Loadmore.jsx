import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
import "./css/loadmore.css";
import { getData } from "../../data/getData";

const Loadmore = (props) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [page, setPage] = useState();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLoadMore = async () => {
    setLoading(true);
    let newPage = "page=" + visibleItems;
    setPage(newPage);
    let newApi = props.api.replace("page=1", newPage);
    const loadMore = await getData(newApi);
    let arrLoadmore = loadMore.list;
    if (arrLoadmore && visibleItems > 1) {
      setItems((prevData) => [...prevData, ...arrLoadmore]);
      setLoading(false);
    }
  };

  const loadMore = () => {
    setVisibleItems((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getLoadMore();
  }, [visibleItems]);

  return (
    <>
      {visibleItems && visibleItems < 2 ? (
        <div className="load-more">
          <div className="btn-load-more" onClick={loadMore}>
            Xem thêm
          </div>
        </div>
      ) : (
        <div className="load-more">
          <ul className="list-loadmore list-grid-item">
            {items.map((item, index) => (
              <GridItem
                key={index}
                isShowImgae={false}
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
          {loading ? (
            <div className="container loading"></div>
          ) : (
            <div className="btn-load-more" onClick={loadMore}>
              Xem thêm
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Loadmore;
