import React from "react";
import "./header.css";
import { GrSearch } from "react-icons/gr";

const header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="login">
          <button className="btn btn-login"> Đăng nhập</button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="logo">
            <img
              src="https://loainguycap.ceid.gov.vn/static/img/logoColor.e5de23ce.png"
              alt="Logo"
            />
          </div>
          <div className="box-center">
            <div className="search">
              <div className="box-search">
                <input
                  type="text"
                  name="search"
                  className="input-search"
                  placeholder="Tìm kiếm"
                />
                <button className="btn btn-search">
                  <GrSearch className="icon-search" />
                </button>
              </div>
            </div>
            <div className="advanced">
              <a href="#">Nâng cao</a>
            </div>
          </div>
          <div className="navbar">
            <div className="nav-item">
              <a href="#" className="link-item">
                {" "}
                Bản tin
              </a>
            </div>
            <div className="nav-item">
              <a href="#" className="link-item">
                {" "}
                Giới thiệu
              </a>
            </div>
            <div className="nav-item">
              <a href="#" className="link-item">
                {" "}
                Tài liệu
              </a>
            </div>
            <div className="nav-item">
              <a href="#" className="link-item">
                {" "}
                Liên hệ{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
