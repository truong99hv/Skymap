import React from "react";

const GridItem = (props) => {
  let {
    src,
    name,
    kingdom,
    phylumn,
    ten_khoa_hoc,
    loai_hien_trang,
    sach_do,
    iucn,
    isShowImgae,
  } = props;
  src =
    props.src ||
    "https://loainguycap.ceid.gov.vn/static/img/image4.5aecb9b5.png";

  return (
    <li className="item-grid">
      <a href="#" className="thumbnail-grid">
        {!isShowImgae ? (
          ""
        ) : (
          <div className="image-grid">
            <img src={src} alt={name} />
          </div>
        )}
        <div className="dec-grid">
          <div className="details-item">
            <div className="kingdom-phylumn">
              {kingdom} - {phylumn}
            </div>
            <div className="name-item">{name}</div>
            <div className="scientific-name">{ten_khoa_hoc}</div>
          </div>

          <div className="current-item">
            <div className="kind-status">
              {loai_hien_trang && loai_hien_trang !== null
                ? loai_hien_trang
                : "Chưa xác định"}
            </div>
            <div className="status-item">
              <div className={sach_do ? "red-book-item" : " "}>{sach_do}</div>

              <div className={iucn ? "iucn-item" : ""}> {iucn} </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default GridItem;
